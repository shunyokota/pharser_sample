import Phaser from "phaser";
import GameObjectsManager from "~/gameObjects/GameObjectsManager";
import {MyGame} from "~/index";

export default class GameObject {
    public readonly id: number;
    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;
    protected image: Phaser.GameObjects.Image;

    public constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.id = GameObjectsManager.nextId();
        GameObjectsManager.add(this);
    }

    public onUpdate(scene: MyGame) {
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public isHit(target: GameObject): boolean {
        return this.isHitLeft(target) || this.isHitRight(target) || this.isHitTop(target) || this.isHitBottom(target);
    }

    public isHitLeft(target: GameObject): boolean {
        return this.isYWrapped(target, false) && this.isLeftWrapped(target);
    }

    public isHitRight(target: GameObject): boolean {
        return this.isYWrapped(target, false) && this.isRightWrapped(target);
    }

    public isHitTop(target: GameObject): boolean {
        return this.isXWrapped(target, false) && this.isTopWrapped(target);
    }

    public isHitBottom(target: GameObject): boolean {
        return this.isXWrapped(target, false) && this.isBottomWrapped(target);
    }

    private isLeftWrapped(target: GameObject, strict: boolean = true): boolean {
        const thisXStart = this.x - this.width / 2;
        const thisXEnd = this.x + this.width / 2;
        const targetXEnd = target.x + target.width / 2;
        return strict ? (thisXStart <= targetXEnd && targetXEnd <= thisXEnd) :
            (thisXStart < targetXEnd && targetXEnd <= thisXEnd);
    }

    private isRightWrapped(target: GameObject, strict: boolean = true): boolean {
        const thisXStart = this.x - this.width / 2;
        const thisXEnd = this.x + this.width / 2;
        const targetXStart = target.x - target.width / 2;
        return strict ? (thisXStart <= targetXStart && targetXStart <= thisXEnd) :
            (thisXStart <= targetXStart && targetXStart < thisXEnd);
    }

    private isXWrapped(target: GameObject, strict: boolean = true): boolean {
        return this.isLeftWrapped(target, strict) || this.isRightWrapped(target, strict);
    }

    private isTopWrapped(target: GameObject, strict: boolean = true): boolean {
        const thisYStart = this.y - this.height / 2;
        const thisYEnd = this.y + this.height / 2;
        const targetYEnd = target.y + target.height / 2;
        return strict ?
            (thisYStart <= targetYEnd && targetYEnd <= thisYEnd) :
            (thisYStart < targetYEnd && targetYEnd <= thisYEnd)
    }

    private isBottomWrapped(target: GameObject, strict: boolean = true): boolean {
        const thisYStart = this.y - this.height / 2;
        const thisYEnd = this.y + this.height / 2;
        const targetYStart = target.y - target.height / 2;
        return  strict ? (thisYStart <= targetYStart && targetYStart <= thisYEnd) :
            (thisYStart <= targetYStart && targetYStart < thisYEnd);
    }

    private isYWrapped(target: GameObject, strict: boolean = true): boolean {
        return this.isTopWrapped(target, strict) || this.isBottomWrapped(target, strict);
    }

    public isHitSomeOnTop(): boolean {
        return this.isHitSomeOnSomeDirection(
            (some) => {
                if (this.isHitTop(some)) {
                    console.log(some);
                    console.log(this)
                }
                return this.isHitTop(some)
            }
        );
    }

    public isHitSomeOnBottom(): boolean {
        return this.isHitSomeOnSomeDirection(
            (some) => {
                return this.isHitBottom(some)
            }
        );
    }

    public isHitSomeOnLeft(): boolean {
        return this.isHitSomeOnSomeDirection(
            (some) => {
                return this.isHitLeft(some)
            }
        );
    }

    public isHitSomeOnRight(): boolean {
        return this.isHitSomeOnSomeDirection(
            (some) => {
                return this.isHitRight(some)
            }
        );
    }

    public getHitObjects(): GameObject[] {
        return GameObjectsManager.getObjects().filter((obj) => this.isHit(obj));
    }

    private isHitSomeOnSomeDirection(
        comparison: (some: GameObject) => boolean): boolean {
        return GameObjectsManager.getObjects().some((some) => {
            if (this.id === some.id) {
                return false;
            }
            if (comparison(some)) {
                return true;
            }
        });
    }
}