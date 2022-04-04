import Phaser from 'phaser';
import logoImg from '~/assets/logo.png';
import prayerImg from '~/assets/prayer.png';
import {CofigConstants} from "~/consts/CofigConstants";
import ImageManager from "~/loaders/ImageManager";
import Prayer from "~/characters/Prayer";

class MyGame extends Phaser.Scene {
    // private sprite: Phaser.GameObjects.Sprite;
    // private prayer: Phaser.GameObjects.Image;
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    private prayer: Prayer;

    constructor() {
        super('sample-scene');
    }

    preload() {
        this.load.image('logo', logoImg);
        // this.load.image('prayer', prayerImg);
        ImageManager.onPreload(this);
    }

    create() {
        // this.sprite = this.add.sprite(200, 300, 'prayer');
        // this.sprite.setScale(0.5);
        // this.prayer = this.add.image(400, 150, ImageManager.prayer.getKey()).setScale(1).setAngle(-40);
        this.prayer = new Prayer(this)
        this.cursors = this.input.keyboard.createCursorKeys();

        this.add.rectangle(3 * CofigConstants.displayWidth / 4 - 20, 20, CofigConstants.displayWidth / 2, 20, 0xff0000);
        // sprite.setRotation(10);
        // sprite.
        // sprite.anchor.setTo(0.5, 0.5);
        //
        // const logo = this.add.image(400, 150, 'logo');
        //
        // this.tweens.add({
        //     targets: logo,
        //     y: 450,
        //     duration: 2000,
        //     ease: "Power2",
        //     yoyo: true,
        //     loop: -1
        // });

        //
        // this.tweens.add({
        //     targets: this.prayer,
        //     angle: 40,
        //     duration: 700,
        //     yoyo: true,
        //     loop: -1
        // });
    }

    update() {
        if (this.cursors.left.isDown)
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
        // this.sprite.angle += 1;

        // text.setText([
        //     'Sprite Rotation',
        //     'Angle: ' + arrow.angle.toFixed(2),
        //     'Rotation: ' + arrow.rotation.toFixed(2)
        // ]);
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