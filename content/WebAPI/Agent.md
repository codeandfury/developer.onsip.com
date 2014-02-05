---
title: Agent | Web API
---

# Agent

* TOC
{:toc}

## Agent Add Account

As an Agent, this requests creates a new account.  Immediate after the account is created, the OnSIP branded billing emails are sent to the email address.  

If you are adding an account that you want to host on your own custom domain, then you need to do an AgentAddAccount action followed by a [OrganizationMigrateDomain](../Organizations/#organization-migrate-domain) action.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Agent Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "AgentAddAccount"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`Username` | The portal username as well as the username portion of the hosted pbx user address.  This is used to generate the admin user's AuthUsername.  It must be equal to the subdomain of Domain.
`Domain` | A fully qualified domain name.  It must be suffixed with onsip.com . It must be the full domain with Username as subdomain, i.e. if Username=dudeuser, then Domain=dudeuser.onsip.com
`Name` | A human readable name
`Company` | The name of the company of the account being created
`Address` | The contact address
`City` | The city parameter of the address
`State` | The state parameter of the address
`Zipcode` | The zipcode parameter of the address
`Phone` | The contact phone number.  No country codes or IDs are accepted.
`Email` | A valid email address.  This email will receive billing emails, feature/product change emails, used by support to address account-level bug reports.  The admin user created by this signup account will be assigned this email address.  
`Password` | A user's login password (the password used to login to the web portal).  Used to generate API sessions and log into the admin portal to make account wide changes.
`Productcode` | This should be "onSIP".
`Creditcard` | This should be "false"


### Examples

Here is an example request.  For more information on how to make requests go to [Request Format](../#request-format).

For easy to follow examples on how to do requests using jQuery look at their documentation [here](http://api.jquery.com/jQuery.post/)

~~~
https://www.jnctn.com/restapi?Action=AgentAddAccount&SessionId=dh3enh0v2n6u4radtmpz2gkpe7&Name=Dude+Man&Company=Dude+Man+Inc.&Address=123+Dude+Street&City=New+York&State=NY&Zipcode=10004&Phone=212-213-1234&Email=dude@onsip.com&Username=dudeman91&Domain=dudeman91.onsip.com&Password=superpassword&Productcode=onSIP&Creditcard=false
~~~

~~~ javascript
$.post("https://www.jnctn.com/restapi", {
    Action: "AgentAddAccount",
    SessionId: "dh3enh0v2n6u4radtmpz2gkpe7",
    Name: "DudeMan",
    Company: "DudeManInc",
    Address: "123DudeStreet",
    City: "NewYork",
    State: "NY",
    Zipcode: "10004",
    Phone: "212-213-1234",
    Email: "dude@onsip.com",
    Username: "dudeman91",
    Domain: "dudeman91.onsip.com",
    Password: "superpassword",
    Productcode: "onSIP",
    Creditcard: "false"
}).done(function (data) {
    alert( "Data Loaded: " + data );
});
~~~
