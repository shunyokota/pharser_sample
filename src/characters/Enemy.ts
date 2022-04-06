import Phaser from "phaser";
import Character from "~/characters/Character";
import ImageManager from "~/loaders/ImageManager";

export default class Enemy extends Character {

    public constructor(scene: Phaser.Scene) {
        super(200, 200, 50, 50);
        this.image = scene.add.image(200, 200, ImageManager.enemy.getKey()).setDisplaySize(50, 50);
    }
}