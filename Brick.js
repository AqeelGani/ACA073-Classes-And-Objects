class Brick {
    constructor(x, y, width, height) {
        var options = {
            friction: 1,
            restitution: 0.8,
            density: 0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        Composite.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("brown");
        translate(pos.x, pos.y);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
