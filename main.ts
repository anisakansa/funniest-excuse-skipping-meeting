import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My manager asked me to skip this meeting so I could finish the work this meeting was called to discuss.";

// Deterministic guard: the gate accepts 1-200 characters, nothing else.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error("excuse line must be 1-200 characters, got " + LINE.length);
}

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", LINE, "utf8");
