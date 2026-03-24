<div align="center">

# 🧠 INSTALACIONES DE PROGRAMAS DE DESARROLLO

**Guía de configuración base para entornos web modernos (Angular, TypeScript, Firebase, NestJS, etc.)**

</div>

---

## 📚 ÍNDICE

1. [GIT](#git)
2. [NODE JS y NPM](#node-js-y-npm)
3. [TYPESCRIPT](#typescript)
4. [ANGULAR CLI](#angular-cli)
5. [NESTJS](#nestjs)
6. [ANGULARFIRE (Firebase + Angular)](#angularfire-firebase--angular)
7. [VITE](#vite)
8. [COMANDOS ÚTILES](#comandos-útiles)

---

## 🧩 GIT

📖 **Página oficial:** [git-scm.com](https://git-scm.com/)  
📘 **Tutorial recomendado:** [Bluuweb - Tutorial GitHub](https://bluuweb.github.io/tutorial-github/)

### Configuración global inicial

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

### Ver versión

```bash
git --version
git -v
```

### Actualizar Git en Windows

```bash
git update-git-for-windows
```

### Comandos básicos

```bash
git init
git add .
git commit -m "primer commit"
git remote add origin [URL repositorio]
git push origin main
```

### Gestión de ramas

```bash
git branch [nombre-rama]
git checkout -b [nombre-rama]
git merge [nombre-rama]
git branch -d [nombre-rama]
git push origin --delete [nombre-rama]
```

### Claves SSH

```bash
ssh-keygen
cat C:\Users\[usuario]\.ssh\id_rsa.pub
```

---

## ⚙️ NODE JS y NPM

📘 [Descargar Node.js (LTS)](https://nodejs.org/en/)  
💡 NPM viene incluido con Node.js.

### Ver versiones

```bash
node -v
npm -v
```

### Actualizar NPM globalmente

```bash
npm install -g npm@latest
```

### Usar NVM para gestionar versiones de Node

📦 [nvm-windows](https://github.com/coreybutler/nvm-windows)

```bash
nvm install --lts
nvm use 18.14.1
nvm ls
```

---

## 💬 TYPESCRIPT

📘 [typescriptlang.org](https://www.typescriptlang.org/es/)

### Instalar y verificar

```bash
npm install -g typescript
tsc -v
```

### Comandos útiles

```bash
tsc --init   # crear tsconfig.json
tsc -w       # modo observador
```

---

## 🅰️ ANGULAR CLI

📘 [angular.io](https://angular.io/)

### Instalación global

```bash
npm install -g @angular/cli
```

### Verificar versión

```bash
ng version
```

### Actualizar Angular global

```bash
npm uninstall -g @angular/cli
npm cache clean --force
npm i -g @angular/cli
```

### Crear un nuevo proyecto

```bash
ng new [nombre-app] --routing --style scss --skip-tests
```

### Crear elementos por consola

```bash
ng g c components/header --flat --skip-tests
ng g s services/api --skip-tests
ng g m modules/dashboard
ng g i models/user
```

### Ejecutar proyecto

```bash
ng serve -o
ng serve --port 4401
```

### Compilar para producción

```bash
ng build --prod
```

---

## 🚀 NESTJS

📘 [nestjs.com](https://docs.nestjs.com/)

### Ver versión

```bash
nest -v
```

### Crear y ejecutar

```bash
nest new [nombre-proyecto]
nest start --watch
```

### Crear controlador sin archivo de test

```bash
nest g co [nombre] --no-spec
```

---

## 🔥 ANGULARFIRE (Firebase + Angular)

📘 [Consola Firebase](https://console.firebase.google.com/)

### Instalar CLI de Firebase

```bash
npm i -g firebase-tools
firebase login
firebase projects:list
```

### Inicializar proyecto existente

```bash
firebase init
```

### Integrar AngularFire

```bash
ng add @angular/fire
```

Responde las preguntas según lo que quieras incluir (Firestore, Auth, Hosting, etc.).

---

## ⚡ VITE

💡 Para pruebas rápidas con TypeScript:

```bash
npm run dev
```

---

## 🧹 LIMPIEZA Y REINSTALACIÓN

1. Cierra el servidor (Ctrl + C)
2. Elimina dependencias y lock:
   ```bash
   rm -rf node_modules
   rm package-lock.json
   ```
3. Limpia caché:
   ```bash
   ng cache clean
   ```
4. Reinstala:
   ```bash
   npm i
   ng serve
   ```

---

## 🎨 INSTALAR DEPENDENCIAS FRECUENTES

```bash
npm i bootstrap @popperjs/core jquery
npm i fontawesome-4.7
```

### Desinstalar un paquete

```bash
npm uninstall <package-name>
```

---

## 📁 Crear carpetas y archivos desde consola

### 🐧 Bash (Linux / Mac / Git Bash)

```bash
mkdir src/app/components/header
```

### 📂 Crear múltiples carpetas

```bash
mkdir docs src tests
```

### 📂 Crear carpetas anidadas

```bash
mkdir -p docs/versiones
```

### 📄 Crear archivo vacío

```bash
touch nombre-archivo.txt
```

### 📄 Crear múltiples archivos

```bash
touch index.html styles.css app.ts
```

### 📄 Crear archivo dentro de carpeta

```bash
touch src/app/app.component.ts
```

## 🧱 Crear estructura completa de una vez

```bash
mkdir -p repo-app-fiori/docs repo-app-fiori/webapp
touch repo-app-fiori/README.md
touch repo-app-fiori/CHANGELOG.md
touch repo-app-fiori/docs/versiones.md
touch repo-app-fiori/webapp/index.html
touch repo-app-fiori/webapp/styles.css
```

---

## 🟦 PowerShell (Windows)

### 📂 Crear carpeta

```powershell
New-Item -ItemType Directory -Path docs
```

### 📂 Crear múltiples carpetas

```powershell
New-Item -ItemType Directory -Path docs, src, tests
```

### 📂 Crear carpetas anidadas

```powershell
New-Item -ItemType Directory -Path docs\versiones -Force
```

### 📄 Crear archivo vacío

```powershell
New-Item -ItemType File -Path README.md
```

### 📄 Crear múltiples archivos

```powershell
New-Item -ItemType File -Path README.md, CHANGELOG.md
```

### 📄 Crear archivo dentro de carpeta

```powershell
New-Item -ItemType File -Path docs\versiones.md
```

### 🧱 Crear estructura completa

```powershell
New-Item -ItemType Directory -Path repo-app-fiori\docs -Force
New-Item -ItemType Directory -Path repo-app-fiori\webapp -Force

New-Item -ItemType File -Path repo-app-fiori\README.md
New-Item -ItemType File -Path repo-app-fiori\CHANGELOG.md
New-Item -ItemType File -Path repo-app-fiori\docs\versiones.md
```

### ⚡ Tip PRO (te va a gustar)

Si estás en Git Bash dentro de Windows, usa Bash (más corto y limpio):

```powershell
mkdir -p repo-app-fiori/{docs,webapp}
touch repo-app-fiori/{README.md,CHANGELOG.md,docs/versiones.md}
```

---

## ⚒️ COMANDOS ÚTILES

| Acción                              | Comando                                                |
| ----------------------------------- | ------------------------------------------------------ |
| Verificar Angular global            | `ng v`                                                 |
| Reinstalar devkit Angular           | `npm install --save-dev @angular-devkit/build-angular` |
| Eliminar carpeta node_modules       | `rm -rf node_modules`                                  |
| Instalar paquetes npm               | `npm i`                                                |
| Instalar paquete específico Angular | `npm install -g @angular/cli@[versión]`                |
| Crear release Git                   | `git tag -a v1.0.0 -m "Release inicial"`               |
| Subir tags al remoto                | `git push --tags`                                      |

---

<div align="center">
    <br>
    <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="80">
    <img src="https://nestjs.com/img/logo_text.svg" width="140">
    <img src="https://firebase.google.com/images/brand-guidelines/logo-vertical.png" width="90">
    <br><br>
    <b>✨ Guía elaborada por Claudio (WEBMAIN) — para entornos modernos de desarrollo web ✨</b>
</div>
```
