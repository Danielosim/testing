basic.forever(function () {
    OLED.init(64, 128)
    OLED.showNumberWithNewLine(0)
    OLED.showStringWithNewLine("Hello, OLED!")
    OLED.showNumberNoNewLine(0)
    OLED.showStringNoNewLine("Hello, OLED!")
    OLED.showProgress(0)
    OLED.drawLine(
    0,
    0,
    0,
    0
    )
    OLED.drawCircle(0, 0, 0)
    OLED.fillCircle(0, 0, 0)
    OLED.drawRectangle(
    0,
    0,
    0,
    0
    )
    OLED.fillRectangle(
    0,
    0,
    0,
    0
    )
    OLED.clear()
    OLED.loadingScreen()
    OLED.nextLine()
})
