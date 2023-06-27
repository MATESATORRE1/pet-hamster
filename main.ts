input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 6; index++) {
        basic.showIcon(IconNames.SmallHeart)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Heart)
    }
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Surprised)
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Asleep)
