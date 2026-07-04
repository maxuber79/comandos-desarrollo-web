/* ============================================================
   scripts/copy-vendor.js
   Copia Bootstrap y Bootstrap-Icons desde node_modules a assets/vendor
   para que GitHub Pages sirva todo de forma estática (sin CDN).
   Ejecutar con: npm run copy:vendor
   ============================================================ */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'node_modules');
const dst = path.join(root, 'assets', 'vendor');

const targets = [
  {
    from: path.join(src, 'bootstrap', 'dist', 'css', 'bootstrap.min.css'),
    to: path.join(dst, 'css', 'bootstrap.min.css')
  },
  {
    from: path.join(src, 'bootstrap', 'dist', 'js', 'bootstrap.bundle.min.js'),
    to: path.join(dst, 'js', 'bootstrap.bundle.min.js')
  },
  {
    from: path.join(src, 'bootstrap-icons', 'font', 'fonts'),
    to: path.join(dst, 'css', 'fonts')
  },
  {
    from: path.join(src, 'bootstrap-icons', 'font', 'bootstrap-icons.min.css'),
    to: path.join(dst, 'css', 'bootstrap-icons.min.css')
  }
];

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function copyFile(from, to) {
  if (!fs.existsSync(from)) {
    console.warn(`⚠️  No existe: ${from}\n   ¿Ejecutaste "npm install"?`);
    return false;
  }
  ensureDir(path.dirname(to));
  fs.copyFileSync(from, to);
  console.log(`✔ ${path.relative(root, from)}  →  ${path.relative(root, to)}`);
  return true;
}

function copyDir(from, to) {
  if (!fs.existsSync(from)) return false;
  ensureDir(to);
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const srcPath = path.join(from, entry.name);
    const dstPath = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(srcPath, dstPath);
    else copyFile(srcPath, dstPath);
  }
  return true;
}

let ok = true;
for (const t of targets) {
  const statExists = fs.existsSync(t.from);
  if (!statExists) { ok = false; continue; }

  if (fs.statSync(t.from).isDirectory()) copyDir(t.from, t.to);
  else if (!copyFile(t.from, t.to)) ok = false;
}

if (!ok) {
  console.error('\n❌ Faltan archivos. Ejecuta primero:  npm install');
  process.exit(1);
}
console.log('\n✅ Vendor copiado correctamente a /assets/vendor');
