import Phaser from 'phaser';
import logoImg from '~/assets/logo.png';
import prayerImg from '~/assets/prayer.png';
import {CofigConstants} from "~/consts/CofigConstants";
import ImageManager from "~/loaders/ImageManager";
import Prayer from "~/characters/Prayer";
import Enemy from "~/characters/Enemy";

class MyGame extends Phaser.Scene {
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    private prayer: Prayer;
    private enemy: Enemy;

    constructor() {
        super('sample-scene');
    }

    preload() {
        ImageManager.onPreload(this);
    }

    create() {
        this.prayer = new Prayer(this);
        this.enemy = new Enemy(this)
        this.cursors = this.input.keyboard.createCursorKeys();

        this.add.rectangle(3 * CofigConstants.displayWidth / 4 - 20, 20, CofigConstants.displayWidth / 2, 20, 0xff0000);
    }

    update() {
        if (this.cursors.left.isDown && !this.prayer.isHitLeft(this.enemy))
        {
            this.prayer.goLeft();
        }
        if (this.cursors.right.isDown)
        {
            this.prayer.goRight();
        }
        if (this.cursors.up.isDown)
        {
            this.prayer.goUp();
        }
        if (this.cursors.down.isDown)
        {
            this.prayer.goDown();
        }
        if (this.prayer.isHit(this.enemy)) {
            console.log('hit');
        }
    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: CofigConstants.displayWidth,
    height: CofigConstants.displayHeight,
    backgroundColor: '#4488aa',
    scene: MyGame
};

const game = new Phaser.Game(config);