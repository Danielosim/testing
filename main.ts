music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    music.playMelody("- - - - - - - - ", 120)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.ringTone(262)
    music.rest(music.beat(BeatFraction.Whole))
    music.setVolume(127)
    music.stopAllSounds()
    music.changeTempoBy(20)
    music.setTempo(120)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    music.stopMelody(MelodyStopOptions.All)
    soundExpression.giggle.playUntilDone()
    soundExpression.giggle.play()
    music.setBuiltInSpeakerEnabled(false)
})
basic.forever(function () {
	
})
