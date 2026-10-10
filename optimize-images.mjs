// Optimizador de imágenes: convierte PNG/JPG/JPEG a WebP y borra originales.
// Mantiene los nombres cambiando solo la extensión.
import { readdir, stat, unlink, rename } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const ROOT = "public/images";
const QUALITY = 80;
const EXTS = new Set([".png", ".jpg", ".jpeg"]);

let totalBefore = 0;
let totalAfter = 0;
const converted = [];
const skipped = [];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (!EXTS.has(ext)) continue;
      const before = (await stat(full)).size;
      totalBefore += before;
      const outName = basename(entry.name, ext) + ".webp";
      const outPath = join(dir, outName);
      try {
        const beforeImg = sharp(full);
        const meta = await beforeImg.metadata();
        await beforeImg
          .webp({ quality: QUALITY, effort: 4 })
          .toFile(outPath);
        const after = (await stat(outPath)).size;
        totalAfter += after;
        await unlink(full);
        converted.push({
          from: entry.name,
          to: outName,
          before,
          after,
          format: meta.format,
        });
      } catch (err) {
        skipped.push({ file: entry.name, error: String(err) });
      }
    }
  }
}

await walk(ROOT);

converted.sort((a, b) => b.before - a.before);
console.log("\n=== RESULTADO ===");
console.log(`Archivos convertidos: ${converted.length}`);
console.log(`Antes:    ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
console.log(`Ahora:    ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
const saved = totalBefore - totalAfter;
const pct = ((saved / totalBefore) * 100).toFixed(1);
console.log(`Ahorro:   ${(saved / 1024 / 1024).toFixed(2)} MB (${pct}%)`);
console.log("\nTop 10 mayor ahorro:");
for (const c of converted.slice(0, 10)) {
  const kb = (c.before / 1024).toFixed(0);
  const kbAfter = (c.after / 1024).toFixed(0);
  console.log(
    `  ${c.from.padEnd(28)} ${kb.padStart(7)} KB -> ${kbAfter.padStart(7)} KB`
  );
}
if (skipped.length) {
  console.log("\nSaltados:");
  for (const s of skipped) console.log(`  ${s.file}: ${s.error}`);
}
