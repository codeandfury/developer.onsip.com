---
title: User Agent Authentication
---

# User Agent Authentication

* TOC
{:toc}

Let's walk through how to create a [user agent](http://sipjs.com/api/0.5.0/ua/){:target="_blank"} using SIP.js and authenticate it via the OnSIP Network Web API.

## Overview

### Creating a User Agent

First, we will create the index.html and main.js.


We need to include the SIP.js library, which can be downloaded [here](http://www.sipjs.com/download/){:target="_blank"}, as well as the main.js file. 

To create a user agent we will use the `SIP.UA(configuration)` method.  If the configuration is left empty, then it creates an anonymous user agent.  The list of configuration parameters can be found [here](http://sipjs.com/api/0.5.0/ua_configuration_parameters/){:target="_blank"}.



### Authenticating a User Agent

In order to make and receive calls to the PSTN, we need to create an authenticated user agent.  To create an authenticated user agent we need to include an auth username and SIP password.  

To get the auth username and SIP password using the OnSIP network, we will make ajax calls to the Web API.  The Web API is located at `www.jnctn.com/restapi`.  

We will put the auth name and password in the configuration variable which is then passed to the `SIP.UA()` method.

<iframe
  style="width: 120%; height: 500px"
  src="http://jsfiddle.net/VC8rK/6/embedded/js,html,css,result/">
</iframe>



