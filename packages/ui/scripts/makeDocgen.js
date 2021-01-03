var fs = require("fs-extra");
var generateMarkdown = require("./generateMarkdown");
var path = require("path");

function buildDocs(filepath) {
  // api is an object keyed by filepath. We use the file name as component name.
  var name = getComponentName(filepath);
  var markdown = generateMarkdown(name, filepath);
  console.log(
    'filepath.replace(name + ".tsx", name + ".md")',
    filepath.replace(name + ".tsx", name + ".md")
  );
  fs.outputFile(
    filepath.replace(name + ".json", name + ".md"),
    markdown,
    console.log
  );
}

function getComponentName(filepath) {
  var name = path.basename(filepath);
  // check for index.js
  if (name === "index.js") {
    const dirs = path.dirname(filepath).split("/");
    name = dirs[dirs.length - 1];
  }
  var ext;
  while ((ext = path.extname(name))) {
    name = name.substring(0, name.length - ext.length);
  }
  return name;
}
module.exports = {
  buildDocs,
};
