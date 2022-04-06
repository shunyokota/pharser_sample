import Phaser from "phaser";
import GameObjectManager from "~/gameObjects/GameObjectManager";

export default class GameObject {
    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;

    public constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public isHit(target: GameObject): boolean {
        const thisXStart = this.x - this.width / 2;
        const thisXEnd = this.x + this.width / 2;
        const targetXStart = target.x - target.width / 2;
        const targetXEnd = target.x + target.width / 2;
        const xWrapped =  (thisXStart <= targetXStart && targetXStart <= thisXEnd) ||
            (thisXStart <= targetXEnd && targetXEnd <= thisXEnd);

        const thisYStart = this.y - this.height / 2;
        const thisYEnd = this.y + this.height / 2;
        const targetYStart = target.y - target.height / 2;
        const targetYEnd = target.y + target.height / 2;
        const yWrapped =  (thisYStart <= targetYStart && targetYStart <= thisYEnd) ||
            (thisYStart <= targetYEnd && targetYEnd <= thisYEnd);

        return xWrapped && yWrapped;
    }

    public isHitLeft(target: GameObject): boolean {
        return this.isYWrapped(target) && this.isLeftWrapped(target);
    }

    private isLeftWrapped(target: GameObject): boolean {
        const thisXStart = this.x - this.width / 2;
        const thisXEnd = this.x + this.width / 2;
        const targetXEnd = target.x + target.width / 2;
        return (thisXStart <= targetXEnd && targetXEnd <= thisXEnd);
    }

    private isXWrapped(target: GameObject): boolean {
        const thisXStart = this.x - this.width / 2;
        const thisXEnd = this.x + this.width / 2;
        const targetXStart = target.x - target.width / 2;
        const targetXEnd = target.x + target.width / 2;
        return (thisXStart <= targetXStart && targetXStart <= thisXEnd) ||
            (thisXStart <= targetXEnd && targetXEnd <= thisXEnd);
    }

    private isYWrapped(target: GameObject): boolean {
        const thisYStart = this.y - this.height / 2;
        const thisYEnd = this.y + this.height / 2;
        const targetYStart = target.y - target.height / 2;
        const targetYEnd = target.y + target.height / 2;
        return (thisYStart <= targetYStart && targetYStart <= thisYEnd) ||
            (thisYStart <= targetYEnd && targetYEnd <= thisYEnd);
    }
}