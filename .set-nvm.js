import fs from "fs";
import shell from "shelljs";

fs.readFile("./.nvmrc", "utf8", (err, content) => {
  if (err) {
    console.error(err);
    return;
  }

  const rgxPattern = /[0-9]+(\.[0-9]+)*/g;

  const nv = content.match(rgxPattern)[0];

  const currentVersion = shell.exec("node --version", { silent: true }).stdout;
  const cv = currentVersion.match(rgxPattern)[0];

  if (cv != nv) {
    console.log(`Switch from ${cv} to ${nv}`);
    shell.exec(`nvm use ${nv}`);
  } else {
    console.log(`Already using: ${currentVersion}`);
  }
});
