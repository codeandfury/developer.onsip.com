---
title: User Addresses | Web API
---

# User Addresses

Every user can have one or more user addresses or SIP addresses (e.g mike@acme.onsip.com). This feature can be a useful way to create different identities like mike.sales@acme.onsip.com and mike.support@acme.onsip.com for the same user. User addresses can be a handy feature when used in conjunction with [Ring Groups](../Ring-Groups). For instance, it would be trivial to run phone campaigns by placing the user address, mike.campaign1@acme.onsip.com, into the [Ring Group](../Rign Groups) holiday.campaign1@acme.onsip.com, and then assigning a phone number to that campaign.

* TOC
{:toc}

## User Address Add

Add a UserAddress to an Organization.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "UserAddressAdd"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`OrganizationId` | A positive integer which references a unique Organization.
`Username` | The username portion of the address to add.
`Domain` | The domain portion of the address to add.
`UserId` | A positive integer which references a unique User associated with the address.
`Timeout` | A positive integer indicating the max length of time in seconds a call attempt is made.

Optional Parameters | Default | Description
-|-
`DefaultAddress` | If not set, no failover will be attempted. | A failover SIP address to use in the event of a timeout or negative response. 

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [UserAddressAdd.rng](/rng/UserAddressAdd.rng)
Supporting | [UserAddress.rng](/rng/UserAddress.rng) [Address.rng](/rng/Address.rng) [DefaultAddress.rng](/rng/DefaultAddress.rng)

### Examples

Not available.


## User Address Read

Returns information about a UserAddress.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "UserAddressRead"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`Address` | A SIP "user" address of the form username@domain (ie joe@smith.onsip.com).

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [UserAddressRead.rng](/rng/UserAddressRead.rng)
Supporting | [UserAddress.rng](/rng/UserAddress.rng) [Address.rng](/rng/Address.rng) [DefaultAddress.rng](/rng/DefaultAddress.rng)

### Examples

Not available.


## User Address Browse

Returns information about a group UserAddresses.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "UserAddressBrowse"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.

One and Only One of the Following Parameters | Description
`AccountId` | A positive integer which references a unique Account.
`OrganizationId` | A positive integer which references a unique Organization.
`UserId` | A positive integer which references a unique User.

Optional Parameters | Default | Description
-|-
`OrderBy` | UserId | Domain [Desc] \| UserId [Desc] 
`Limit` | 20 | The maximum number of records to return.
`Offset` | 0 | The offset of the first record to return. The offset of the initial record is 0 (not 1).
`CalcFound` | true | Calculate how many records there would be in the result set, disregarding any Limit parameter.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [UserAddressBrowse.rng](/rng/UserAddressBrowse.rng)
Supporting | [UserAddress.rng](/rng/UserAddress.rng) [Address.rng](/rng/Address.rng) [DefaultAddress.rng](/rng/DefaultAddress.rng)

### Examples

Not available.


## User Address Delete

Delete a UserAddress.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "UserAddressDelete"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`Address` | A SIP "user" address of the form username@domain (ie joe@smith.onsip.com).

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [UserAddressDelete.rng](/rng/UserAddressDelete.rng)

### Examples

Not available.


## User Address Edit

Update a UserAddress.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "UserAddressEdit"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`UserId` | A positive integer which references a unique User associated with the address.
`Timeout` | A positive integer indicating the max length of time in seconds a call attempt is made.

Optional Parameters | Default | Description
-|-
`DefaultAddress` | If not set, no failover will be attempted. | A failover SIP address to use in the event of a timeout or negative response.
`Username` | The updated username portion of the address.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [UserAddressEdit.rng](/rng/UserAddressEdit.rng)
Supporting | [UserAddress.rng](/rng/UserAddress.rng) [Address.rng](/rng/Address.rng) [DefaultAddress.rng](/rng/DefaultAddress.rng)

### Examples

Not available.

