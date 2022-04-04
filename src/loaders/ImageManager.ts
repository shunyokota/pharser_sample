import Phaser from "phaser";
import prayerImg from "~/assets/prayer.png";
import dummyImg from "~/assets/dummy.png";
import ImageLoader from "~/loaders/ImageLoader";

export default class ImageManager {

    public static readonly prayer: ImageLoader = new ImageLoader('prayer', prayerImg);
    public static readonly enemy: ImageLoader = new ImageLoader('dummy', dummyImg);

    public static onPreload(scene: Phaser.Scene)
    {
        this.prayer.onPreload(scene);
        this.enemy.onPreload(scene);
    }
}