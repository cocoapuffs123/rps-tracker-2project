function showscoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("PlayerA:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("PlayerB:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + Rounds)
}
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    PA += 1
    showscoreboard()
    Rounds += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    showscoreboard()
    Ties += 1
    Rounds += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    showscoreboard()
    PB += 1
    Rounds += 1
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("\"we shall play a game\"")
    basic.pause(2000)
    showscoreboard()
}
let Rounds = 0
let Ties = 0
let PB = 0
let PA = 0
Reset()
