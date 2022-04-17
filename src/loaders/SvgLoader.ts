import Phaser from "phaser";
import ImageLoader from "~/loaders/ImageLoader";

export default class SvgLoader extends ImageLoader {

    public onPreload(scene: Phaser.Scene)
    {
        scene.load.svg(this.key, this.url);
    }
}