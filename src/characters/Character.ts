import Phaser from "phaser";
import GameObject from "~/gameObjects/GameObject";

export default abstract class Character extends GameObject{
    protected image: Phaser.GameObjects.Image;

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