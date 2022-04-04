import Phaser from "phaser";
import prayerImg from "~/assets/prayer.png";
import ImageLoader from "~/loaders/ImageLoader";

export default class ImageManager {

    public static readonly prayer: ImageLoader = new ImageLoader('prayer', prayerImg);

    public static onPreload(scene: Phaser.Scene)
    {
        this.prayer.onPreload(scene);
    }
}