---
title: Miscellaneous | Web API
---

# Miscellaneous Actions

* TOC
{:toc}


## Echo

### Description

An action which echoes all paramaters back in the response.
    
### Authentication

Not required.

### Authorization

Not required.

### Parameters

None

### Result Element Example

~~~ xml
<Result>
  <Echo/>
</Result>
~~~

### Result Element Schema

Main module: [Echo.rng](/rng/Echo.rng)

~~~ xml
<%= s = IO.read("static/rng/Echo.rng"); s %>
~~~


## NOOP

### Description

An action which does nothing.
    
### Authentication

Not required.

### Authorization

Not required.

### Parameters

None

### Result Element Example

~~~ xml
<Result>
  <NoOp/>
</Result>
~~~

### Result Element Schema
    
Main module: [NoOp.rng](/rng/NoOp.rng)

~~~ xml
<%= s = IO.read("static/rng/NoOp.rng"); s %>
~~~

