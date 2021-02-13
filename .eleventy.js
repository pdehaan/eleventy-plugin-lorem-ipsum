const { loremIpsum } = require("lorem-ipsum");

module.exports = (eleventyConfig, defaultOpts = {}) => {
  const fn = lipsumFn(defaultOpts);
  eleventyConfig.addShortcode("lipsum", fn);
  eleventyConfig.addShortcode("lorem-ipsum", fn);
};

function lipsumFn(defaultOpts = {}) {
  return (count = 1, units = "paragraphs", format = "html") => {
    const lipsumOpts = Object.assign({}, defaultOpts, { count, units, format });
    return loremIpsum(lipsumOpts);
  };
}
