---
title: Voicemail | Web API
---

# Voicemail

* TOC
{:toc}


## Voicemailbox Add

Add a voicemail box to an Organization. This `Action` is simply for creating a new voicemailbox. Once created, use [User Address Edit](User-Addresses/user-address-edit) to set the `DefaultAddress` to rollover to voicemail after a set `Timeout`.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "VoicemailboxAdd"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`OrganizationId` | A positive integer which references a unique Organization.
`Username` | The username portion of the address.
`Domain` | The domain portion of the address.
`Mailbox` | A positive integer value up to 7 digits representing the Mailbox's number. It must be unique across the organization the mailbox belongs to. It usually makes sense to make this identical to the extension of the user assocaited with this mailbox. For example, if my extension is 7011, then it would make sense for my mailbox number to be 7011 as well.
`Fullname` | A proper name associated with the user of the mailbox. For example, 'Joe Smith'.

Optional Parameters | Default | Description
-|-
`Timezone` | 'us\_eastern' | One of the following values: 'us\_eastern', 'us\_central', 'us\_mountain', or 'us\_pacific'.
`SayCallerId` | false | Play caller-id information when reviewing messages; boolean (true/false)
`SayDuration` | false | Play message length information when reviewing messages; boolean (true/false)
`SayDatetime` | false | Play date and time call when reviewing messages; boolean (true/false)
`NotifyEmail` | false | One of the following values: 'no', 'yes', 'attach', or 'delete'.
`Email` | n/a | If NotifyEmail is anything other than 'no', this parameter is required and should be the email address to send email notifications to.
`NotifyPager` | no | One of the following values: 'no' or 'yes'
`Pager` | n/a | If NotifyPager is anything other than 'no', this parameter is required and should be the email address to send pager notifications to.
`Mwi` | Don't send MWI notifications | SIP User Address send message waiting indications to using SIP NOTIFY requests.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [VoicemailboxAdd.rng](/rng/VoicemailboxAdd.rng)
Supporting | [Voicemailbox.rng](/rng/Voicemailbox.rng)

### Examples

Not available.


## Voicemailbox Read

Returns information about an Voicemailbox.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "VoicemailboxRead"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`VoicemailboxId` | A positive integer which references a unique Voicemailbox.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [VoicemailboxRead.rng](/rng/VoicemailboxRead.rng)
Supporting | [Voicemailbox.rng](/rng/Voicemailbox.rng)

### Examples

Not available.


## Voicemailbox Browse

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "VoicemailboxBrowse"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.

One and Only One of the Following Parameters | Description
`AccountId` | A positive integer which references a unique Account.
`OrganizationId` | A positive integer which references a unique Organization.

Optional Parameters | Default | Description
-|-
`OrderBy` | | VoicemailboxId [Desc] \| OrganizationId [Desc] \| Mailbox [Desc] 
`Limit` | 20 | The maximum number of records to return.
`Offset` | 0 | The offset of the first record to return. The offset of the initial record is 0 (not 1).
`CalcFound` | true | Calculate how many records there would be in the result set, disregarding any Limit parameter.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [VoicemailboxBrowse.rng](/rng/VoicemailboxBrowse.rng)
Supporting | [Voicemailbox.rng](/rng/Voicemailbox.rng)

### Examples

Not available.


## Voicemailbox Delete

Delete a Voicemailbox.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "VoicemailboxDelete"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`VoicemailboxId` | A positive integer which references a unique Voicemailbox.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [VoicemailboxDelete.rng](/rng/VoicemailboxDelete.rng)

### Examples

Not available.


## Voicemailbox Edit

Update a Voicemailbox.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "VoicemailboxEdit"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`VoicemailboxId` | A positive integer which references a unique Voicemailbox.

Optional Parameters | Default | Description
-|-
`Mailbox` | If the parameter is not supplied, the value is unchanged. | A positive integer value up to 7 digits representing the Mailbox's number. It must be unique across the organization the mailbox belongs to. It usually makes sense to make this identical to the extension of the user assocaited with this mailbox. For example, if my extension is 7011, then it would make sense for my mailbox number to be 7011 as well.
`Password` | If the parameter is not supplied, the value is unchanged. | A positive integer value up to 7 digits representing the Mailbox's PIN number.
`Timezone` | 'us\_eastern' | One of the following values: 'us\_eastern', 'us\_central', 'us\_mountain', or 'us\_pacific'.
`SayCallerId` | false | Play caller-id information when reviewing messages; boolean (true/false)
`SayDuration` | false | Play message length information when reviewing messages; boolean (true/false)
`SayDatetime` | false | Play date and time call when reviewing messages; boolean (true/false)
`NotifyEmail` | false | One of the following values: 'no', 'yes', 'attach', or 'delete'.
`Email` | n/a | If NotifyEmail is anything other than 'no', this parameter is required and should be the email address to send email notifications to.
`NotifyPager` | no | One of the following values: 'no' or 'yes'
`Pager` | n/a | If NotifyPager is anything other than 'no', this parameter is required and should be the email address to send pager notifications to.
`Mwi` | Don't send MWI notifications | SIP User Address send message waiting indications to using SIP NOTIFY requests.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [VoicemailboxEdit.rng](/rng/VoicemailboxEdit.rng)
Supporting | [Voicemailbox.rng](/rng/Voicemailbox.rng)

### Examples

Not available.

