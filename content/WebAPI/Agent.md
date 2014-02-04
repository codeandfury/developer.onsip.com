---
title: Agent | Web API
---

# Agent

* TOC
{:toc}

## Agent Add Account

As an Agent, this requests creates a new account.  Immediate after the account is created, the onSIP branded billing emails are sent to the email address.  

If you 

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

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
`Phone` | The contact phone number
`Email` | A valid email address.  This email will receive billing emails, feature/product change emails, used by support to address account-level bug reports.  The admin user created by this signup account will be assigned this email address.  
`Password` | A user's login password (the password used to login to the web portal).  Used to generate API sessions and log into the admin portal to make account wide changes.
`Productcode` | This should be "onSIP".
`Creditcard` | This should be "false"


### Examples

Not available.
