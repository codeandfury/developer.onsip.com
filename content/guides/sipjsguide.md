---
title: Sending Messages and Making Calls | SIP.js
---

# Sending Messages and Making Calls

* TOC
{:toc}

Let's walk through core API concepts as we tackle some everyday use cases.

## Setup

### Html

We must create the files index.html and main.js in the same folder.  In the index.html file we need to include the SIP.js library, which can be downloaded [here](/download/), as well as the main.js file.  

<iframe
  style="width: 100%; height: 250px"
  src="http://jsfiddle.net/5JbvL/2/embedded/html,js,result/">
</iframe>



### Creating the User Agent

In order to send messages, create a SIP user agent.  Calling `SIP.UA()` method, with no parameters, creates an anonymous user agent.

<iframe
  style="width: 100%; height: 250px"
  src="http://jsfiddle.net/gk3p4/5/embedded/js,html,result/">
</iframe>


## Sending a Message

After a user agent has been created we can send a message.

To send the message, call the `.message(target, body)` method, along with the address that the message is being sent to in the `target` argument and the message that we are sending in the `body` argument.


<iframe
  style="width: 100%; height: 250px"
  src="http://jsfiddle.net/8Cg6M/5/embedded/js,html,result/">
</iframe>

## Making a Call

In addition to sending a SIP message, we can also make video calls.  

A `<video>` element is need to display the video stream.  The `<video>` element adds a standard way for browsers to display video over the internet without additional plugins. This makes `<video>` elements perfect for WebRTC. 

Within the `<body>` tags, there is a `remoteVideo` `<video>` element, to display the video of the person being called.  There is also a `localVideo` `<video>` element, to display the video stream that is being sent to the person being called.  The local video stream should always be muted to prevent feedback.

In the style.css file we will put a border around the `<video>` elements, to visualize them better.

<iframe
  style="width: 100%; height: 300px"
  src="http://jsfiddle.net/mgc2e/11/embedded/html,js,css,result/">
</iframe>

### Sending an invite

As when we send a message, when we make a call, we first need to create a user agent using `SIP.UA()`. After this we can send an invite to make a call and thereby create a SIP session.

To send an invite first create a javascript object, which contains the `media` variable that specifies whether the session contains audio and video (i.e. whether it is a video call or an audio call).  

Then call the `.invite()` method with the target address and the `options` object containing media information.

After invite is called, the browser will ask for permission to access the camera and microphone.  Permission must be allowed to make the call.  The person being called has the choice of accepting or rejecting the call.  

An `endCall` button is added to terminate the session using the `.bye()` method.

<iframe
  style="width: 100%; height: 410px"
  src="http://jsfiddle.net/T4Kv2/18/embedded/js,html,css,result/">
</iframe>


###Displaying the Call

Although we are now able to make calls, we are not yet displaying the videos on the screen.  To do this attach the video streams to the `<video>` elements.  

The streams cannot be attached until the call begins. Catch the `accepted` event and attach the video streams after this point.  

Create a new function called onAccepted(), and bind it to the `accepted` event.  Inside this function, call the `attachMediaStream` function on both media streams, and then play both video elements.

The function `attachMediaStream` attaches the media stream to the video element.

<iframe
  style="width: 100%; height: 600px"
  src="http://jsfiddle.net/qWmG7/26/embedded/js,html,css,result/">
</iframe>
