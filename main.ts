namespace SpriteKind {
    export const food2 = SpriteKind.create()
    export const food3 = SpriteKind.create()
    export const powera = SpriteKind.create()
    export const powerb = SpriteKind.create()
    export const food4 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.food3, function (sprite, otherSprite) {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(0, 0), assets.tile`myTile3`)) {
        if (info.score() == 0) {
            key3.destroy()
            key3 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . e . . 7 7 . . . . 
                . . . . . . . e . 7 7 7 . . . . 
                . . . . . . . e . 7 7 7 . . . . 
                . . . . 2 2 2 e 7 7 7 2 . . . . 
                . . . 2 2 2 2 e 7 7 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . . 2 2 2 2 2 2 2 2 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.food3)
            tiles.placeOnTile(key3, tiles.getTileLocation(4, 4))
            info.changeScoreBy(1)
        } else if (info.score() == 1) {
            key3.destroy()
            game.splash(game.runtime())
            game.over(true)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.food2, function (sprite, otherSprite) {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(0, 0), assets.tile`myTile1`)) {
        if (info.score() == 0) {
            key2.destroy()
            key2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . e . . 7 7 . . . . 
                . . . . . . . e . 7 7 7 . . . . 
                . . . . . . . e . 7 7 7 . . . . 
                . . . . 2 2 2 e 7 7 7 2 . . . . 
                . . . 2 2 2 2 e 7 7 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . . 2 2 2 2 2 2 2 2 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.food2)
            tiles.placeOnTile(key2, tiles.getTileLocation(4, 4))
            info.changeScoreBy(1)
        } else if (info.score() == 1) {
            key2.destroy()
            key3 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . e . . 7 7 . . . . 
                . . . . . . . e . 7 7 7 . . . . 
                . . . . . . . e . 7 7 7 . . . . 
                . . . . 2 2 2 e 7 7 7 2 . . . . 
                . . . 2 2 2 2 e 7 7 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . . 2 2 2 2 2 2 2 2 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.food3)
            tiles.setTilemap(tilemap`level0`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
            tiles.placeOnTile(myEnemy, tiles.getTileLocation(14, 14))
            tiles.placeOnTile(key3, tiles.getTileLocation(14, 10))
            info.setScore(0)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(0, 0), assets.tile`myTile2`)) {
        if (info.score() == 0) {
            key1.destroy()
            key1 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . e . . 7 7 . . . . 
                . . . . . . . e . 7 7 7 . . . . 
                . . . . . . . e . 7 7 7 . . . . 
                . . . . 2 2 2 e 7 7 7 2 . . . . 
                . . . 2 2 2 2 e 7 7 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . . 2 2 2 2 2 2 2 2 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            tiles.placeOnTile(key1, tiles.getTileLocation(3, 11))
            info.changeScoreBy(1)
        } else if (info.score() == 1) {
            key1.destroy()
            tiles.setTilemap(tilemap`level5`)
            key2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . e . . 7 7 . . . . 
                . . . . . . . e . 7 7 7 . . . . 
                . . . . . . . e . 7 7 7 . . . . 
                . . . . 2 2 2 e 7 7 7 2 . . . . 
                . . . 2 2 2 2 e 7 7 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . . 2 2 2 2 2 2 2 2 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.food2)
            tiles.placeOnTile(key2, tiles.getTileLocation(8, 10))
            tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
            tiles.placeOnTile(myEnemy, tiles.getTileLocation(8, 10))
            info.setScore(0)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.splash(game.runtime())
    game.over(false)
})
let key2: Sprite = null
let key3: Sprite = null
let myEnemy: Sprite = null
let key1: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
    9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
    9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
    9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
    9 7 7 7 7 f 7 7 7 7 f 7 7 7 7 9 
    9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
    9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
    9 7 7 f 7 7 7 7 7 7 7 7 f 7 7 9 
    9 7 7 7 f 7 7 7 7 7 7 f 7 7 7 9 
    9 7 7 7 7 f f f f f f 7 7 7 7 9 
    9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
    9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
    9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
    9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
    9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
    7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
scene.cameraFollowSprite(mySprite)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
tiles.setTilemap(tilemap`level1`)
key1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . 7 7 . . . . 
    . . . . . . . e . 7 7 7 . . . . 
    . . . . . . . e . 7 7 7 . . . . 
    . . . . 2 2 2 e 7 7 7 2 . . . . 
    . . . 2 2 2 2 e 7 7 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnTile(key1, tiles.getTileLocation(14, 5))
myEnemy = sprites.create(img`
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 
    9 2 2 f f 2 2 2 2 2 2 f f 2 2 9 
    9 2 2 2 f f 2 2 2 2 f f 2 2 2 9 
    9 2 2 2 2 f f 2 2 f f 2 2 2 2 9 
    9 2 2 2 f 2 2 2 2 2 2 f 2 2 2 9 
    9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 
    9 2 2 2 2 f f f f f f 2 2 2 2 9 
    9 2 2 2 f f 2 2 2 2 f f 2 2 2 9 
    9 2 2 f f 2 2 2 2 2 2 f f 2 2 9 
    9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 
    9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 
    9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 
    9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 
    9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    `, SpriteKind.Enemy)
myEnemy.follow(mySprite, 1000)
tiles.placeOnTile(myEnemy, tiles.getTileLocation(14, 14))
info.setScore(0)
