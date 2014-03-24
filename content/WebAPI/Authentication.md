---
title: Authentication | Web API
---

# Authentication

Most of the requests to the Web Services API require authentication. The account must be authorized to perform the desired Action. In most cases, you’ll want to use an Admin account. The Admin of the account is the person who signed up for the OnSIP Hosted PBX service. Authentication is done by establishing a session using the Action SessionCreate. The request needs to be made with parameters UserName and Password. For admins, the password is the one used to access the admin portal, admin.onsip.com. If the credentials are valid, the API will respond with session information. You’ll use the SessionId in subsequent requests.

## Session Create

### Description

Used to create a new session (login the user). Returns a new `SessionId` for the user. The `SessionId` is returned in the `Session` node of the response.
    
### Authentication

Not required.

### Authorization

Not required.

### Parameters

Name|        |Description
----|--------|--------
`Username`|Required|An authentication username which references a unique User.
`Password`|Required|A user's login password (the password used to login to the web portal).

### Result Element Example

~~~ xml
<Result>
  <SessionCreate/>
</Result>
~~~

### Result Element Schema
    
Main module: [SessionCreate.rng](/rng/SessionCreate.rng)

~~~ xml
<%= s = IO.read("static/rng/SessionCreate.rng"); s %>
~~~

## Session Destroy

### Description

Used to destroy an existing session (logout the user).
    
### Authentication

Not required.

### Authorization

This action requires an [Authenticated Session](/WebAPI/#user-authentication).

### Parameters

None.

### Result Element Example

~~~ xml
<Result>
  <SessionDestroy/>
</Result>
~~~

### Result Element Schema
    
Main module: [SessionCreate.rng](/rng/SessionDestroy.rng)

~~~ xml
<%= s = IO.read("static/rng/SessionDestroy.rng"); s %>
~~~
