import GameObject from "~/gameObjects/GameObject";
import _ from "lodash";


export default class GameObjectsManager {
    static list: GameObject[] = [];

    public static add(object: GameObject) {
        this.list.push(object);
    }

    public static getObjects(): GameObject[] {
        return this.list;
    }

    public static nextId(): number {
        if (this.list.length == 0) {
            return 1;
        }
        const ids = this.list.map(obj => obj.id)
        return _.max(ids) + 1;
    }

    public static isHitSomeOnTop(object: GameObject): boolean {
        return this.isHitSomeOnSomeDirection(
            object,
            (obj, some) => {
                return obj.isHitTop(some)
            }
        );
    }

    public static isHitSomeOnBottom(object: GameObject): boolean {
        return this.isHitSomeOnSomeDirection(
            object,
            (obj, some) => {
                return obj.isHitBottom(some)
            }
        );
    }

    public static isHitSomeOnLeft(object: GameObject): boolean {
        return this.isHitSomeOnSomeDirection(
            object,
            (obj, some) => {
                return obj.isHitLeft(some)
            }
        );
    }

    public static isHitSomeOnRight(object: GameObject): boolean {
        return this.isHitSomeOnSomeDirection(
            object,
            (obj, some) => {
                return obj.isHitRight(some)
            }
        );
    }

    private static isHitSomeOnSomeDirection(
        object: GameObject,
        comparison: (obj: GameObject, some: GameObject) => boolean): boolean {
        return this.list.some((some) => {
            if (object.id === some.id) {
                return false;
            }
            if (comparison(object, some)) {
                return true;
            }
        });
    }
}