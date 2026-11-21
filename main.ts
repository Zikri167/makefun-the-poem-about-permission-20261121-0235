import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const poem = `When I was small, I asked for the scissors.
My mother turned them in her palm
and laid them down — handle first.
That is permission:
not the blade withheld,
but the sharp end offered last,
and the cut left mine to make.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), poem, "utf8");
