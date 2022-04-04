import ImageLoader from "~/loaders/ImageLoader";
import Phaser from "phaser";

export default abstract class Character {
    protected image: Phaser.GameObjects.Image;

    public goRight() {
        this.image.setX(this.image.x + 1);
    }

    public goLeft() {
        this.image.setX(this.image.x - 1);
    }

    public goUp() {
        this.image.setY(this.image.y - 1);
    }

    public goDown() {
        this.image.setY(this.image.y + 1);
    }
}