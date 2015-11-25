[![Build Status](https://api.travis-ci.org/sbstnmsch/sebastian-misch.de.svg?branch=master)](https://travis-ci.org/sbstnmsch/sebastian-misch.de)

# My personal website
live at http://sebastian-misch.de - feel free to use for your own.

```
$ npm install
$ nginxere # available at https://github.com/sbstnmsch/nginxere
           # or just serve ./dist with your favorite webserver
```

## Development
To watch your sources and rebuild automatically type:
```
$ npm start
```
Open http://localhost:3000 with your favorite browser.

## Production builds and CDNs
If you love to use a CDN for your assets just configure one and build site with:
```
$ CDN=http://mycdnzone.cdnprovider.com grunt
```
All JS and CSS will be served by CDN.
That's all to it.
