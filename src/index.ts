import Phaser from 'phaser';
import logoImg from '~/assets/logo.png';
import prayerImg from '~/assets/prayer.png';
import {CofigConstants} from "~/consts/CofigConstants";
import ImageManager from "~/loaders/ImageManager";
import Prayer from "~/characters/Prayer";
import Enemy from "~/characters/Enemy";
import Rectangle = Phaser.GameObjects.Rectangle;
import Parameters from "~/Parameters";
import FrameCounter from "~/frame/FrameCounter";
import Wall from "~/things/Wall";

class MyGame extends Phaser.Scene {
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    private prayer: Prayer;
    private enemy: Enemy;
    private parameters: Parameters;
    private tokBar: Rectangle;

    constructor() {
        super('sample-scene');
    }

    preload() {
        ImageManager.onPreload(this);
    }

    create() {
        this.prayer = new Prayer(this);
        this.enemy = new Enemy(this)
        new Wall(this);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.parameters = new Parameters();

        this.tokBar = this.add.rectangle(3 * CofigConstants.displayWidth / 4 - 20, 20, 0, 20, 0xff0000).setScrollFactor(0);
        // new Rectangle(this, 3 * CofigConstants.displayWidth / 4 - 20, 20, CofigConstants.displayWidth / 2, 20, 0xff0000)
        //     .setScrollFactor(0);
        // const rectangle = new Rectangle(this, 3 * CofigConstants.displayWidth / 4 - 20, 20, CofigConstants.displayWidth / 2, 20, 0xff0000)
        // rectangle.setScrollFactor(0);
    }

    update() {
        if (this.cursors.left.isDown && !this.prayer.isHitLeft(this.enemy))
        {
            this.prayer.goLeft();
        }
        if (this.cursors.right.isDown && !this.prayer.isHitRight(this.enemy))
        {
            this.prayer.goRight();
        }
        if (this.cursors.up.isDown && !this.prayer.isHitTop(this.enemy))
        {
            this.prayer.goUp();
        }
        if (this.cursors.down.isDown && !this.prayer.isHitBottom(this.enemy))
        {
            this.prayer.goDown();
        }
        if (this.prayer.isHit(this.enemy)) {
            console.log('hit');
        }
        this.parameters.addToku(0.01);
        this.tokBar.width = this.parameters.getToku();
        FrameCounter.onUpdate();
        this.enemy.onUpdate(this);
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