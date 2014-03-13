---
title: Send a Message | SIP.js
---

# Sending Messages and Making Calls

* TOC
{:toc}

Let's walk through core API concepts as we tackle some everyday use cases.

## Setup

### Html

We must first create the files index.html and main.js in the same folder.  In the index.html file we need to include the SIP.js library, which can be downloaded [here](/download/), as well as the main.js file.  

Although we are loading the SIP.js library, we are not doing anything with it yet.


<iframe
  style="width: 100%; height: 250px"
  src="http://jsfiddle.net/5JbvL/2/embedded/html,js,result/">
</iframe>



### Creating the User Agent

In order to make calls and send messages you must create a SIP user agent.  For this example, we will create an anonymous user agent.  To do this we will call the `SIP.UA()` method which will create and start the user agent.

<iframe
  style="width: 100%; height: 250px"
  src="http://jsfiddle.net/gk3p4/5/embedded/js,html,result/">
</iframe>


## Sending a Message

After a user agent has been created we can send a message.

To send the message we must use call the `.message(target, body)` method, along with the address that we are sending the message to in the `target` variable and the message that we are sending in the `body` variable.


<iframe
  style="width: 100%; height: 250px"
  src="http://jsfiddle.net/8Cg6M/5/embedded/js,html,result/">
</iframe>

## Making a Call

In addition to sending a SIP message, we can also make video calls.  

In order to make a video call, we need a way to display the video call on your screen.  We can use a `<video>` element for this.  The `<video>` adds a standard way for browsers to display video over the internet without additional plugins. This makes `<video>` perfect for WebRTC. The local video stream should always be muted to prevent feedback.

In this example, within the `<body>` tags, we have a `remoteVideo` `<video>`, to display the video of the person you are calling.  We also have a `localVideo` `<video>`, to display the video stream that you are sending to the person you are calling.  

In the style.css file we will put a border around the `<video>` elements, to visualize them better.

