import Phaser from "phaser";
import GameObject from "~/gameObjects/GameObject";
import {Direction} from "~/consts/Directions";

export default abstract class Character extends GameObject{

    public go(direction: Direction) {
        switch (direction) {
            case 'up' :
                this.goUp();
                break;
            case 'down':
                this.goDown();
                break;
            case 'left':
                this.goLeft();
                break;
            case 'right':
                this.goRight();
                break;
        }
    }

    public goRight() {
        this.x++;
        this.image.setX(this.x);
    }

    public goLeft() {
        this.x--;
        this.image.setX(this.x);
    }

    public goUp() {
        this.y--;
        this.image.setY(this.y);
    }

    public goDown() {
        this.y++;
        this.image.setY(this.y);
    }
}