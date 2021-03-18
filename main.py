def on_up_pressed():
    if HOOOOOOOO.is_hitting_tile(CollisionDirection.BOTTOM):
        HOOOOOOOO.vy = -200
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    HOOOOOOOO.set_image(leftFacingImg)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile(sprite, location):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile)

def on_right_pressed():
    HOOOOOOOO.set_image(rightFacingImg)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

HOOOOOOOO: Sprite = None
leftFacingImg: Image = None
rightFacingImg: Image = None
rightSwordOutImg = img("""
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
""")
scene.set_background_color(1)
leftSwordOutImg = img("""
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
""")
rightFacingImg = img("""
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
""")
leftFacingImg = img("""
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
""")
HOOOOOOOO = sprites.create(rightFacingImg, SpriteKind.player)
controller.move_sprite(HOOOOOOOO, 100, 0)
HOOOOOOOO.set_stay_in_screen(True)
HOOOOOOOO.ay = 350
tiles.set_tilemap(tilemap("""
    level1
"""))
scene.camera_follow_sprite(HOOOOOOOO)
tiles.place_on_tile(HOOOOOOOO, tiles.get_tile_location(13, 13))

def on_update_interval():
    if HOOOOOOOO.is_hitting_tile(CollisionDirection.RIGHT):
        HOOOOOOOO.set_image(rightSwordOutImg)
        HOOOOOOOO.ay = 0
        HOOOOOOOO.vy = 20
game.on_update_interval(500, on_update_interval)
