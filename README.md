## Slowwly

#### A test service to mock a slow http response.

[![Build Status](https://travis-ci.org/rob-murray/slowwly.svg)](https://travis-ci.org/rob-murray/slowwly)
[![Dependency Status](https://gemnasium.com/rob-murray/slowwly.svg)](https://gemnasium.com/rob-murray/slowwly)


### Description

A test service to mock a slow api response - simply prepend your **Slowwly** URL with delay configuration to your usual API URL and make a request, the response will be delayed.

This can be used to simulate timeouts so that you can see how your application responds with slow API requests or if it fails where you expect it to fail.

There are other services doing this but **Slowwly** will respond to `POST` requests as well as `GET`.

Example URL with request delayed by 2 seconds - `http://localhost:9292/delay/2000/url/http://google.co.uk`

#### Try it out

**Slowwly** is deployed on @[http://slowwly.robertomurray.co.uk/](http://slowwly.robertomurray.co.uk/) so go ahead and use it or run locally.

Example URL with request delayed by 2.5 seconds - `http://slowwly.robertomurray.co.uk/delay/2500/url/http://google.co.uk`

#### Mantra

This project aims to;

* Provide delayed response for at least `GET` and `POST` requests
* Not intefere too much with calling code making the request. We don't want users to have to modify request params to use this, editing code just to test something is a pain - the request host or URL should be the minimum required change to use this.
* Return redirect after delay; It is useful to actually see how you code works with the real response returned after a delay. Note: obviously requires clients to follow redirects ;)


### Getting started

It's a simple Rack app so you can run it anywhere;

```bash
$ git clone git@github.com:rob-murray/slowwly.git
$ cd slowwly
$ rackup
```

Feel free to run it anywhere you need or use the existing deployed service [here](http://slowwly.robertomurray.co.uk/).


### API

#### Request

Build a URL with the following params:

```bash
http://{host}/delay/{delay_time}/url/{url}
```

<dl>
    <dt><code>host</code></dt>
    <dd>The host where this app is running</dd>
    <dt><code>delay_time</code></dt>
    <dd>Time to delay response in milliseconds</dd>
    <dt><code>url</code></dt>
    <dd>The URL to redirect to via response</dd>
</dl>

#### Response

**Slowwly** responds to the following HTTP methods as below;

<dl>
    <dt>GET</dt>
    <dd>Responds with HTTP<code>302</code></dd>
    <dt>POST</dt>
    <dd>Responds with HTTP<code>307</code></dd>
</dl>

#### Examples

```bash
# a simple get request with 1 second delay
$ curl -i http://localhost:9292/delay/1000/url/http://google.co.uk
HTTP/1.1 302 Found
Content-Type: text/html;charset=utf-8
Location: http://google.co.uk
Content-Length: 0
# etc

# a post request with some data and a 3 second delay
$ curl -i --data "param1=value1" http://localhost:9292/delay/3000/url/http://myapi.com/endpoint
HTTP/1.1 307 Temporary Redirect
Content-Type: text/html;charset=utf-8
Location: http://myapi.com/endpoint
Content-Length: 0
# etc
```


### Contributions

Please use the GitHub pull-request mechanism to submit contributions.


### License

This project is available for use under the MIT software license.
See LICENSE
