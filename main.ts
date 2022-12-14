OLED.init(128, 64)
RTC_DS1307.setTime(RTC_DS1307.TimeType.HOUR, 19)
RTC_DS1307.setTime(RTC_DS1307.TimeType.MINUTE, 57)
RTC_DS1307.setTime(RTC_DS1307.TimeType.SECOND, 0)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("HUAWEI P30 lite", "ulises2020")
basic.forever(function () {
    OLED.clear()
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR))
    OLED.writeString(":")
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE))
    OLED.newLine()
    OLED.writeString("Noise: ")
    OLED.writeNum(Environment.ReadNoise(AnalogPin.P1))
    ESP8266_IoT.connectThingSpeak()
    ESP8266_IoT.setData(
    "7SFQU5PTY6CK8K8Z",
    Environment.ReadNoise(AnalogPin.P1)
    )
    ESP8266_IoT.uploadData()
    basic.pause(15000)
})
