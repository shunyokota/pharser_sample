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

    public constructor(scene: Phaser.Scene, x: number, y :number) {
        super(x, y, CofigConstants.cellSize, CofigConstants.cellSize);
        this.image = scene.add.image(x, y, ImageManager.prayer.getKey()).setDisplaySize(CofigConstants.cellSize, CofigConstants.cellSize).setAngle(-40);
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
            Parameters.subtractToku(
                this.getHitObjects().filter(obj => obj instanceof Enemy).length * 5
            );
        }
    }
}