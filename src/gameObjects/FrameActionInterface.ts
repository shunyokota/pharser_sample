import Phaser from "phaser";

export default interface FrameActionInterface {
    onUpdate: (scene: Phaser.Scene) => void;
}