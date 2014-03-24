---
title: SIP Roulette example
---

# SIP Roulette

Let's walk through an example application.  For this example we will be creating "SIP Roulette", an app where users can video chat with random other users.

## Overview

### Setup and HTML Elements

First, we will create the index.html, main.js, and style.css files in the same folder.  

In index.html we will start by adding two `<video>` elements; one for the local video stream and one for the remote video stream.  We will also add a button which will be used to find a new chat partner.  

We need to include the SIP.js library, which can be downloaded [here](http://www.sipjs.com/download/){:target="_blank"}, as well as the main.js file.  In style.css we will include some css styling in order to format the page.  

<iframe
  style="width: 100%; height: 260px"
  src="http://jsfiddle.net/W7ZRC/3/embedded/html,js,css,result/">
</iframe>

### Getting and Displaying Video Streams

To do a video call we need to get access to the video and voice streams from the user.  We will use the library function `SIP.WebRTC.getUserMedia` to do this. 

Our application will also need to attach the incoming and outgoing video streams to the video elements.  We will do this by creating the `attachMediaStream` function, which attaches the media stream and plays it.  We will then attach the local video stream to the `localVideo` element.

<iframe
  style="width: 100%; height: 350px"
  src="http://jsfiddle.net/MLma5/4/embedded/js,html,css,result/">
</iframe>

### Accepting Invites

In our example, we will register a personal user agent for each user.  This user agent is the address at which a user can accept and send invites for video calls.  

We will also have a variable called `newChat`.  If this variable is `true`, then the user agent will accept new invites to video calls, at which point the variable will be set to `false`.  We will add a click event to the "newChat" button, that sets this variable to `true`, so that the user can find a new chat partner.  

We will also add a function that ends the call when the window is unloaded.  

<iframe
  style="width: 100%; height: 600px"
  src="http://jsfiddle.net/2pGLh/7/embedded/js,html,css,result/">
</iframe>

### Sending and Asking for Invites

In order for a user to join a random video call there needs to be a centralized location for users to ask the group to be invited to a call.  In this application, we will do this by having every user register a user agent using the same SIP address.  Then, when users want to be invited to a call, they will send a SIP message to this global SIP address, asking to be invited to a call.  Since every user is registered to this SIP address, they will all receive this message and be able to start a video call with the user.  


In the click event for the `newChat` button we will also send a message to the global SIP address, asking to be invited to a chat.


<iframe
  style="width: 100%; height: 750px"
  src="http://jsfiddle.net/FbfRw/7/embedded/js,html,css,result/">
</iframe>

