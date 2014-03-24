---
title: OnSIP Network
---

# Receiving Calls and Messages using the OnSIP Network

* TOC
{:toc}

Let's walk through how to use the OnSIP network to receive calls and messages.

## Overview

### Creating a Registered User Agent

To make and receive calls and messages using the OnSIP Network, you first need to create an authenticated user agent.  To do this you need your auth username and sip password.  You can get this by using our webapi.  The [user agent authentication guide](/guides/useragentauthentication/) describes how to do this.


### Receiving a Message

Every time a message is received by a user agent, the "message" event is triggered.  We need to catch this message event and do something with the message.  We will do this by calling the `.on("message", funct(e))` method.  The message is sent to the callback function that we include.  We will then print out the body of the message by getting the `.body` attribute.  

<iframe
  style="width: 100%; height: 250px"
  src="http://jsfiddle.net/h6PwR/3/embedded/js,html,result/">
</iframe>

### Receiving a Call

Like in the [make a call](/guides/sipjsguide/) example, we need to include `video` elements to display the call.  When receiving a call, an `invite` event is sent to the user agent.  To answer the call, we will catch this event using `.on('invite', funct(incomingSession))`.  With this incoming session we will accept the call and then attach the media streams to the appropriate video elements.

<iframe
  style="width: 100%; height: 600px"
  src="http://jsfiddle.net/a5RYy/5/embedded/js,html,result/">
</iframe>

