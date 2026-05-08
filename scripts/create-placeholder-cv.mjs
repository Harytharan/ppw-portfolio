/**
 * Generates a minimal valid single-page PDF at public/cv/CV.pdf
 * Run from project root: node scripts/create-placeholder-cv.mjs
 *
 * (Included because empty PDFs may not open in some viewers.)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, "..", "public", "cv", "CV.pdf");

/* Minimal PDF — magic %PDF-1.4 */
const pdf = Buffer.from(
  [
    "255044462d312e340a312030206f626a0a3c3c2f547970652f436174616c6f672f50616765732032203020523e3e0a656e646f626a0a322030206f626a0a3c3c2f547970652f50616765732f4b6964735b33203020525d2f436f756e7420313e3e0a656e646f626a0a332030206f626a0a3c3c2f547970652f506167652f506172656e742032203020522f4d65646961426f785b30203020363132203739325d3e3e0a656e646f626a0a787265660a3020340a303030303030303030302036353533352066200a303030303030303939203030303030206e200a303030303030313438203030303030206e200a303030303030323334203030303030206e200a747261696c65720a3c3c2f53697a6520342f526f6f742031203020523e3e0a7374617274787265660a3235330a2525454f46",
  ].join(""),
  "hex",
);

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, pdf);
console.log("Wrote", out);
