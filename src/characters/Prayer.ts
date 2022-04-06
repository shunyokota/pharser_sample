import Phaser from "phaser";
import Character from "~/characters/Character";
import ImageManager from "~/loaders/ImageManager";

export default class Prayer extends Character {

    public constructor(scene: Phaser.Scene) {
        super(400, 150, 50, 50);
        this.image = scene.add.image(400, 150, ImageManager.prayer.getKey()).setDisplaySize(50, 50).setAngle(-40);

        scene.tweens.add({
            targets: this.image,
            angle: 40,
            duration: 700,
            yoyo: true,
            loop: -1
        });
    }
}