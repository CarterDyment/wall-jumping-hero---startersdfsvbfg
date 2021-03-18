// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010200000000000000000000000001010101000000000000000000000000010101010100000000000000000000000101010101010100000001010101010101010100000000000000000000000001010101000000000000000000000000010101010101010000000000000000000101010101010000000000000000000001010101010100000000000101010101010101010101000000000000000000000101010101010101000000000000000001010101010100000000000000000000010101010101000000000000000000000101010101010101010101010100000001010101010101010101010101010101010101010101010101010101010101010101`, img`
2 2 . . . . . . . . . . . . . 2 
2 2 2 . . . . . . . . . . . . 2 
2 2 2 2 . . . . . . . . . . . 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 2 2 2 . . . . . . . . . 2 2 
2 2 2 2 . . . . . . . . . . 2 2 
2 2 2 2 . . . . . 2 2 2 2 2 2 2 
2 2 2 2 . . . . . . . . . . 2 2 
2 2 2 2 2 2 . . . . . . . . 2 2 
2 2 2 2 . . . . . . . . . . 2 2 
2 2 2 2 . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.