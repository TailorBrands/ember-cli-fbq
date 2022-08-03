# Ember-cli-fbq [![Ember Observer Score](https://emberobserver.com/badges/ember-cli-fbq.svg)](https://emberobserver.com/addons/ember-cli-fbq)

This ember-cli addon injects facebook pixel into index.html.

## Installation

`ember install ember-cli-fbq`

## Configuration

This plugin uses the ember-cli project's configuration as defined in `config/environment.js`.

Add your heap projectId to `config/environment.js` and you're good to go.

Starting from version 3.0.0 we now support multiple pixel ids:
```js
// environment.js

    ENV.fbq = {
        enabled: true,
        ids: ['xxxxxxxxxxxxxxx', 'yyyyyyyyyyyyyyy']
    }
```

Before version 3.0.0:
```js
// environment.js

    ENV.fbq = {
        enabled: true,
        id: 'xxxxxxxxxxxxxxx'
    }
```

## Disabling per environment

You can disable injecting heap into different environments by setting the
development param to true:

```js
// environment.js

if (environment === 'test') {
  ENV.fbq = {
    enabled: false
  }
}
```

## Disclaimer

This is completely unofficial and is not related to Facebook in any way.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## About Tailor Brands
[Check us out!](https://www.tailorbrands.com)
