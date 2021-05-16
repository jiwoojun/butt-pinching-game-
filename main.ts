sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    if (projectile) {
        info.changeScoreBy(1)
        mySprite2.setFlag(SpriteFlag.GhostThroughSprites, true)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 . . 6 6 . . . . . . 
        . . . . . 6 . . 6 6 . . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 . 7 . 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -50)
    pause(1500)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
})
info.onLifeZero(function () {
    game.over(false)
})
let poo: Sprite = null
let shootPoo = 0
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . c c c c c . . . . . . 
    . . . . c 1 1 1 1 1 c . . . . . 
    . . . . c 1 f f f 1 c . . . . . 
    . . . . c 1 f e f 1 c b . . . . 
    . . . . c 1 f f f 1 c b . . . . 
    . . . . c 1 1 1 1 1 c b . . . . 
    . . . . . c c c c c b b . . . . 
    . . . . . . . b b b b . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.setDialogFrame(img`
    f 1 f 1 f 1 f 1 
    1 a a a a a a f 
    f a a a a a a 1 
    1 a a a a a a f 
    f a a a a a a 1 
    1 a a a a a a f 
    f a a a a a a 1 
    1 f 1 f 1 f 1 f 
    `)
game.showLongText("in this game,you have to pinch the butt. you will press A to shoot pinchers.", DialogLayout.Bottom)
game.showLongText("but, be careful of the poos! the butt will shoot it.", DialogLayout.Bottom)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f d f . . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . . f f d f f . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . . . f d f . . . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    ......dddddd...ddd......
    ..f..dddddddd.ddddd...f.
    ..2..dddddddd.ddddd...2.
    ..22.ddddddddfdddddd.22.
    ...22ddddddddfdddddd22..
    ....2ddddddddfdddddd2...
    .....ddddddddfdddddd....
    .....555555555555554....
    .....555555554555554....
    .....455555554555554....
    .....444444544455544....
    ......dddd.....dddd.....
    ......ddd.......ddd.....
    ......44.........44.....
    ....aaa...........aaa...
    ........................
    `, SpriteKind.Food)
mySprite2.setBounceOnWall(true)
mySprite2.setStayInScreen(true)
mySprite.setStayInScreen(true)
mySprite2.setPosition(70, 5)
mySprite.setPosition(74, 112)
mySprite2.setVelocity(30, 0)
controller.moveSprite(mySprite, 100, 0)
info.setScore(0)
info.setLife(5)
game.onUpdateInterval(1500, function () {
    mySprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    mySprite2.setFlag(SpriteFlag.GhostThroughSprites, false)
})
game.onUpdateInterval(500, function () {
    shootPoo = randint(0, 10)
    if (shootPoo < 3) {
        poo = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . e e . . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . e e e e e e e e e e . . . 
            . . f f f f f f f f f f f f . . 
            . e e e e e e e e e e e e e e . 
            e e e e e e e e e e e e e e e e 
            `, mySprite2, 0, 30)
        poo.setKind(SpriteKind.Enemy)
    }
})
