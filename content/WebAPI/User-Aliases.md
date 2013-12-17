---
title: User Aliases | Web API
---

# User Aliases

* TOC
{:toc}


## User Alias Add

Typically used to add an 2 to 6 'pbx extension', this creates an alias for a [User Address](../User-Addresses).

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "UserAliasAdd"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`OrganizationId` | A positive integer which references a unique Organization.
`AliasUsername` | The username portion of the alias to add.
`AddressUsername` | The username portion of the address to which the new alias should be assigned.
`Visibility` | Either the value 'PUBLIC' or 'PRIVATE', legacy use for indication of whether or not to display an extension to any user. Most users will want to use the value of 'PUBLIC' for this paramter.

### Response Format

Not available.

### Examples

Not available.


## User Alias Browse

Returns information about a group UserAliases.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "UserAliasBrowse"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.

One and Only One of the Following Parameters | Description
`AccountId` | A positive integer which references a unique Account.
`OrganizationId` | A positive integer which references a unique Organization.
`UserId` | A positive integer which references a unique User.

### Response Format

Not available.

### Examples

Not available.


## User Alias Delete

Delete a UserAlias.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "UserAliasDelete"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`OrganizationId` | A positive integer which references a unique Organization.
`AliasUsername` | The username portion of the alias to delete.

### Response Format

Not available.

### Examples

Not available.


## User Alias Edit

Update a UserAlias.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "UserAliasEdit"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`OrganizationId` | A positive integer which references a unique Organization.
`AliasUsername` | The username portion of the alias to add.
`NewAliasUsername` | The new username of the alias.
`Visibility` | Either the value 'PUBLIC' or 'PRIVATE', legacy use for indication of whether or not to display an extension to any user. Most users will want to use the value of 'PUBLIC' for this paramter.

### Response Format

Not available.

### Examples

Not available.

