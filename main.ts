controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
    	
    }
})
let mySprite = sprites.create(img`
    . . . . 4 4 4 . . . . 4 4 4 . . 
    . . . 4 5 5 5 e . . e 5 5 5 4 . 
    . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
    . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
    . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
    . . . e e 5 5 5 5 5 5 5 5 e e . 
    . . . . e 5 f 5 5 5 5 f 5 e . . 
    f f . . f 5 5 5 4 4 5 5 5 f . . 
    f 5 f . f 6 5 5 f f 5 5 4 f . . 
    f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
    . f 5 4 4 5 5 5 5 5 5 4 f . . . 
    . . f f 5 5 4 5 5 5 5 5 f . . . 
    . . . f 5 f f 5 f f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
forever(function () {
    if (mySprite.vx < 0) {
        mySprite.setImage(img`
            . . 4 4 4 . . . . 4 4 4 . . . . 
            . 4 5 5 5 e . . e 5 5 5 4 . . . 
            4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
            4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
            e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
            . e e 5 5 5 5 5 5 5 5 e e . . . 
            . . e 5 f 5 5 5 5 f 5 e . . . . 
            . . f 5 5 5 4 4 5 5 5 f . . f f 
            . . f 4 5 5 f f 5 5 6 f . f 5 f 
            . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
            . . . f 4 5 5 5 5 5 5 4 4 5 f . 
            . . . f 5 5 5 5 5 4 5 5 f f . . 
            . . . f 5 f f f 5 f f 5 f . . . 
            . . . f f . . f f . . f f . . . 
            `)
    } else if (mySprite.vx > 0) {
        mySprite.setImage(img`
            . . . . 4 4 4 . . . . 4 4 4 . . 
            . . . 4 5 5 5 e . . e 5 5 5 4 . 
            . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
            . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
            . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
            . . . e e 5 5 5 5 5 5 5 5 e e . 
            . . . . e 5 f 5 5 5 5 f 5 e . . 
            f f . . f 5 5 5 4 4 5 5 5 f . . 
            f 5 f . f 6 5 5 f f 5 5 4 f . . 
            f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
            . f 5 4 4 5 5 5 5 5 5 4 f . . . 
            . . f f 5 5 4 5 5 5 5 5 f . . . 
            . . . f 5 f f 5 f f f 5 f . . . 
            . . . f f . . f f . . f f . . . 
            `)
    }
})
forever(function () {
	
})
