function getColor (color_array_index: number, color_array_index_length: number) {
    serial.writeString("color_array_index_length")
    serial.writeNumber(color_array_index_length)
    serial.writeString("" + ("\n"))
    let color_index
if (color_array_index >= color_array_index_length - 1) {
        color_index = 0
    } else {
        color_index = color_array_index + 1
    }
    serial.writeString("color_index")
    serial.writeNumber(color_index)
    serial.writeString("" + ("\n"))
    return color_index
}
function getBrightness (sound_level: number) {
    if (sound_level < 25) {
        return sound_level
    } else {
        return sound_level
    }
}
let color_from_list = 0
let brightness = 0
let sound_level = 0
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.showIcon(IconNames.Ghost)
let color_index2 = 100
let color_list = [
    neopixel.colors(NeoPixelColors.Red), 
    neopixel.colors(NeoPixelColors.Red), 
    neopixel.colors(NeoPixelColors.Red), 
    neopixel.colors(NeoPixelColors.Orange),
    neopixel.colors(NeoPixelColors.Orange), 
    neopixel.colors(NeoPixelColors.Orange), 

    neopixel.colors(NeoPixelColors.Yellow), 
    neopixel.colors(NeoPixelColors.Yellow), 
    neopixel.colors(NeoPixelColors.Yellow), 

    neopixel.colors(NeoPixelColors.Green), 
    neopixel.colors(NeoPixelColors.Green), 
    neopixel.colors(NeoPixelColors.Green), 

    neopixel.colors(NeoPixelColors.Blue),
    neopixel.colors(NeoPixelColors.Blue),
    neopixel.colors(NeoPixelColors.Blue),

    neopixel.colors(NeoPixelColors.Indigo),
    neopixel.colors(NeoPixelColors.Indigo),
    neopixel.colors(NeoPixelColors.Indigo),

    neopixel.colors(NeoPixelColors.Violet),
    neopixel.colors(NeoPixelColors.Violet),
    neopixel.colors(NeoPixelColors.Violet),

    neopixel.colors(NeoPixelColors.Purple),
    neopixel.colors(NeoPixelColors.Purple),
    neopixel.colors(NeoPixelColors.Purple),

    neopixel.colors(NeoPixelColors.White),
    neopixel.colors(NeoPixelColors.White),
    neopixel.colors(NeoPixelColors.White)
    ]
while (true) {
    sound_level = input.soundLevel()
    brightness = getBrightness(sound_level)
    serial.writeNumber(brightness)
    strip.setBrightness(brightness)
    color_index2 = getColor(color_index2, color_list.length)
    for (let index = 0; index <= 4; index++) {
        let list: number[] = []
        color_from_list = list[color_index2]
        serial.writeValue("color_from_list", color_from_list)
        strip.setPixelColor(index, color_list[color_index2])
        strip.show()
        basic.pause(25)
    }
}
basic.forever(function () {
	
})
