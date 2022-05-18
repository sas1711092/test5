music.setVolume(255)
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(100)
})
