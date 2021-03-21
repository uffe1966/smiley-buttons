input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Sad)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Confused)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # . # .
        # . # . #
        `)
})
basic.forever(function () {
	
})
