---
title: Call Detail Records | Web API
---

# Call Detail Records

* TOC
{:toc}

## CDR Browse

Returns information about a group of Call Detail Records or CDRs. CDRs are only generated for calls to and from the PSTN. There will be no records generated for SIP to SIP calling which include extension to extension dialing. Internet calls are always free.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "CdrBrowseBrowse"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.

One and Only One of the Following Required Parameters | Description
-|-
`AccountId` | A positive integer which references a unique Account.
`OrganizationId` | A positive integer which references a unique Organization.
`UserId` | A positive integer which references a unique User.

One and Only One of the Following Optional Parameters | Default | Description
-|-
`MonthOffset` | 0 | A month offset into the history. 0 = current month, -1 = last month, -2 = two months ago, ...
`StartDateTime` & `EndDateTime` | NA | DateTime range; StartDateTime <= DateTime < EndDateTime
`StartCdrId` & `EndCdrId` | NA | CdrId range; StartCdrId <= CdrId < EndCdrId

Optional Parameters | Default | Description
-|-
`OrderBy` | DateTime | CdrId [Desc] \| DateTime [Desc]  \| Price [Desc] 
`Limit` | 20 | The maximum number of records to return.
`Offset` | 0 | The offset of the first record to return. The offset of the initial record is 0 (not 1).
`CalcFound` | true | Calculate how many records there would be in the result set, disregarding any Limit parameter.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [CdrBrowse.rng](/rng/CdrBrowse.rng)
Supporting | [Cdr.rng](/rng/Cdr.rng)

### Examples

Not available.
