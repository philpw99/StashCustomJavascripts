# Stash Custom Javascripts - Unexpectably Powerful !
<p>
 
#### This repo contains custom javascripts to be used in the amazing [StashApp](https://github.com/stashapp/stash), which empower you to manage all your special video collections. Credits to all the incredible, talented and hardworking programmers who make the StashApp so elegant and useful !
 
File to use:
* pwPlayer.js : This is the latest development.
* pwPlayer - Oculus v0.5.js : This is pre-configured js file for Oculus Browser. Every video will be played in full screen mode. Works great for VR videos! In fullscreen you need to choose the VR mode like 180 and 3D side by side. The browser will not remember it. When the playing is done, click on the pause button and you will be back to the scene wall immediately.
* blurryCardBackground.js: Fill scene/movie/image/gallery/studio cards with blurry background. Inspired by CJ in Discord channel.

### Reason to create a repo just for this:
 
StashApp is an excellent video management system for all your desires. It has many great features, but playing videos is a little short.<p>
I made an AutoIt program just to enhance its video playback capability, yet that's not cross-platform and the program has problems here and there.<p>
Well, in Stash version v0.18 there is a new feature called "Custom Javascript". I saw someone submitted a script to enable IINA player on MacOS. I was curious and started to modify that script. Little did I knew that "Custom Javascript" in StashApp can be so powerful ! I can actually utilize the full pontential of the browsers, Stash and platforms !<p>

-----

### To install my scripts
Just copy the content of the script you choose and paste them into the "Settings->Interface->Custom Javascript". Reload the browser and done.<p>
Please don't paste 2 scripts into it, or mixing different scripts together. It usually won't work. Or you are also familiar with Javascript, then you can do your own mixing.

-----

### pwPlayer.js - Scene Card Quick Player
 <img src="https://user-images.githubusercontent.com/22040708/211264163-5f25f566-8217-4334-9df6-ca742a5e92c5.png" width=500 /> <br>
This Javascript will create a "Play" button in each scene card. You can click on it and the video for that scene will be played right away. Click on the video again, then you are back to the scene list.
#### Features
* You Use different mode to watch the video
  - browser mode: video will be played inside the browser.
  - browserfull mode: video will be played inside the browser, but in fullscreen mode.
  - player mode: script will try to send the video to an external player like VLC. It works well in Android, but others need more work.
* One click to end the play back, and you will see the scene selection again. Very convenient.
* Worked and tested in all 3 major browsers: Chrome, Firefox and Ms Edge.
* Now it can show detailed information for the scene file:
* <img src="https://user-images.githubusercontent.com/22040708/211918593-b30a6f0f-bf06-44b3-96dc-d5bf6599bce2.png" width=300 />
#### Versions
 - v0.5 Added "browserpip" mode, which the video will be played in a draggable window.
 - v0.4 The browser and browserfull mode is better. Oculus browser now can play videos in browserfull mode. Useful for VR videos.
 - v0.3 Add "browserfull" mode and test fullscreen feature in all 3 browsers.
 - v0.2 Seperate the code with different mode: "browsers" and "player".
 - v0.1 Add file details to the on mouse hover event.

### blurryCardBackground - Add blurry background to scene/movie/gallery/image/studio.
It fills up the background with blurry images like this:<p>
<img src="https://i.ytimg.com/vi/yCOrqUA0ws4/maxresdefault.jpg" width=300 /><p>
CJ made the original CSS and javascript. I completed the script and make it works in most pages.
This script is better to be used alone, don't mix it up.


