let receivedString2 = 0
input.onButtonPressed(Button.A, function () {
    radio.sendString("HELLO")
})
radio.onReceivedString(function () {
    basic.showString("" + (receivedString2))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
