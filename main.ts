// The Funniest Excuse for Skipping a Meeting — Round 3 (FINAL)
// One-line excuse. Deterministic: no Date, no random, no wall-clock.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I asked if this meeting could be an email. It said yes, then scheduled a follow-up meeting to discuss it.";

const OUTPUT_PATH = "output/entry.txt";

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 chars, got ${EXCUSE.length}`);
}

if (EXCUSE !== EXCUSE.trim() || /[\n\r\t]/.test(EXCUSE)) {
  throw new Error("excuse must be a single line with no surrounding whitespace");
}

mkdirSync("output", { recursive: true });
writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");
