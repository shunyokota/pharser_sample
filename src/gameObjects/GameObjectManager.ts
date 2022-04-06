import GameObject from "~/gameObjects/GameObject";

export default class GameObjectManager {
    static list: GameObject[];

    public static add(object: GameObject) {
        this.list.push(object);
    }
}