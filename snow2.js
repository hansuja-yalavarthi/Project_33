class snowclass extends BaseClass {
    constructor(x, y) {
        super(x, y, 40, 40);
        this.image = loadImage("snowflake2.png");
    }

    display() {

        image(this.image, this.body.position.x, this.body.position.y, 40, 40);

    }
}