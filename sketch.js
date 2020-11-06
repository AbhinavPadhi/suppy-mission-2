var helicopterIMG, helicopterSprite, packageSprite, packageIMG;

var packageBody, ground

var boxedge1, boxedge2, boxedge3;

const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

function preload() {
    helicopterIMG = loadImage("helicopter.png")

    packageIMG = loadImage("package.png")
}

function setup() {
    createCanvas(800, 700);

    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    packageSprite = createSprite(width / 2, 80, 10, 10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale = 0.2

    helicopterSprite = createSprite(width / 2, 200, 10, 10);
    helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale = 0.6

    groundSprite = createSprite(width / 2, height - 35, width, 10);
    groundSprite.shapeColor = color(255)

    packageBody = Bodies.circle(width / 2, 200, 5, {
        restitution: 0.5,
        isStatic: true
    });
    World.add(world, packageBody);

    ground = Bodies.rectangle(width / 2, 650, width, 10, {
        isStatic: true
    });
    World.add(world, ground);

    fill(255, 0, 0)

    boxedge1 = Bodies.rectangle(290, 615, 20, 100, {
        isStatic: true
    });
    World.add(world, boxedge1);

    boxedge2 = Bodies.rectangle(400, 655, 200, 20, {
        isStatic: true
    });
    World.add(world, boxedge2);

    boxedge3 = Bodies.rectangle(510, 615, 20, 100, {
        isStatic: true
    });
    World.add(world, boxedge3);

    Engine.run(engine);
}

function draw() {
    background(0);

    rectMode(CENTER);

    rect(boxedge1.position.x, boxedge1.position.y, 20, 100)
    rect(boxedge2.position.x, boxedge2.position.y, 200, 20)
    rect(boxedge3.position.x, boxedge3.position.y, 20, 100)

    packageSprite.x = packageBody.position.x
    packageSprite.y = packageBody.position.y

    drawSprites();

    keyPressed();
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        Matter.Body.setStatic(packageBody, false);
    }
}