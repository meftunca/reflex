const extract = require("remark-extract-frontmatter");
const frontmatter = require("remark-frontmatter");
const compiler = require("remark-stringify");
const report = require("vfile-reporter");
const parser = require("remark-parse");
const { readSync } = require("to-vfile");
const unified = require("remark");
const yaml = require("yaml").parse;
const glob = require("glob");
const fs = require("fs-extra");
const groupby = require("lodash/groupBy");
const watch = require("glob-watcher");
const yamlParser = require("./yamlParser");

function logger() {
  return console.dir;
}
const parseFile = async (filePath, push) => {
  const file = await readSync(filePath);

  const contents = await unified()
    // .use(parser)
    .use(compiler)
    .use(frontmatter, ["yaml"])
    .use(extract, { yaml: yaml })
    // .use(logger)
    .process(file, function(err, file) {
      push({
        ...file.data,
        cwd: file.cwd,
        filePath: filePath.replace("src/", "./"),
      });
    });
};
const watcher = watch(["src/Pages/**/*.mdx"]);
const parseFunc = function(files, stat) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.

  files = Array.isArray(files)
    ? files
    : Array.isArray(stat)
    ? stat
    : typeof files === "string"
    ? [files]
    : [];
  const meta = [];
  Promise.all(
    files.map((file) => {
      return parseFile(file, (path) => meta.push(path));
    })
  ).then(() => {
    let parseMeta = groupby(
      meta.filter((i) => i?.route),
      (r) => r.menu
    );
    parseMeta = Object.entries(parseMeta)
      .map(([menuName, menu]) => {
        if (menuName === "undefined") return menu;
        return [{ name: menuName, menu }];
      })
      .flat();
    fs.writeJson(
      //   "./public/documentation-paths.json",
      "./src/docz/components/Sidebar/routes.json",
      parseMeta,
      function(err) {
        if (err) console.log(err);
      }
    );

    const RouteJS = `
import { lazy} from "react";
export default  {
  ${parseMeta
    ?.map(({ route, filePath, menu }) => {
      if (!menu) {
        return `"${route}": lazy(() => import("${filePath}"))`;
      } else {
        return menu
          .map(
            ({ route, filePath }) =>
              `"${route}": lazy(() => import("${filePath}"))`
          )
          .join(",");
      }
    })
    .join(",")},
     }
      `
      .replace(/(\s|\r|\n)/gim, "")
      .replace("exportdefault", "export default");

    fs.writeFile("./src/Router.js", RouteJS, console.log);
    console.timeEnd("Create");
  });
};
glob("src/Pages/**/*.mdx", parseFunc);
// // watcher.on("change", parseFunc);
watcher.on("change", () => glob("src/Pages/**/*.mdx", parseFunc));
watcher.on("add", () => glob("src/Pages/**/*.mdx", parseFunc));
