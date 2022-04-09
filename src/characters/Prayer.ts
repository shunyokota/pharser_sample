import Phaser from "phaser";
import Character from "~/characters/Character";
import ImageManager from "~/loaders/ImageManager";
import {CofigConstants} from "~/consts/CofigConstants";

export default class Prayer extends Character {

    public constructor(scene: Phaser.Scene) {
        super(400, 150, CofigConstants.cellSize, CofigConstants.cellSize);
        this.image = scene.add.image(400, 150, ImageManager.prayer.getKey()).setDisplaySize(CofigConstants.cellSize, CofigConstants.cellSize).setAngle(-40);
        scene.cameras.main.startFollow(this.image);

        scene.tweens.add({
            targets: this.image,
            angle: 40,
            duration: 700,
            yoyo: true,
            loop: -1
        });
    }
}