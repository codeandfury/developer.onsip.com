---
title: Organizations | Web API
---

# Organizations

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

Optional Parameters | Default | Description
-|-
`Company` | '' | The contact company or organization name.
`PbxType` | 'hosted' | Currently we only allow customers to add additional Hosted PBXs to a single account. Contact support for more options.
`Domain` | '' | A domain must contain 'onsip.com', i.e. it must be a subdomain of the onsip.com domain. This can be changed later using the [`OrganizationMigrateDomain`](/WebAPI/Organizations/#organization-migrate-domain) action. By default, one is created using the authentication username as the subdomain, with underscores replaced with dashes.

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


## Organization Migrate Domain


Migrates the domain of the organization so as to allow custom domains.  If you are an agent creating accounts for your custom domain, you must first create the account by using the [AgentAddAccount](../Agent/#agent-add-account) action.

You can get the required OrganizationId parameter by doing a [Organization Read](../Organizations/#organization-read).

The recommended and supported approach for a customer hosting their SIP domain with us is for them to create an SRV record for `_sip._udp.<domain>` to point to target `sip.onsip.com` on port 5060.  SRV TCP records are NOT allowed yet.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Organization Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "OrganizationMigrateDomain"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`OrganizationId` | A positive integer which references a unique Organization.
`OldDomain` | The old domain.  It must be an existing domain.
`NewDomain` | The domain that is being migrated too.  This new domain must have a SRV record associated with it.


### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [OrganizationMigrateDomain.rng](/rng/OrganizationEditContact.rng)
Supporting | [Organization.rng](/rng/Organization.rng) [Contact.rng](/rng/Contact.rng)


### Examples

For more information on how to make requests go to [Request Format](../#request-format).

For easy to follow examples on how to do requests using jQuery look at their documentation [here](http://api.jquery.com/jQuery.post/)

~~~ javascript
$.post("https://www.jnctn.com/restapi", {
    Action: "OrganizationMigrateDomain",
    SessionId: "dh3enh0v2n6u4radtmpz2gkpe7",
    OrganizationId: "1234",
    OldDomain: "example.onsip.com",
    NewDomain: "example.newdomain.com"
}).done(function (data) {
    alert( "Data Loaded: " + data );
});
~~~
