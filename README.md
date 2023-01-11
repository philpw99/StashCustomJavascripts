# Stash Custom Javascripts - Unexpectably Powerful !
<p>
 
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
  - v1.3 Add "browserfull" mode and test fullscreen feature in all 3 browsers.
#### Plans
  - oculusvr mode: If you use Oculus Browser, the script can do automatic VR for you.
