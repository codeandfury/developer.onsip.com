---
title: User Agent Authentication
---

# User Agent Authentication

* TOC
{:toc}

Let's walk through how to create a user agent using SIP.js and authenticate it via the OnSIP Network web api.

## Overview

### Creating a User Agent

First, we will create the index.html and main.js.


We need to include the SIP.js library, which can be downloaded [here](http://www.sipjs.com/download/){:target="_blank"}, as well as the main.js file. 

To create a user agent we will use the `SIP.UA(configuration)` method.  If the configuration is left empty, then it creates an anonymous user agent.  The list of configuration parameters can be found [here](http://sipjs.com/api/devel/ua_configuration_parameters/){:target="_blank"}.

<iframe
  style="width: 120%; height: 260px"
  src="http://jsfiddle.net/W7ZRC/3/embedded/html,js,css,result/">
</iframe>

### Authenticating a User Agent

In order to make and receive calls to the PSTN, we need to create an authenticated user agent.  To create an authenticated user agent we need to include an auth username and SIP password.  

To get the auth username and SIP password using the OnSIP network, we will make ajax calls to the web api.  The web api is located at `www.jnctn.com/restapi`.  


