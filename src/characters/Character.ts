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
        if (this.isHitSomeOnRight()) {
            return;
        }
        this.x++;
        this.image.setX(this.x);
    }

    public goLeft() {
        if (this.isHitSomeOnLeft()) {
            return;
        }
        this.x--;
        this.image.setX(this.x);
    }

    public goUp() {
        if (this.isHitSomeOnTop()) {
            return;
        }
        this.y--;
        this.image.setY(this.y);
    }

    public goDown() {
        if (this.isHitSomeOnBottom()) {
            return;
        }
        this.y++;
        this.image.setY(this.y);
    }
}