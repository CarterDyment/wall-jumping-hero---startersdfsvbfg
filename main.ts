controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (man.isHittingTile(CollisionDirection.Bottom)) {
        man.vy = -200
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (man.isHittingTile(CollisionDirection.Bottom) && man.vy > 200) {
        info.changeLifeBy(-1)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (man.isHittingTile(CollisionDirection.Bottom) || man.isHittingTile(CollisionDirection.Right) || man.isHittingTile(CollisionDirection.Left)) {
        man.vy = -200
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    man.setImage(leftFacingImg)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    man.setImage(rightFacingImg)
})
let man: Sprite = null
let leftFacingImg: Image = null
let rightFacingImg: Image = null
let rightSwordOutImg = img`
    . . . . . . . f f . . . . . . . 
    . . . . f f f f 2 f f . . . . . 
    . . f f e e e e f 2 f f . . . . 
    . f f e e e e e f 2 2 f f . . . 
    . f e e e e f f e e e e f . . . 
    . f f f f f e e 2 2 2 2 e f . . 
    f f f e 2 2 2 f f f f e 2 f . . 
    f f f f f f f f e e e f f f . . 
    f e f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 b f d d e f . . . 
    . . f e e e 4 d d d e e . c . . 
    . . . f 2 2 2 2 e e d d e c c c 
    . . . f 4 4 4 e 4 4 d d e c d d 
    . . . f f f f f e e e e . c c c 
    . . f f f f f f f f . . . c . . 
    . . f f f . . f f . . . . . . . 
    `
scene.setBackgroundColor(1)
let leftSwordOutImg = img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 2 f f f f . . . . 
    . . . . f f 2 f e e e e f f . . 
    . . . f f 2 2 f e e e e e f f . 
    . . . f e e e e f f e e e e f . 
    . . f e 2 2 2 2 e e f f f f f . 
    . . f 2 e f f f f 2 2 2 e f f f 
    . . f f f e e e f f f f f f f f 
    . . f e e 4 4 f b e 4 4 e f e f 
    . . . f e d d f b 4 d 4 e e f . 
    . . c . e e d d d 4 e e e f . . 
    c c c e d d e e 2 2 2 2 f . . . 
    d d c e d d 4 4 e 4 4 4 f . . . 
    c c c . e e e e f f f f f . . . 
    . . c . . . f f f f f f f f . . 
    . . . . . . . f f . . f f f . . 
    `
rightFacingImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `
leftFacingImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 2 f e e e e f f . . . 
    . . . f 2 2 2 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 2 2 2 2 e e f f f f . . 
    . . f 2 e f f f f 2 2 2 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . . f e d d f 1 4 d 4 e e f . 
    . . . . f d d d e e e e e f . . 
    . . . . f e 4 e d d 4 f . . . . 
    . . . . f 2 2 e d d e f . . . . 
    . . . f f 5 5 f e e f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f f . . . f f . . . . 
    `
man = sprites.create(rightFacingImg, SpriteKind.Player)
controller.moveSprite(man, 100, 0)
man.setStayInScreen(true)
man.ay = 350
tiles.setTilemap(tilemap`level1`)
info.setLife(3)
scene.cameraFollowSprite(man)
tiles.placeOnTile(man, tiles.getTileLocation(13, 13))
game.onUpdateInterval(300, function () {
    if (man.isHittingTile(CollisionDirection.Right) && man.vy > 0) {
        man.setImage(rightSwordOutImg)
        man.ay = 0
        man.vy = 20
    } else if (man.isHittingTile(CollisionDirection.Left) && man.vy > 0) {
        man.setImage(leftSwordOutImg)
        man.ay = 0
        man.vy = 20
    } else {
        man.ay = 350
        if (man.image == rightSwordOutImg) {
            man.setImage(rightFacingImg)
        } else if (man.image == leftSwordOutImg) {
            man.setImage(leftFacingImg)
        }
    }
})
