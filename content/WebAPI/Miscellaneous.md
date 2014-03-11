---
title: Miscellaneous | Web API
---

# Miscellaneous Actions

## Echo

An action which echoes all paramaters back in the response.
    
### Authentication & Authorization

Not required.

### Request Parameters

None

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [Echo.rng](/rng/Echo.rng)

### Examples

~~~ xml
<Result>
  <Echo/>
</Result>
~~~


## NOOP

An action which does nothing.
    
### Authentication & Authorization

Not required.

### Request Parameters

None

### Response Format

Modules | [Relax NG](http://relaxng.org) Schema Files
-|-
Main | [NoOp.rng](/rng/NoOp.rng)

### Examples

~~~ xml
<Result>
  <NoOp/>
</Result>
~~~

