<link rel="stylesheet" href="css/markdown.css">

# WinkWink

It is estimated that Dry Eye Syndrome (DES) affects
approximately 2 billion people worldwide. WinkWink is
introduced, an assistive technology that combines blink
detection and feedback to promote healthier blinking
habits during the use of electronic devices, thus
counteracting tear evaporation and improving ocular
comfort.

![description: place](content/file6/pictures/zippo-view.png)

## Objectives

Develop a portable assistive technology to prevent and alleviate the symptoms of Dry Eye Syndrome (DES) in users who spend long hours in front of electronic devices.

The specific objectives of WinkWink focus on the following design requirements:

- Detect blinks with an RGB camera, considering that blinks should be in a range between 12-15 times per minute and have a duration between 100ms to 400ms.
- Show on a small screen the blink rate every 15 minutes.
- Show on a small screen tips provided by ophthalmology specialists to prevent DES.
- Sound a buzzer and show a message on a screen as an indication to take 5-minute breaks, after working more than 1 hour in front of electronic devices.

![description: place](content/file6/pictures/zippo-desktop.png)

## Features

- Size: spherical shape of 6cm radius.
- Portable, can be connected to an external battery or micro USB cell phone charger.
- Algorithms:
  - Blink detection
  - Face focus
  - Gaze direction identification
- Operating range: 30cm to 2m.
- Alerts:
  - Sounds: buzzer
  - Visuals: Oled screens
- Others: animated blinking eyes, active pause buzzer, tips shown on small screen, and blink report every 15 minutes.

## Hardware

The hardware is observed in the figure below and its functions are as described:

### RGB camera
Takes photos constantly and must focus on the person using an electronic device.

### Buzzer
Makes a sound alert when it is necessary to notify the person if they are blinking in the corresponding range or not.

### Raspberry Pi
Processes the images and is the processing unit of WinkWink.

### Oled square display
Shows eye expressions in WinkWink to be more attractive to the user.

### Oled rectangular display
Visually notifies the person of tips and if they are blinking in the corresponding range or not.

### Touch sensor
Allows the person to change the mode of operation of WinkWink by touching it.

## Operation

WinkWink has 2 modes to operate and be more flexible to the user, the modes are as follows:

### Concentration mode
When the user has or considers themselves with tasks that require high concentration, they can put WinkWink in this mode. In this mode, WinkWink will have an expression of being inactive, showing in each of its eyes a horizontal line and in the message screen will show a tip for the prevention of Dry Eye Syndrome. The tips are related to the following:

- Do not use too much brightness on the screen.
- Interval of adequate blinks per minute.
- Breaks every hour, after continuous use of the computer.
- Avoid very dry environments.
- Avoid environments with smoke or dust.
- Recommend seeing a specialist when you don't feel well.

### Company mode
In this mode, WinkWink repeats the following procedure:

- Count blinks made every minute with the blink detector.
- Every 15 minutes inform the percentage of blinks made, with respect to the recommended range. If the number of blinks is low, it will encourage the user to make a little more effort.
- Every hour, it will indicate to the person to take a 5-minute break.

![description: place](content/file6/pictures/zippo-exploded-view.png)