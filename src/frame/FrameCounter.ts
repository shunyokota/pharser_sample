export default class FrameCounter {
    private static count: number = 0;
    private static microCount: number = 0;
    private static frameChanged: boolean = false;

    public static onUpdate()
    {
        this.microCount++;
        if (100 < this.microCount) {
            this.microCount = 0;
            this.frameChanged = true;
        } else {
            this.frameChanged = false;
        }
    }

    public static isFrameChanged()
    {
        return this.frameChanged;
    }
}