input.onButtonPressed(Button.A, function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.toggle(0 + x, 0 + y)
            basic.pause(500)
            led.unplot(0 + x, 0 + y)
        }
    }
})
basic.forever(function () {
	
})
