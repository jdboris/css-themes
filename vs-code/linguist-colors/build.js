import { parse, stringify } from "yaml";
import fs from "fs";

fs.writeFileSync(
  "./linguist-colors/colors.scss",
  `
$colors: (
${Object.entries(
  Object.entries(
    parse(
      await (
        await fetch(
          "https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml"
        )
      ).text()
    )
  ).reduce((total, [language, object]) => {
    // If color is falsy or the language starts with a number...
    if (!object.color || language.match(/^\d/)) {
      // ...skip.
      return total;
    }

    // Overwrite any duplicates
    return {
      ...total,
      [language.toLocaleLowerCase().replace(/[^a-zA-Z0-9-_]/g, "-")]: object,
    };
  }, {})
)
  .map(([language, { color }]) => `\t\"${language}\": ${color},`)
  .join("\n")}
);`
);
