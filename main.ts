input.onButtonPressed(Button.A, function () {
    maqueen.motorStop(maqueen.Motors.All)
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(5000)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        basic.pause(300)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
