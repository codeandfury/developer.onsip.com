---
title: Authentication | Web API
---

# Authentication

* TOC
{:toc}


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
