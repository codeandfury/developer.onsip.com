---
title: Organizations | Web API
---

# Organizations

* TOC
{:toc}


## Organization Add

Create a new organization in the specified account.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "OrganizationAdd"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`AccountId` | A positive integer which references a unique Account.
`Name` | The contact name.
`Address` | The contact address.
`City` | The contact city.
`State` | The contact state - the two letter state code.
`Zipcode` | The contact zipcode.
`CountryId` | A positive integer which references a unique Country.
`Phone` | The contact phone number.
`Email` | The contact email address.
`Username` | An authentication username which references a unique User.
`Password` | A user's login password (the password used to login to the web portal).
`PasswordConfirm` | A confirmation copy of the user's login password (the password used to login to the web portal)

Optional Parameters | Default | Description
-|-
`Company` | '' | The contact company or organization name.
`PbxType` | 'trunk' | 'hosted' \| 'trunk'

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [OrganizationRead.rng](/rng/OrganizationRead.rng)
Supporting | [Organization.rng](/rng/Organization.rng) [Contact.rng](/rng/Contact.rng)

### Examples

Not available.


## Organization Read

Returns information about an Organization.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "OrganizationRead"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`OrganizationId` | A positive integer which references a unique Organization.

One and Only One of the Following Parameters | Description
-|-
`OrganizationId` | A positive integer which references a unique Organization.
`Domain` | A fully qualified domain name which references a unique Organization.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [OrganizationRead.rng](/rng/OrganizationRead.rng)
Supporting | [Organization.rng](/rng/Organization.rng) [Contact.rng](/rng/Contact.rng)

### Examples

Not available.


## Organization Browse

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "OrganizationBrowse"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`AccountId` | A positive integer which references a unique Account.

Optional Parameters | Default | Description
-|-
`OrderBy` | OrganizationId | Domain [Desc] \| OrganizationId [Desc] 
`Limit` | 20 | The maximum number of records to return.
`Offset` | 0 | The offset of the first record to return. The offset of the initial record is 0 (not 1).
`CalcFound` | true | Calculate how many records there would be in the result set, disregarding any Limit parameter.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [OrganizationBrowse.rng](/rng/OrganizationBrowse.rng)
Supporting | [Organization.rng](/rng/Organization.rng)

### Examples

Not available.


## Organization Edit Contact


Update the Contact record associated with the organization.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Organization Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "OrganizationEditContact"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`OrganizationId` | A positive integer which references a unique Organization.
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
`Organization` | '' | The contact company or organization name.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [OrganizationEditContact.rng](/rng/OrganizationEditContact.rng)
Supporting | [Organization.rng](/rng/Organization.rng) [Contact.rng](/rng/Contact.rng)

### Examples

Not available.

