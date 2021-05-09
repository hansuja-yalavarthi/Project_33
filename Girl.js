class Girl extends BaseClass {
    constructor(x, y) {
        super(x, y, 100, 379.5);
        this.image = loadImage("girl.png");
        this.Visiblity = 255;
    }

    display() {

        image(this.image, this.body.position.x, this.body.position.y, 100, 379.5);

    }
}