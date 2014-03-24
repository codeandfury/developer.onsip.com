---
title: Phone Numbers | Web API
---

# Phone Numbers

* TOC
{:toc}


## NPA NXX Browse

Returns a list of available phone numbers. Use the DidId value along with Action DidRequest to purchase the DID / phone number, then assign the DID to a user using the DidEdit Action.

### Authentication & Authorization

Not required.

### Request Parameters

Required Parameters | Description
-|-
`Action` | "NpaNxxBrowse"

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [NpaNxxBrowse.rng](/rng/NpaNxxBrowse.rng)
Supporting | [NpaNxx.rng](/rng/NpaNxx.rng) [PostalCode.rng](/rng/PostalCode.rng)

### Examples

Not available.


## DID Request

Use NpaNxxBrowse to find phone numbers, then purchase the number using this UserRequestDid Action. Once purchased, use DID Edit to associate this phone number / DID to a user's SIP address.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "DidRequest"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`UserId` | A positive integer which references a unique User.
`Protocol` | The protocol by which calls will be delivered to the user; 'sip' or 'iax'
`NpaNxx[]` | An array mapping an NPA/NXX to a quantity. For example, NpaNxx[212789]=2 would indicate a request for 2 numbers from Area Code 212 with an NXX of 789.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [DidRequest.rng](/rng/DidRequest.rng)
Supporting | [Did.rng](/rng/Did.rng) [User.rng](/rng/User.rng)

### Examples

Not available.


## DID Edit

Associate a DID / phone number to a SIP address and have callers dial you through the PSTN. Standard Rates will apply. This would be the last step in a series of 3 API calls to setup a phone number and be reachable by way of mobile phones and landlines.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "DidEdit"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`DidId` | A positive integer which references a unique DID.
`UserId` | A positive integer which references a unique User.
`Destination` | A valid hosted SIP address
`CallerIdNumberRequired` | Block calls that don't have valid caller-id number info; boolean (true/false)

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [DidRequest.rng](/rng/DidEdit.rng)
Supporting | [Did.rng](/rng/Did.rng)

### Examples

Not available.

## DID Delete

Remove a DID from an account.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "DidDelete"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`DidId` | A positive integer which references a unique DID.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [DidDelete.rng](/rng/DidDelete.rng)

### Examples

Not available.

