---
title: External Addresses | Web API
---

# External Addresses

External Addresses allow arbitrary SIP addresses to be configured as destinations for OnSIP applications. This can be useful, for example, to alias addresses across organizations or to deliver traffic to SIP addresses hosted outside of the OnSIP platform.

External SIP addresses have three main components: a foreign SIP address, a local SIP address, and a name. Sending a SIP message to the local address will route the message to the foreign address. The name is only used internally in your organization and should be a useful description of the External Address.

* TOC
{:toc}

## Known Limitations

* External addresses must be of the form `user@domain`, where `domain` is a fully qualified domain name. Using an IP address as the domain is not currently supported.
* External SIP addresses are assumed not to be WebRTC-compliant. Invitations from WebRTC clients (such as those from an InstaCall button) to external addresses will use OnSIP's application servers to provide maximum interoperability.

## External Address Browse

Explore information about a group of ExternalAddresses.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "ExternalAddressBrowse"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.

One and Only One of the Following Parameters | Description
`AccountId` | A positive integer which references a unique Account.
`OrganizationId` | A positive integer which references a unique Organization.

Optional Parameters | Default | Description
-|-
`OrderBy` | | Username [Desc] \| Domain [Desc]
`Limit` | 20 | The maximum number of records to return.
`Offset` | 0 | The offset of the first record to return. The offset of the initial record is 0 (not 1).
`CalcFound` | true | Calculate how many records there would be in the result set, disregarding any Limit parameter.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | ExternalAddressBrowse.rng
Supporting | [Address.rng](/rng/Address.rng) [DefaultAddress.rng](/rng/DefaultAddress.rng)

## External Address Add

Add an ExternalAddress to an Organization.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "ExternalAddressAdd"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`OrganizationId` | A positive integer which references a unique Organization.
`Username` | The username portion of the local address to add.
`Domain` | The domain portion of the local address to add. (This should match your Organization's domain.)
`ForeignAddress` | The foreign address where this ExternalAddress will route messages.  `ForeignAddress` should be of the form `user@domain`

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | ExternalAddressAdd.rng
Supporting | [Address.rng](/rng/Address.rng) [DefaultAddress.rng](/rng/DefaultAddress.rng)

## External Address Read

Returns information about an ExternalAddress.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "ExternalAddressRead"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`Address` | The *local* SIP address of the form username@domain (ie joe_external@smith.onsip.com).

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | ExternalAddressRead.rng
Supporting | [Address.rng](/rng/Address.rng) [DefaultAddress.rng](/rng/DefaultAddress.rng)

## External Address Delete

Delete an ExternalAddress.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "ExternalAddressDelete"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`Address` | The *local* SIP address of the form username@domain (ie joe_external@smith.onsip.com).

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | ExternalAddressDelete.rng

## External Address Edit

Update an ExternalAddress.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "ExternalAddressEdit"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.

Optional Parameters | Description
-|-
`Name` | The updated name of the external address (eg, `My External Address`)
`Username` | The updated username portion of the *local* address.
`ForeignAddress` | The updated *foreign* address of the ExternalAddress, where traffic will be forwarded

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | ExternalAddressEdit.rng
Supporting | [Address.rng](/rng/Address.rng) [DefaultAddress.rng](/rng/DefaultAddress.rng)

