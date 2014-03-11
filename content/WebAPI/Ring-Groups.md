---
title: Ring Groups | Web API
---

# Ring Groups

Groups are similar to e-mail group aliases. Multiple user addresses can be part of a group. A call to the group would ring the phone of each of the members in that group.

## Group Address Add

Add a GroupAddress to an Organization.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "GroupAddressAdd"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`OrganizationId` | A positive integer which references a unique Organization.
`Username` | The username portion of the address to add.
`Domain` | The domain portion of the address to add.
`Ordering` | 'parallel' \| 'sequential'
`Timeout` | A positive integer indicating the max length of time in seconds a call attempt is made.
`MemberAddresses` | An array of existing SIP UserAddresses of the form array(UserAddress => Priority) which make up the group. Priority is an integer specifying the relative priority of the address in the group. More explicitly, the URI will contain: MemberAddresses[user1@domain.onsip.com]=1&MemberAddresses[user2@domain.onsip.com]=2

Optional Parameters | Default | Description
-|-
`DefaultAddress` | If not set, no failover will be attempted. | A failover SIP address to use in the event of a timeout or negative response. 

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [GroupAddressAdd.rng](/rng/GroupAddressAdd.rng)
Supporting | [GroupAddress.rng](/rng/GroupAddress.rng) [Address.rng](/rng/Address.rng) [DefaultAddress.rng](/rng/DefaultAddress.rng)

### Examples

Not available.


## Group Address Read

Returns information about a GroupAddress.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "GroupAddressRead"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`Address` | A SIP "group" address of the form username@domain (ie sales@smith.onsip.com).

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [GroupAddressRead.rng](/rng/GroupAddressRead.rng)
Supporting | [GroupAddress.rng](/rng/GroupAddress.rng) [Address.rng](/rng/Address.rng) [DefaultAddress.rng](/rng/DefaultAddress.rng)

### Examples

Not available.


## Group Address Browse

Returns information about a group GroupAddresses.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "GroupAddressBrowse"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.

One and Only One of the Following Parameters | Description
`AccountId` | A positive integer which references a unique Account.
`OrganizationId` | A positive integer which references a unique Organization.

Optional Parameters | Default | Description
-|-
`OrderBy` | | Username [Desc] \| Domain [Desc] \|
`Limit` | 20 | The maximum number of records to return.
`Offset` | 0 | The offset of the first record to return. The offset of the initial record is 0 (not 1).
`CalcFound` | true | Calculate how many records there would be in the result set, disregarding any Limit parameter.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [GroupAddressBrowse.rng](/rng/GroupAddressBrowse.rng)
Supporting | [GroupAddress.rng](/rng/GroupAddress.rng) [Address.rng](/rng/Address.rng) [DefaultAddress.rng](/rng/DefaultAddress.rng)

### Examples

Not available.


## Group Address Delete

Delete a GroupAddress.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "GroupAddressDelete"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`Address` | A SIP "group" address of the form username@domain (ie sales@smith.onsip.com).

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [GroupAddressDelete.rng](/rng/GroupAddressDelete.rng)

### Examples

Not available.


## Group Address Edit

Update a GroupAddress.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "GroupAddressEdit"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`Username` | The username portion of the address.
`Ordering` | 'parallel' \| 'sequential'
`Timeout` | A positive integer indicating the max length of time in seconds a call attempt is made.
`MemberAddresses` | An array of existing SIP UserAddresses of the form array(UserAddress => Priority) which make up the group. Priority is an integer specifying the relative priority of the address in the group. More explicitly, the URI will contain: MemberAddresses[user1@domain.onsip.com]=1&MemberAddresses[user2@domain.onsip.com]=2

Optional Parameters | Default | Description
-|-
`DefaultAddress` | If not set, no failover will be attempted. | A failover SIP address to use in the event of a timeout or negative response. 

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [GroupAddressEdit.rng](/rng/GroupAddressEdit.rng)
Supporting | [GroupAddress.rng](/rng/GroupAddress.rng) [Address.rng](/rng/Address.rng) [DefaultAddress.rng](/rng/DefaultAddress.rng)

### Examples

Not available.

