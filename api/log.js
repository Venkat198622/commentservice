//OPTIONAL Integrate with a proper log tool of your preference

module.exports = content =>
  console.log(content);

module.exports.error = content =>
  console.error(content);

module.exports.info = content =>
  console.info(content);
