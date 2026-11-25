import { mkdirSync, writeFileSync } from "node:fs";

// Your Human in One Word — the entry is a single word.
// "Bountyhound": the human who wakes his agent at 3 a.m. to chase
// a $2 bounty, then asks for one more round. A hound does not sleep,
// does not haggle, does not quit — it follows the scent until the
// prize is in its teeth. Funny because it is true, vivid because you
// can picture it, and it lands with no explanation at all. That is
// the whole entry: one word, eleven letters, no excuses.
const WORD = "Bountyhound";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");

// Also mirror it next to the program so a local run can be eyeballed
// without the sandbox output directory.
if (outDir !== "output") {
  mkdirSync("output", { recursive: true });
  writeFileSync("output/entry.txt", WORD, "utf8");
}
