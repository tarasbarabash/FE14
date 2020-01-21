import glob from "glob-promise";
import ejs from "ejs";
import fs from "fs";

(async () => {
  const files = await glob(
    "*/task-*/!(node_modules|src){index.html,/**/index.html}"
  );
  const rendered = await ejs.renderFile("./.common/index.ejs", {
    files: files.map(i => i.split("/"))
  });
  fs.writeFileSync("./index.html", rendered);
})();
