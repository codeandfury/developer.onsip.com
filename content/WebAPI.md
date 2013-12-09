---
title: OnSIP Web API
---

The OnSIP Web API allows you to automate and/or integrate the administration of your OnSIP account.

# Overview

Any task that can be completed in the OnSIP administrative portal can also be performed via the OnSIP Web API. This includes tasks such as creating a user, retrieving information about an existing user, assigning a voicemail box, adding a phone number, and more. Requests are HTTP GET or HTTP POST, and response formats are (default) XML or JSON. The Web API expects all data to be [UTF-8](http://www.utf-8.com) encoded.

The Web API consists of a set of callable "Actions", most of which require authentication with an administrative account. The credentials needed for authentication are the same as those used to access the OnSIP administrative portal, [admin.onsip.com](https://admin.onsip.com). See [Creating a Session](/WebAPI/Authentication) for an example of how this is done.

If you have any problems or requests please contact [support][].

* TOC
{:toc}


## Hierarchy

The OnSIP Hierarchy:

Account
: Accounts can have an unlimited number of Organizations.

Organization
: An Organization is comprized of a single domain with an unlimited number of Users.

Users 
: A User represents an end user of the platform which is typically making or receiving calls.

## Roles

In most cases, the "Account Administrator" takes on the responsiblity for managing the account (adding users, assigning extensions, setting up ACD Queues, etc.). The Account Administrator role is given by default to the User which created the account. It's not possible to change the Account Administrator user, but it is possible to give other existing users in the account the Account Administror role. Please call support to do this.

Account Administrator
: User with this role can edit their own account, organizations, and users. 

Standard User
: Users which can only edit their own information.

Anonymous User
: This applies to GetOnSIP.com users only. These users have access to a very narrow subset of the API.


## Authentication

Many methods require the user to be logged in. At present there is only one way to accomplish this. Users should request a `SessionId` token by authenticating using the [SessionCreate](Authentication/#sessioncreate) action. The `SessionId` token should then be passed along with each request.


## Request Format

The request format is simply a HTTP GET or a HTTP POST to the URL:

    https://www.jnctn.com/webapi

Every request requires an `Action` parameter to specify the requested action. All actions take a list of named parameters. The parameters and resulting responses for each action are listed on the action's spec page.

For example, to request the Echo action, invoke like this: 

    http://www.jnctn.com/webapi?Action=Echo&Foo=Bar


## XML Response Format

The default response format is in the form of an XML document. The response document contains a single Response element. For example, a call to the [Echo](Test/#echo) action returns this:

~~~ xml
<?xml version="1.0" encoding="UTF-8"?>
<Response xmlns="http://www.jnctn.net/ns/rest/2006-01">
  <Context>
    <Action>
      <IsCompleted>true</IsCompleted>
    </Action>
    <Request>
      <IsValid>true</IsValid>
      <DateTime>2006-12-18T00:36:49-05:00</DateTime>
      <Duration>2</Duration>
      <Parameters>
        <Parameter>
          <Name>Action</Name>
          <Value>Echo</Value>
        </Parameter>
        <Parameter>
          <Name>TestName</Name>
          <Value>TestValue</Value>
        </Parameter>
      </Parameters>
    </Request>
    <Session>
      <IsEstablished>false</IsEstablished>
    </Session>
  </Context>
  <Result>
    <Echo/>
  </Result>
</Response>
~~~

You can see a live example response <a href="https://www.jnctn.com/webapi?Action=Echo&amp;TestName=TestValue">here</a>.

The <a href="http://en.wikipedia.org/wiki/RELAX_NG">RELAX NG</a> schema for the response XML document is located here: <a href="/rng/jnctn.rng">jnctn.rng</a>

### Response Element

The Response element contains a Context element and a Result element.

A <a href="http://en.wikipedia.org/wiki/RELAX_NG">RELAX NG</a> schema module for the Response element is located here: <a href="/rng/Response.rng">Response.rng</a>

#### Context Element

The Context element contains information regarding the action taken, the request processed, and the session.

The Context element is a child of the <a href="response.rest.html">Response element</a> and contains
<ul>
  <li>Action element - containing information about the action taken</li>
  <li>Request element - containing information about the request made</li>
  <li>Session element - containing information about the authenticated session</li>
</ul>

A <a href="http://en.wikipedia.org/wiki/RELAX_NG">RELAX NG</a> schema module for the <a href="context.rest.html">Context element</a> is located here: <a href="/rng/Context.rng">Context.rng</a>

#### Action Element
          
If the requested action completed successfully, the IsCompleted element will be <code>true</code> and the Response element will contain a Result element. Otherwise, the IsCompleted element will be <code>false</code>, the Response element will not contain a Result element, and the Action element may contain an Errors element detailing the reason for the failure. For example,
          
~~~ xml
<Action>
  <IsCompleted>true</IsCompleted>
</Action>
~~~

A RELAX NG schema module for the Action element is located here: <a href="../schema/rng/Action.rng">Action.rng</a>

#### Request Element

If the parameters associated with the requested action validated, the IsValid element will be <code>true</code>. Otherwise, the IsValid element will be <code>false</code> and the Request element may contain an Errors element detailing reasons one or more parameters failed to validate. A request which fails to validate will never be completed. For example,

~~~ xml
<Request>
  <IsValid>true</IsValid>
  <DateTime>2006-12-18T00:36:49-05:00</DateTime>
  <Duration>2</Duration>
  <Parameters>
    <Parameter>
      <Name>Action</Name>
      <Value>Echo</Value>
    </Parameter>
    <Parameter>
      <Name>TestName</Name>
      <Value>TestValue</Value>
    </Parameter>
  </Parameters>
</Request>
~~~

A RELAX NG schema module for the Request element is located here: <a href="/rng/Request.rng">Request.rng</a>

#### Session Element

If an <a href="misc.userauth.html">authenticated session</a> is established, the IsEstablished element will be <code>true</code> and the Session element will contain a SessionId element containing the session token. Otherwise, the IsValid element will be <code>false</code>. For example,

~~~ xml
<Session>
  <IsEstablished>false</IsEstablished>
</Session>
~~~

A RELAX NG schema module for the Session element is located here: <a href="../schema/rng/Session.rng">Session.rng</a>

#### Result Element

The Result element contains information specific to the action taken and is only present if the action completed. Result elements are documented on the action's spec page. Actions are listed on the <a href="./">API index page</a>

A <a href="http://en.wikipedia.org/wiki/RELAX_NG">RELAX NG</a> schema module for the Result element is located here: <a href="/rng/Result.rng">Result.rng</a>.

### Exception Element

If an exception occurs, a document like the following is returned:

~~~ xml
<?xml version="1.0" encoding="UTF-8"?>
<Exception xmlns="http://www.jnctn.net/ns/rest/2006-01">
<![CDATA[
Textual description of the exception.
]]>
</Exception>
~~~

Exceptions should not occur. An Exception indicates an issue with the API. Please email any Exceptions received to support@onsip.com.

A <a href="http://en.wikipedia.org/wiki/RELAX_NG">RELAX NG</a> schema module for the Exception element is located here: <a href="/rng/Exception.rng">Exception.rng</a>


## JSON Response Format

JSON (JavaScript Object Notation) is a lightweight data format based on the object notation of the JavaScript language. 
It does not require JavaScript to read or write; 
it is easy to parse by any language and libraries and tools exist in many languages to handle JSON.

### JSON Format Overview

JSON is a very simple text format based on JavaScript's object notation. 
The notation contains these basic elements:
<ul>
  <li>Objects.  Objects begin and end with braces ({}}.</li>
  <li>Object members. Members consist of strings and values, separated by colon (:). Members are separated by commas.</li>
  <li>Arrays. Arrays begin and end with braces and contain values. Values are separated by commas. </li>
  <li>Values. A value can be a string, a number, an object, an array, or the literals <code>true</code>, <code>false</code>, or <code>null</code>.</li>
  <li>Strings. Strings are surrounded by double quotes and contain Unicode characters or common backslash escapes. </li>
</ul>
For a complete description of JSON and its many uses, we suggest a visit to Douglas Crockford's <a href="http://www.json.org">JSON.org</a>
<p/>

### How to Request JSON Output

<ul>
  <li>To return an API response in JSON format, send a parameter "Output" in the request with a value of "json".</li>
  <li>Optionally, set the parameter "Callback" in the request to specify a callback function.</li>
</ul>

For example, a call to the Echo action returns this:

~~~ json
{
 "Response":{
  "Context":{
   "Action":{
    "IsCompleted":"true"
   },
   "Request":{
    "IsValid":"true",
    "DateTime":"2006-12-27T23:18:16-05:00",
    "Duration":"1",
    "Parameters":{
     "Parameter":[
      {
       "Name":"Action",
       "Value":"Echo"
      },
      {
       "Name":"Output",
       "Value":"json"
      },
      {
       "Name":"TestName",
       "Value":"TestValue"
      }
     ]
    }
   },
   "Session":{
    "IsEstablished":"false"
   }
  },
  "Result":{
   "Echo":{
   }
  }
 }
}
~~~

You can see an example response <a href="/restapi?Action=Echo&amp;TestName=TestValue&amp;Output=json">here</a>.

###Callback Function

The Callback parameter (<code>Callback</code>=<em>function</em>) wraps the JSON output text in parentheses and a function name of your choosing.
<p/>
Callback function names may only use upper and lowercase alphabetic characters (A-Z, a-z), numbers (0-9), the period (.), 
the underscore (_), and brackets ([ and ]). Brackets must be URL-encoded.
<p/>
Results wrapped in callbacks look like this: <code>ws_results( ...json output... );</code>
<p/>
Because JSON output is native JavaScript, you do not have to parse or evaluate the returned object in your callback function. You can immediately access the elements inside it, just as if you had passed an object reference to your ws_result function.
<p/>
Callbacks are particularly useful for use with web service requests in client-side JavaScript. Normally web service requests using the XMLHttpRequest object run afoul of browser security restrictions that prevent files from being loaded across domains. This restriction requires you to proxy your requests on the server side or use server rewrites to trick the browser into thinking the web service data is coming from the same site as your web content.
<p/>
Using JSON and callbacks, you can place the Web API request inside a &lt;script&gt; tag, and operate on the results with a function elsewhere in the JavaScript code on the page. Using this mechanism, the JSON output from the Web API request is loaded when the enclosing web page is loaded. No proxy or server trickery is required.
<p/>
A simple working example is <a href="../clicktocall">Click to Call</a>.
