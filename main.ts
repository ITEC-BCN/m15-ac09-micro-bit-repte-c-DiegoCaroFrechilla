let setRandom2 = 0
let receivedString2 = 0
let setRandom = 0
radio.onReceivedNumber(function (receivedNumber) {
    setRandom2 = randint(1, 6)
    if (receivedNumber < setRandom2) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("HELLO")
})
radio.onReceivedString(function () {
    basic.showString("" + (receivedString2))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    setRandom = randint(1, 6)
    radio.sendNumber(setRandom)
})
