const fs = require("fs-extra");
const path = require("path");
const reactDocs = require("react-docgen-typescript");
const watch = require("glob-watcher");
const glob = require("glob");
// var reactDocs = require("react-docgen");

// The React components to load
const componentFolder = "../ui/src/**/*.tsx";
const options = {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  // shouldRemoveUndefinedFromOptional: true,
  skipPropsWithoutDoc: true,
  shouldExtractValuesFromUnion: true,
  propFilter: (prop, component) => {
    if (!prop.parent) {
      return true;
    }

    return !prop.parent.fileName.includes("node_modules");
  },
};

/**
 * Use React-Docgen to parse the loaded component
 * into JS object of props, comments
 *
 * @param {File} component
 * @param {String} filename
 */
async function parseComponent(filename) {
  // console.log("filename", filename);
  // await fs.readFile(filename, { encoding: "utf-8" }, function(err, content) {
  //   if (err) {
  //     console.log("err", err);
  //     return err;
  //   }
  //   var componentInfo = reactDocs.parse(String(content));
  //   console.log("componentInfo", componentInfo);
  // });
  // return;
  let componentInfo = await reactDocs
    .withCompilerOptions(
      {
        esModuleInterop: true,
        noEmit: true,
        noEmitHelpers: true,
        noEmitOnError: true,
        strict: false,
      },
      options
    )
    .parse(filename);
  componentInfo =
    Array.isArray(componentInfo) && componentInfo.length > 0
      ? componentInfo[0]
      : { description: "", props: [], methods: [] };
  const splitFile = filename.split("/src/");
  const filePath = path.resolve(__dirname, `../public/Props/${splitFile[1]}`);
  const shortname = filePath
    .split("/")
    .pop()
    .split(".")[0];
  componentInfo.filename = shortname;

  await fs.outputJson(
    filePath.replace(".tsx", ".json"),
    componentInfo,
    (err) => {
      if (err) return;
      // buildDocs(filePath.replace(".tsx", ".json"));
    }
  );
}

const watcher = watch([componentFolder]);

const parserFunc = function(files, stat) {
  Promise.all(
    (Array.isArray(files) ? files : stat || []).map((i) => parseComponent(i))
  );
};
glob(componentFolder, parserFunc);
watcher.on("change", parserFunc);
watcher.on("add", parserFunc);

// /**
//  * Explores recursively a directory and returns all the filepaths and folderpaths in the callback.
//  *
//  * @see http://stackoverflow.com/a/5827895/4241030
//  * @param {String} dir
//  * @param {Function} done
//  */
// function filewalker(dir, done) {
//   let results = [];

//   fs.readdir(dir, async (err, list) => {
//     if (err) return done(err);

//     let pending = list.length;
//     if (!pending) return done(null, results);

//     list.forEach((file) => {
//       file = path.resolve(dir, file);
//       fs.stat(file, async (err, stat) => {
//         // If directory, execute a recursive call
//         if (stat && stat.isDirectory()) {
//           filewalker(file, (err, res) => {
//             results = results.concat(res);
//             if (!--pending) done(null, results);
//           });
//         } else {
//           // Check if is a Javascript file
//           // And not a story or test
//           if (
//             file !==
//               "/Users/devloops/Desktop/maple/maple-ui/packages/ui/src/index.tsx" &&
//             file.endsWith(".tsx")
//           ) {
//             await parseComponent(file);
//             await results.push(file);
//           }
//           if (!--pending) done(null, results);
//         }
//       });
//     });
//   });
// }

// filewalker(componentFolder, (err, data) => {
//   if (err) {
//     throw err;
//   }
//   // console.log("data", data);
// });
