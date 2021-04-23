const glob = require("glob");
const fs = require("fs-extra");
const groupby = require("lodash/groupBy");
const watch = require("glob-watcher");
const slug = require("remark-slug");
const remark2rehype = require("remark-rehype");
const matter = require("gray-matter");

function logger() {
  return console.dir;
}

const parseFile = (filePath) => {
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(filePath, "utf-8", function(err, file) {
        if (err) {
          console.error("Error: ", err);
          reject(error);
        }
        const { content, data } = matter(file);

        resolve({
          ...data,
          content,
          cwd: file.cwd,
          filePath: filePath.replace("src/", "./"),
        });
      });
    } catch (error) {
      reject(error);
    }
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
  Promise.all(
    files.map((file) => {
      return parseFile(file, (path) => meta.push(path));
    })
  ).then((meta) => {
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
          .join(",\n");
      }
    })
    .join(",\n")},
     }
      `;

    fs.writeFile("./src/Router.js", RouteJS, console.log);
  });
};
glob("src/Pages/**/*.mdx", parseFunc);
// // watcher.on("change", parseFunc);
watcher.on("change", () => glob("src/Pages/**/*.mdx", parseFunc));
watcher.on("add", () => glob("src/Pages/**/*.mdx", parseFunc));
