---
title: Sending Messages and Making Calls | SIP.js
---

# Sending Messages and Making Calls

* TOC
{:toc}

In this guide, we walk through sending instant messages and creating sessions from a browser using [SIP.js](http://sipjs.com).  SIP.js is an open-source SIP stack written entirely in JavaScript for use with WebRTC-enabled browsers like Chrome and Firefox.  For more information about SIP.js, please visit [sipjs.com](http://www.sipjs.com).

## Setup

### HTML

We must create files called `index.html` and `main.js` in the same folder.  In the `index.html` file we need to include the SIP.js library as well as the main.js file.  [Download SIP.js](http://sipjs.com/download/) and save it in the same directory as the other two files.  Then, add the following code to `index.html`:

<iframe
  style="width: 100%; height: 250px"
  src="http://jsfiddle.net/5JbvL/2/embedded/html,js,result/">
</iframe>


### Creating the User Agent

In order to send messages, create a SIP user agent.  To do this, open up `main.js`. Calling `new SIP.UA()` method, with no parameters, creates an anonymous user agent:

<iframe
  style="width: 100%; height: 250px"
  src="http://jsfiddle.net/gk3p4/6/embedded/js,html,result/">
</iframe>


## Sending a Message

After a user agent has been created we can send a message.

To send a message, call the `.message(target, body)` method, along with the address that the message is being sent to in the `target` argument and the message that we are sending in the `body` argument.  


<iframe
  style="width: 100%; height: 250px"
  src="http://jsfiddle.net/8Cg6M/5/embedded/js,html,result/">
</iframe>

## Making a Call

In addition to sending a SIP message, we can also make video calls.  

A `<video>` element is need to display the video stream.  The `<video>` element adds a standard way for browsers to display video over the internet without additional plugins. This makes `<video>` elements perfect for WebRTC. 

Within the `<body>` tags, there is a `remoteVideo` `<video>` element, to display the video of the person being called.  There is also a `localVideo` `<video>` element, to display the video stream that is being sent to the person being called.  The local video stream should always be muted to prevent feedback.

(Optional) We'll need to add some more code to display the videos later.  In the meantime, blank `<video>` elements don't look like much.  To help visualize them better, we used CSS to put a border around the `<video>` elements, to visualize them better.

<iframe
  style="width: 100%; height: 300px"
  src="http://jsfiddle.net/mgc2e/11/embedded/html,js,css,result/">
</iframe>

### Creating the Call

Similar to message sending, when we make a call, we first need to create a user agent using `SIP.UA()`. After this we can send an invite to make a call and thereby create a SIP session.

To send an invite first create a javascript object, which contains the `media` variable that specifies whether the session contains audio and video (i.e. whether it is a video call or an audio call).  

Then call the `.invite()` method with the target address and the `options` object containing media information.

After invite is called, the browser will ask for permission to access the camera and microphone.  Permission must be allowed to make the call.  The person being called has the choice of accepting or rejecting the call.  

An `endCall` button is added to terminate the session using the `.bye()` method.

<iframe
  style="width: 100%; height: 410px"
  src="http://jsfiddle.net/T4Kv2/18/embedded/js,html,css,result/">
</iframe>


### Displaying the Call

Although we are now able to make calls, we are not yet displaying the videos on the screen.  To do this we are going to attach the video streams to the `<video>` elements.  

The streams cannot be attached until the call begins. Catch the `accepted` event using `.on('accepted', funct)` and attach the video streams within this callback function.  

Create a new function called onAccepted(), and bind it to the `accepted` event.  Inside this function, call the `attachMediaStream` function on both media streams, and then play both video elements.

The function `attachMediaStream` attaches the media stream to the video element.  This is needed due to cross browser compatibility issues.

<iframe
  style="width: 100%; height: 600px"
  src="http://jsfiddle.net/qWmG7/26/embedded/js,html,css,result/">
</iframe>
