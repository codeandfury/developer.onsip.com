---
title: Accounts | Web API
---

# Accounts

* TOC
{:toc}

## Account Read

Returns information about an Account.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "AccountRead"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`AccountId` | A positive integer which references a unique Account.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [AccountRead.rng](/rng/AccountRead.rng)
Supporting | [Account.rng](/rng/Account.rng) [Contact.rng](/rng/Contact.rng) [CreditCard.rng](/rng/CreditCard.rng)

### Examples

Not available.


## Account Edit Contact

Update the Contact record associated with the account.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "AccountEditContact"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`AccountId` | A positive integer which references a unique Account.
`Name` | The contact name.
`Organization` | The contact company or organization name.
`Address` | The contact address.
`City` | The contact city.
`State` | The contact state - the two letter state code.
`Zipcode` | The contact zipcode.
`CountryId` | A positive integer which references a unique Country.
`Phone` | The contact phone number.
`Email` | The contact email address.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [AccountEditContact.rng](/rng/AccountEditContact.rng)
Supporting | [Account.rng](/rng/Account.rng) [Contact.rng](/rng/Contact.rng) [CreditCard.rng](/rng/CreditCard.rng)

### Examples

Not available.


## Account Credit Add

Add credit to the pre-paid balance of the account by charging the credit card on file.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "AccountEditCreditAdd"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`AccountId` | A positive integer which references a unique Account.
`Amount` | Amount in dollars as an integer between 10 and 10000.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [AccountEditAddCredit.rng](/rng/AccountEditAddCredit.rng)
Supporting | [Account.rng](/rng/Account.rng) [Contact.rng](/rng/Contact.rng) [CreditCard.rng](/rng/CreditCard.rng)

### Examples

Not available.


## Account Recharge

Modify the auto recharge parameters of the account.

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "AccountEditRecharge"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.
`AccountId` | A positive integer which references a unique Account.
`Recharge` | Enable auto recharge for this account; boolean (true/false).
`RechargeThreshold` | The dollar amount below which the pre-paid balance must fall for an auto recharge to be attempted; an integer >= 5 and <= 5000.
`RechargeLevel` | The dollar amount to which the pre-paid balance will be increased by an auto recharge: an integer >= 10 and <= 10000.


### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [AccountEditRecharge.rng](/rng/AccountEditRecharge.rng)
Supporting | [Account.rng](/rng/Account.rng) [Contact.rng](/rng/Contact.rng) [CreditCard.rng](/rng/CreditCard.rng)

### Examples

Not available.


## Account Invoice Read

If used with an AccountInvoiceId this returns an existing invoice. Otherwise, based on the current account configuration, this will generate a preliminary invoice for the next billing cycle (useful to get an idea of what the next monthly invoice will look like).

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "AccountInvoiceRead"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.

One and Only One of the Following Parameters | Description
-|-
`AccountId` | A positive integer which references a unique Account.
`AccountInvoiceId` | A positive integer which references a unique Invoice.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [AccountInvoiceRead.rng](/rng/AccountInvoiceRead.rng)
Supporting | [AccountInvoice.rng](/rng/AccountInvoice.rng)

### Examples

Not available.

## Account Invoice Browse

If used with an AccountInvoiceId this returns an existing invoice. Otherwise, based on the current account configuration, this will generate a preliminary invoice for the next billing cycle (useful to get an idea of what the next monthly invoice will look like).

### Authentication & Authorization

Authentication | Authorization
-|-
[Authenticated Session](../Authentication/#session-create) | [Account Admin](../#roles)

### Request Parameters

Required Parameters | Description
-|-
`Action` | "AccountInvoiceBrowse"
`SessionId` | [Authenticated Session](../Authentication/#session-create) identifier.

Optional Parameters | Default | Description
-|-
`OrderBy` | AccountInvoiceId | AccountId [Desc] \| AccountInvoiceId [Desc] 
`Limit` | 20 | The maximum number of records to return.
`Offset` | 0 | The offset of the first record to return. The offset of the initial record is 0 (not 1).
`CalcFound` | true | Calculate how many records there would be in the result set, disregarding any Limit parameter.

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [AccountInvoiceBrowse.rng](/rng/AccountInvoiceBrowse.rng)
Supporting | [AccountInvoice.rng](/rng/AccountInvoice.rng)

### Examples

Not available.
