import Phaser from "phaser";
import Character from "~/characters/Character";
import ImageManager from "~/loaders/ImageManager";

export default class Prayer extends Character {

    public constructor(scene: Phaser.Scene) {
        super();
        this.image = scene.add.image(400, 150, ImageManager.prayer.getKey()).setScale(1).setAngle(-40);

        scene.tweens.add({
            targets: this.image,
            angle: 40,
            duration: 700,
            yoyo: true,
            loop: -1
        });
    }
}