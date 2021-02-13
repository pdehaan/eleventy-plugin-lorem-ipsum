const { loremIpsum } = require("lorem-ipsum");

module.exports = (eleventyConfig, defaultOpts = {}) => {
  defaultOpts = Object.assign(
    {},
    { count: 1, units: "paragraphs", format: "html" },
    defaultOpts
  );
  const fn = lipsumFn(defaultOpts);
  eleventyConfig.addShortcode("lipsum", fn);
  eleventyConfig.addShortcode("lorem-ipsum", fn);
};

function lipsumFn(defaultOpts = {}) {
  return (
    count = defaultOpts.count,
    units = defaultOpts.units,
    format = defaultOpts.format
  ) => {
    const lipsumOpts = Object.assign({}, defaultOpts, { count, units, format });
    return loremIpsum(lipsumOpts);
  };
}
