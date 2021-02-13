# eleventy-plugin-lorem-ipsum

> Lorem ipsum placeholder text for Eleventy.

**NOTE:** This is basically just a wrapper around the [**lorem-ipsum**](https://www.npmjs.com/package/lorem-ipsum) npm module.

## INSTALLATION

```sh
npm install github:pdehaan/eleventy-plugin-lorem-ipsum -D
```

## SETUP

```js
const lipsum = require("eleventy-plugin-lorem-ipsum");

module.exports = (eleventyConfig) => {
  // DEFAULT PLUGIN OPTIONS:
  // { count: 1, units: "paragraphs", format: "html" },
  eleventyConfig.addPlugin(lipsum);

  return {
    // ...
  };
};
```

If you want to override the default plugin options, you can pass an object as the second parameter for `.addPlugin()`, as seen below:

```js
eleventyConfig.addPlugin(lipsum, {
  // CUSTOM PLUGIN OPTIONS
  count: 4,
  units: "paragraphs",
  format: "html",
});
```

## USAGE

```liquid
<h2>"lorem-ipsum" shortcode (default options)</h2>
{% lorem-ipsum %}

<h2>"lipsum" alias (default options)</h2>
{% lipsum %}

<h2>custom `count` argument</h2>
{% lipsum 3 %}

<h2>custom `count` and `units` arguments</h2>
{% lipsum 6, "sentences" %}

<h2>custom `count`, `units`, and `format` arguments</h2>
{% lipsum 5, "words", "plain" %}
```
