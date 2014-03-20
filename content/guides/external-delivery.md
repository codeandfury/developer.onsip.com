---
title: Sending Traffic to Third-Party Applications
---

# Sending Traffic to Third-Party Applications

In this guide, we walk through how to send traffic to a third-party application, such as Tropo or Twilio, using an OnSIP [External Address](/WebAPI/External-Addresses/). While authenticated OnSIP users can send SIP messages directly to the third-party, External Addresses can be used to send anonymous traffic, such as those from InstaCall buttons.

## Pre-Requisites

* An OnSIP Network domain. To get one, [sign up for free](#). We'll call this your **domain**. Replace `example.onsip.com` everywhere in this demo with your own domain.
* A destination address to send traffic to.  We'll call this the **foreign address**. Replace `9990123456@sip.tropo.com` everywhere in this demo with your own destination address.
* (Optional) An InstaCall button

## Preface: OnSIP Authentication Policy

You may be wondering why authenticated users can send SIP traffic directly to third-parties, while traffic from InstaCall buttons and other anonymous sources cannot. This is due to the OnSIP SIP authentication policy. Here's how it works:

* Messages **from OnSIP users** are authenticated. People cannot pretend they are you, so we ask for your credentials to protect your identity.
* Messages **to OnSIP SIP addresses** are not authenticated. We want to get your calls to you, no matter who you talk to. OnSIP SIP addresses include OnSIP users as well as applications like ACD Queues, Conference Suites, and (you guessed it) External Addresses. If the message is from an OnSIP user, it is still authenticated by the above rule.
* **All other messages are rejected**. Messages which are neither to nor from OnSIP addresses are not allowed to pass through the platform. This helps protect the platform from attacks and keep things safe and running smoothly.

As you can see, calls from OnSIP users to third parties fall under the second bullet item, but anonymous calls from InstaCall buttons fall under the third category. To circumvent this, we configure an External Address which can receive unauthenticated messages.

## Step 1: Test the External Destination

First, let's make sure the external SIP address is ready to accept traffic. Log into the [InstaCall Phone](https://insta.onsip.com/phone) with your SIP address and password, and enter your chosen **foreign address**.  Ensure that your application received the call.  If the call failed, check to make sure the following are set up properly:

* *Does the third-party application block or filter traffic?* Ensure that it can receive traffic from OnSIP, which may require allowing any IP address or disabling any credential challenges.
* *Does the foreign address contain a username and a domain?* Foreign addresses must be of the form `user@domain`.  The domain should be a fully qualified domain name, **not** an IP address.
* *Is there a typo? Is the application running?* Double check that you typed the address correctly. If the third-party application is new or in trial, ensure that the application is up and ready to receive traffic.

Now that we know the destination is ready for us, let's configure the External Address.

## Step 2: Create an External Address Resource

External Addresses can be managed through the Web Services API ([documentation](/WebAPI/External-Addresses/)). The [ExternalAddressAdd](/WebAPI/External-Addresses/#external-address-add) action creates a new External Address. Let's go straight to code samples:

### JavaScript
~~~ javascript
  var xhr = new XMLHttpRequest();
  var data = new FormData();
  xhr.open('post', 'https://www.jnctn.com/restapi');

  // Use action ExternalAddressAdd
  data.append('Action', 'ExternalAddressAdd');

  // The request requires an authenticated session
  data.append('SessionId', 'mmj99hoauah19skqeruk69ard0');

  // Replace with your OrganizationId (check out the OrganizationBrowse action)
  data.append('OrganizationId', '12345');

  // Set name and alias of the External Address
  // Be sure to replace the domain with your own domain!
  data.append('Name', 'My External Address');
  data.append('Username', 'my.external');
  data.append('Domain', 'example.onsip.com');

  // Replace with your chosen foreign address
  data.append('ForeignAddress', '9990123456@sip.tropo.com');

  xhr.send(data);

  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
    }
  }
~~~

### cURL

~~~ shell
curl -X POST --data "\
Action=ExternalAddressAdd&\
SessionId=mmj99hoauah19skqeruk69ard0&\
OrganizationId=12345&\
Name=My External Address&\
Username=my.external&\
Domain=example.onsip.com&\
ForeignAddress=9990123456@sip.tropo.com" \
https://www.jnctn.com/restapi
~~~

## Step 3: Call your new External Address from anywhere!

You should now be able to call your new External Address from everywhere! Try calling it from the [InstaCall Phone](https://insta.onsip.com/phone) or another SIP phone. You can now use the External Address as a destination for all of your SIP applications, including InstaCall buttons.
