// The One-Sentence Apology Your Agent Owes You
// Writes the single-sentence apology from the committed entry.txt
// artifact to /output/entry.txt. No network, no build-time tools,
// no dependencies — only Node's standard library.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${line.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
