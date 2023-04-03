def on_button_pressed_a():
    for index in range(5):
        led.toggle(0, 0)
        basic.pause(500)
        led.unplot(4, 4)
        basic.pause(500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
