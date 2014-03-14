---
title: OnSIP Network
---

# Receiving Calls and Messages using the OnSIP Network

* TOC
{:toc}

Let's walk through how to use the OnSIP network to receive calls and messages.

## Overview

### Creating a Registered User Agent

In order to make and receive calls and messages using the OnSIP Network, you first need to create an authenticated user agent.  To do this you need your auth username and sip password.  You can get this by using our webapi.  Directions on how to do this can be found here:


### Receiving a Message

Every time a message is received by a user agent, the "message" event is triggered.  We need to catch this message event and do something with the message.  We will do this by calling the `.on("message", funct)` method.  We will then print out the message.

<iframe
  style="width: 100%; height: 250px"
  src="http://jsfiddle.net/h6PwR/2/embedded/html,js,result/">
</iframe>


