## Slowwly

#### A test service to mock a slow http response.


### Description

A test service to mock a slow api response - simply prepend your **Slowwly** URL with delay configuration to your usual API URL and make a request, the response will be delayed.

This can be used to simulate timeouts so that you can see how your application responds with slow API requests or if it fails where you expect it to fail.

There are other services doing this but **Slowwly** will respond to `POST` requests as well as `GET`. 

### Getting started

It's a simple Rack app so you can run it anywhere;

```bash
$ git clone git@github.com:rob-murray/slowwly.git
$ cd slowwly
$ rackup
```

Feel free to run it anywhere you need.

### API

#### Request

Build a URL with the following params:

```
http://{host}/delay/{delay_time}/{url}
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

### Contributions

Please use the GitHub pull-request mechanism to submit contributions.

### License

This project is available for use under the MIT software license.
See LICENSE
