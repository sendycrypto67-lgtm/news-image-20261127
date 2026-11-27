// SPDX-License-Identifier: MIT
// news-image-20261127: one image summing up Friday 27 November 2026.
// Node 22, standard library only, no network. The image is entry.png
// beside this file (JPEG bytes, named entry.png as the rules require);
// the program copies it unchanged to the output directory.
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Two runs write byte-identical output.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
