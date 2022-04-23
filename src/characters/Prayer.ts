import Phaser from "phaser";
import Character from "~/characters/Character";
import ImageManager from "~/loaders/ImageManager";
import {CofigConstants} from "~/consts/CofigConstants";
import FrameActionInterface from "~/gameObjects/FrameActionInterface";
import Enemy from "~/characters/Enemy";
import Parameters from "~/Parameters";
import FrameCounter from "~/frame/FrameCounter";
import {MyGame} from "~/index";

export default class Prayer extends Character {

    private normalImage: Phaser.GameObjects.Image;
    private damagedImage: Phaser.GameObjects.Image;
    private isDamaged :boolean = false;

    public constructor(scene: Phaser.Scene, x: number, y :number) {
        super(x, y, CofigConstants.cellSize, CofigConstants.cellSize);
        this.normalImage = scene.add.image(x, y, ImageManager.prayer.getKey()).setDisplaySize(CofigConstants.cellSize, CofigConstants.cellSize).setAngle(-40);
        this.damagedImage = scene.add.image(x, y, ImageManager.prayerDamaged.getKey()).setDisplaySize(CofigConstants.cellSize, CofigConstants.cellSize).setAngle(-40).setVisible(false);
        this.image = this.normalImage;
        scene.cameras.main.startFollow(this.image);

        scene.tweens.add({
            targets: this.image,
            angle: 40,
            duration: 700,
            yoyo: true,
            loop: -1
        });
    }

    public onUpdate(scene: MyGame) {
        if (FrameCounter.isFrameChanged()) {
            const hitCount = this.getHitObjects().filter(obj => obj instanceof Enemy).length;
            if (hitCount === 0) {
                if (this.isDamaged) {
                    this.changeImage(this.normalImage);
                    scene.cameras.main.startFollow(this.image);
                    this.isDamaged = false;
                }
                return;
            }
            Parameters.subtractToku(
                hitCount * 5
            );
            if (!this.isDamaged) {
                this.changeImage(this.damagedImage);
                scene.cameras.main.startFollow(this.image);
                this.isDamaged = true;
            }
        }
    }
}