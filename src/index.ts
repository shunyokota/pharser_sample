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
import GameObjectsManager from "~/gameObjects/GameObjectsManager";
import mapCsv from "~/maps/1.csv";
import MapLoader from "~/mapLoaders/MapLoader";
import _ from "lodash";

export class MyGame extends Phaser.Scene {
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    public prayer: Prayer;
    private enemy: Enemy;
    private parameters: Parameters;
    private tokBar: Rectangle;
    private mapLoader: MapLoader;

    constructor() {
        super('sample-scene');
    }

    preload() {
        ImageManager.onPreload(this);
    }

    create() {
        this.mapLoader = new MapLoader(this, mapCsv);
        this.prayer = this.mapLoader.getPrayer();
        // this.enemy = new Enemy(this)
        // new Wall(this, 300, 600);
        this.cursors = this.input.keyboard.createCursorKeys();
        // this.parameters = new Parameters();

        this.tokBar = this.add.rectangle(3 * CofigConstants.displayWidth / 4 - 20, 20, 0, 20, 0xff0000).setScrollFactor(0);
        // new Rectangle(this, 3 * CofigConstants.displayWidth / 4 - 20, 20, CofigConstants.displayWidth / 2, 20, 0xff0000)
        //     .setScrollFactor(0);
        // const rectangle = new Rectangle(this, 3 * CofigConstants.displayWidth / 4 - 20, 20, CofigConstants.displayWidth / 2, 20, 0xff0000)
        // rectangle.setScrollFactor(0);
        console.log(GameObjectsManager.getObjects().length);
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
        Parameters.addToku(0.01);
        this.tokBar.width = Parameters.getToku();
        FrameCounter.onUpdate();
        if (FrameCounter.isFrameChanged()) {
            console.log(GameObjectsManager.getObjects().length);
            const x = _.random(0, this.mapLoader.getWidth() * CofigConstants.cellSize);
            const y = _.random(0, this.mapLoader.getHeight() * CofigConstants.cellSize);
            // console.log(x);
            // console.log(y);
            const wrapped = GameObjectsManager.getObjects().some((obj) => {
                return obj.isHitAt(x, y, CofigConstants.cellSize, CofigConstants.cellSize);
            });
            if (!wrapped && GameObjectsManager.getObjects().length < 1000) {
                const enemy = new Enemy(this, x, y);
            }
        }
        GameObjectsManager.getObjects().forEach((obj) => {
            obj.onUpdate(this);
        })
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