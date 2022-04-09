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
}