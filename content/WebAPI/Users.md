---
title: Users | Web API
---

# Users

* TOC
{:toc}

## User Add

Create a new user in the specified organization. Setting up an extension and voicemail for the user once created is accomplished with [User Alias Add](../User-Aliases/#user-alias-add) and [Voicemailbox Add](../Voicemail/#voicemailbox-add).

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "UserAdd"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`OrganizationId` | A positive integer which references a unique Organization.
`Username` | The portal username as well as the username portion of the hosted pbx user address.
`Domain` | A fully qualified domain name.
`Name` | A human readable name
`Email` | A valid email address
`AuthUsername` | An authentication username which references a unique User.
`Password` | A user's login password (the password used to login to the web portal).
`PasswordConfirm` | A confirmation copy of the user's login password (the password used to login to the web portal)

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [UserRead.rng](/rng/UserAdd.rng)
Supporting | [User.rng](/rng/User.rng) [Contact.rng](/rng/Contact.rng)

### Examples

Not available.


## User Read

Returns information about an User.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "UserRead"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.

One and Only One of the Following Parameters | Description
-|-
`UserId` | A positive integer which references a unique User.
`UserAddress` | A SIP "user" address of the form username@domain (ie joe@smith.onsip.com).
`AuthUsername` | An authentication username which references a unique User.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [UserRead.rng](/rng/UserRead.rng)
Supporting | [User.rng](/rng/User.rng) [Contact.rng](/rng/Contact.rng) [CreditCard.rng](/rng/CreditCard.rng)

### Examples

Not available.


## User Browse

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "UserBrowse"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.

One and Only One of the Following Parameters | Description
`AccountId` | A positive integer which references a unique Account.
`OrganizationId` | A positive integer which references a unique Organization.

Optional Parameters | Default | Description
-|-
`OrderBy` | UserId | UserId [Desc] \| OrganizationId [Desc] \| AuthUsername [Desc]
`Limit` | 20 | The maximum number of records to return.
`Offset` | 0 | The offset of the first record to return. The offset of the initial record is 0 (not 1).
`CalcFound` | true | Calculate how many records there would be in the result set, disregarding any Limit parameter.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [UserBrowse.rng](/rng/UserBrowse.rng)
Supporting | [User.rng](/rng/User.rng)

### Examples

Not available.


## User Edit Contact

Update the Contact record associated with the user.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [User Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "UserEditContact"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`UserId` | A positive integer which references a unique User.
`Name` | The contact name.
`Address` | The contact address.
`City` | The contact city.
`State` | The contact state - the two letter state code.
`Zipcode` | The contact zipcode.
`CountryId` | A positive integer which references a unique Country.
`Phone` | The contact phone number.
`Email` | The contact email address.

Optional Parameters | Default | Description
-|-
`User` | '' | The contact company or user name.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [UserEditContact.rng](/rng/UserEditContact.rng)
Supporting | [User.rng](/rng/User.rng) [Contact.rng](/rng/Contact.rng)

### Examples

Not available.


## User Reset Portal Password

Reset the password of the user specified by UserId. The intention here is to allow Account Admins to reset the portal passwords of users under their administrative control. Portal passwords, also known as the Web Passwords are those used to access my.onsip.com and the real-time events using the OnSIP XMPP API. OnSIP users can also reset their own password through my.onsip.com.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`UserId` | A positive integer which references a unique User.

## User Edit Portal Password

Edits the user portal password without sending a reset portal password email.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Agent Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "UserEditPortalPassword"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`UserId` | A positive integer which references a unique User.
`CurrentPortalPassword` | The current user portal password
`NewPortalPassword` | The new portal password that you are changing too
`NewPortalPasswordConfirm` | Confirm the new portal password.  This must be the same as NewPortalPassword

## User Edit Role Submit

Edits the users role.  Can only edit subordinate users within the agent admin's authority.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Agent Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "UserEditRoleSubmit"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`UserId` | A positive integer which references a unique User.
`RoleNames[]` | An array of the roles that you are giving to the user.  Valid roles are "Account Admin", "Organization Admin", and "User"

