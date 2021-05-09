class SnowClass extends BaseClass {
    constructor(x, y) {
        super(x, y, 45, 45);
            this.image = loadImage("snowflake1.png");
        }

        display() {

            image(this.image, this.body.position.x, this.body.position.y, 45, 45);

        }
    }