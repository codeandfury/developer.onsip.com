---
title: SIP.Session | SIP.js
---
# SIP.Session

The class JIP.Session represents a WebRTC media (audio/video) session. It can be initiated by the local user or by a remote peer.

* TOC
{:toc}

## Instance Attributes

### `direction`

String indicating who started the session. Possible values are ‘incoming’ when the session is started by the remote peer or ‘outgoing’ when the session is started by the local user.

### `local_identity`

JsSIP.NameAddrHeader instance indicating the local identity. It corresponds with the INVITE From header value when the direction is ‘outgoing’, and with the To header value when the direction is ‘incoming’

### `remote_identity`

JsSIP.NameAddrHeader instance indicating the remote identity. It corresponds with the INVITE To header value when the direction is ‘outgoing’, and with the From header value when the direction is ‘incoming’

### `start_time`

Date object indicating the time when the session started. Takes its value at the moment when started event was fired.

### `end_time`

Date object indicating the time when the session ended. Takes its value at the moment when ended event was fired.

### `data`

Custom session empty Object for application usage. The developer can add here custom attribute/value pairs.


## Instance Methods


### `answer(options)`

Answer the incoming session. This method is available for incoming sessions only.

#### Parameters

Name | Type | Description 
-----|------|--------------
`options`|`Object`|Optional `Object` with extra parameters (see below).

#### Fields in <code>options</code> Object

Name | Type | Description 
-----|------|--------------
`mediaConstraints`|`Object`|`Object` with two valid fields (`audio` and `video`) indicating whether the session is intended to use audio and/or video and the constraints to be used. Default value is both `audio` and `video` set to `true`.
`mediaStream`|`MediaStream`|`MediaStream` to transmit to the other end.

#### Throws

INVALID_STATE_ERROR


### `terminate(options)`

Terminate the current session regardless its direction or state.

Depending on the state of the session, this function may send a CANCEL request, a non-2xx final response, a BYE request, or even no request.

For incoming sessions, if the user has not answered the incoming INVITE, this function sends the non-2xx final response with the optionally specified status code and reason phrase. `480 Unavailvable` is default response.

For outgoing sessions, if the original INVITE has not been already sent, it will never be sent. If the original INVITE has not been answered with a final response, the behavior depends on whether provisional response has been received. If provisional response has been received, a CANCEL request will be sent. If no provisional response has been received, the function will not send a CANCEL as per [RFC 3261](http://tools.ietf.org/html/rfc3261). If then a provisional response is received, the CANCEL request will be automatically sent.

For both incoming and outgoing, if the INVITE session has been answered with final response, a BYE request will be sent.

#### Parameters

Name | Type | Description 
-----|------|--------------
`options`|`Object`|Optional `Object` with extra parameters (see below).

#### Fields in <code>options</code> Object

Name | Type | Description 
-----|------|--------------
`statusCode`|`Number`|`Number` between 300 and 699 representing the SIP response code.
`reasonPhrase`|`String`|`String` representing the SIP reason phrase.

NOTE: When generating a CANCEL, statusCode can take values from 200 to 699. The statusCode and reasonPhrase will form a Reason header field as specified in RFC3326. A CANCEL will not take the extraHeaders parameter nor the body paramter.

#### Throws

INVALID_STATE_ERROR


### `getLocalStreams()`

Returns a sequence of MediaStream objects representing the streams that are currently sent in this RTCSession.


### `getRemoteLocalStreams()`

Returns a sequence of MediaStream objects representing the streams that are currently received in this RTCSession.


### `sendDTMF(tone, options=null)`

Send one or multiple DTMF tones making use of SIP INFO method.

#### Parameters

Name | Type | Description 
-----|------|--------------
`tone`|`String` or `Number`|One or multiple valid DTMF symbols.
`options`|`Object`|Optional `Object` with extra parameters (see below).

#### Fields in <code>options</code> Object

Name | Type | Description 
-----|------|--------------
`duration`|`Number`|Positive decimal value indicating the duration of the tone expressed in milliseconds. Default value is 100.
`interToneGap`|`Number`|Positive decimal value indicating the interval between two tones expressed in milliseconds. Default value is 500.
`extraHeaders`|`Array`|Optional `Array` of `Strings` with extra SIP headers for each INFO request.

#### Throws

INVALID_STATE_ERROR

#### Example 1

~~~ javascript
call.sendDTMF(1);
call.sendDTMF(4);
~~~

#### Example 2

~~~ javascript
var tones = '1234#';

var extraHeaders = [ 'X-Foo: foo', 'X-Bar: bar' ];

var options = {
  'duration': 160,
  'interToneGap': 1200,
  'extraHeaders': extraHeaders
};

call.sendDTMF(tones, options);
~~~


## Events

`JsSIP.Session` class defines a series of events. Each of them allows callback functions registration in order to let the user execute a handler for each given stimulus.

Every event handler is executed with a [SIP.Event](/SIPjs/event/) instance as the only argument.

### `progress`

Fired when receiving or generating a 1XX SIP class response (>100) to the INVITE request.

#### Event `data` fields

Name | Type | Description 
-----|------|--------------
`originator`|`String`|`local` or `remote`
`response`|`Object`|[`JsSIP.IncomingResponse`](/SIPjs/incomingResponse/) instance of the received SIP 1XX response.

### `started`

Fired when the call is answered.

#### Event `data` fields

Name | Type | Description 
-----|------|--------------
`originator`|`String`|`local` or `remote`
`response`|`Object`|[`JsSIP.IncomingResponse`](/SIPjs/incomingResponse/) instance of the received SIP 1XX response.

### `ended`

Fired when an established call ends.

#### Event `data` fields

Name | Type | Description 
-----|------|--------------
`originator`|`String`|`local` or `remote`
`response`|`Object`|[`JsSIP.IncomingResponse`](/SIPjs/incomingResponse/) instance of the received SIP 1XX response.
`cause`||One value of Failure and End Causes

### `failed`

Fired when the session was unable to establish.

#### Event `data` fields

Name | Type | Description 
-----|------|--------------
`originator`|`String`|`local` or `remote`
`response`|`Object`|[`JsSIP.IncomingResponse`](/SIPjs/incomingResponse/) instance of the received SIP 1XX response.
`cause`||One value of Failure and End Causes

### `newDTMF`

Fired for an incoming or outgoing DTMF.

Name | Type | Description 
-----|------|--------------
`originator`|`String`|`local` or `remote`
`dtmf`|`Object`|[`JsSIP.Session.DTMF`](/SIPjs/session/dtmf/) instance.
`request`|`Object`|[`JsSIP.IncomingRequest`](/SIPjs/incomingRequest/) instance of the received SIP INFO request.
