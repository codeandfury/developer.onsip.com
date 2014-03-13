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



### Authenticating a User Agent

In order to make and receive calls to the PSTN, we need to create an authenticated user agent.  To create an authenticated user agent we need to include an auth username and SIP password.  

To get the auth username and SIP password using the OnSIP network, we will make ajax calls to the web api.  The web api is located at `www.jnctn.com/restapi`.  

We will put the auth name and password in the configuration variable which is then passed to the `SIP.UA()` method.

<iframe
  style="width: 120%; height: 500px"
  src="http://jsfiddle.net/VC8rK/5/embedded/js,html,css,result/">
</iframe>



