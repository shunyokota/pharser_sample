import Phaser from "phaser";

export default class ImageLoader {
    protected key: string;
    protected url: string;

    constructor(key: string, url: string) {
        this.key = key;
        this.url = url
    }

    public onPreload(scene: Phaser.Scene)
    {
        scene.load.image(this.key, this.url);
    }

    public getKey(): string
    {
        return this.key;
    }
}