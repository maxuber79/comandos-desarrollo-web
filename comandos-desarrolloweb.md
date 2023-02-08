<div align="center">
    <h1>INSTALACIONES DE PROGRAMAS DE DESARROLLO</h1>
</div>

### Git | url:https://git-scm.com/
``` Aqui página de comandos: https://bluuweb.github.io/tutorial-github/ ```

### Configuración inicial Git
```bash
git config --global user.name "John Doe"
```
```bash
git config --global user.email johndoe@example.com
```
### Versión Git
```bash
git --version
```
```bash
git -v
```

### Update git desde consola
```bash
 git update-git-for-windows
 ```

### Version de NodeJS
Desde el siguiente link se podra descargar la ultma versión LTS [Node.js](https://nodejs.org/en/)
```bash
node --version
```
```bash
node -v
```

### Version de NPM 
Desde el siguiente link se podran ver o buscar paquetes [pmjs](https://www.npmjs.com/)
```bash
npm --version
```
```bash
npm -v
```
Actualizar a la ultima versión del npm de forma global
```bash
npm install -g npm@latest
```
`nota: npm esta por defecto si instalas node js`

### Instalar TypeScript 
Desde el siguiente link se podra ver herramienta [TypeScript](https://www.typescriptlang.org/es/)

Instalar de forma global
```bash
 npm install -g typescript
```
```bash
tsc --version
```
```bash
tsc -v
```
Actualizar a la ultima versión de TypeScript de forma global
```bash
npm update -g typescript@latest
```

### Version Angular CLI global
```bash
ng version
```
```bash
ng v
```
### Update Angular CLI global
Paso 1:
```bash
npm uninstall -g @angular/cli
```
Paso 2:
```bash
npm cache clean --force
```
Paso 3:
```bash
npm i -g @angular/cli
```

## INSTALACIONES PARA ANGULAR CLI

### Instalar AngularCLI de forma global | url:https://angular.io/
```text $ npm install -g @angular/cli```

### Actualizar Agular:
```text $ ng update @angular/cli @angular/core```

### Crear un nuevo proyecto de Angular CLI
```text $ ng new [name_first_project]```

### Crear un nuevo proyecto con routing/scss/sin archvios de test:

```
ng new [name_first_project] --rounting --style scss --skip-tests 
```


### Instalación de una versión específica de angular con angular cli
Paso 1:
```bash
 npm uninstall -g @angular/cli
 ```
Paso 2:
```bash
npm cache clean
```
Paso 3:
```bash
 npm cache verify
 ```
Paso 4 (Instalar una versión específica angular-cli):
```bash
 npm install -g @angular/cli@[version]
 ```
Paso 5 (Crear un proyecto):
```bash
 ng new you-app-name
 ```

### Crear un nuevo component/modulo/servicio/interface etc en Angular

```bash
ng g c template_parts/header --skip-tests --flat
```
```bash
ng g s services/[name] --skip-tests
``` 
```bash
ng g c components/[name] --style=none --skip-tests
```
```bash
ng g m micarpeta/[name]
```
```bash
ng g i micarpeta/[name]
```
```bash
ng generate p [name] --skip-tests
```


Nota:

- -is Eliminar archiv scss/css/sass
- --skipTests Eliminar los archivos de pruebas
- "--skip-tests" 0 "--skipTests /  Crear unmodulo sin el archivo spec.ts
- Para cre un componente, modulo o servicio sin carpata se debe agregar --flat

### Abrir aplicación:
```text 
 ng serve -o / ng serve --port 4401  
```
### Crear servicios:
```text 
$ ng g s services/infoPaginas
```
### Aplicacion pruebas en producción:
```text 
$ ng build --prod
```
### Instalar bootstrap + dependencias:skip
```text 

$ ng i [nombre paquete] / ng install [nombre paquete]
$ ng i jquery bootstrap popper --save

Ej.
npm install bootstrap
npm i fontawesome-4.7
npm i popper
npm i @popperjs/core
```

### Desintalar dependencia
```text 
npm uninstall <package-name>
```	
### Reinstalar Node_modules de angular bajado desde repositorios
```text 
$ npm install --save-dev @angular-devkit/build-angular
```
### Eliminar carpeta node_modules
```text 
$ rm -r node_modules
```
or
```text 
$ rm -rf node_modules
```
### Instalar node_modules

```text 
$ npm i	
```

# TYPESCRIPT:
```text 
$ tsc --init /crear archivo de configuracion de typescript
$ tsc -w / o --watch modo de observador
```

### Instalar Paquetes desde npm
```text 
$ ng i [nombre paquete] / ng install [nombre paquete]
```
Ej.
- npm install bootstrap
- npm i fontawesome-4.7

# GIT:

### Iniciar un proyecto git
```text
$ git init
```
### Pasar el proyecto al stage
```text
$ git add .
```

### Deshacer el stage
```text
$ git reset .
```
### Pasar el proyecto a un commit
```text
$ git commit -m "primer commit"
```
### Comando para agregar al stage y el commit
```text
$ git commit -am "Lorem ipsun dolor"
```

### Editar el nombre del commit
```text
$ git commit --amend
```

### Reconstruir el proyecto desde ultimo commit
```text
$ git checkout --.
```

### Actualizar git desde consola:
```text
$ git update-git-for-windows
```

### Agregar un remoto:
```text
$ git remote add origin [URL repositorio]
```

### Cambiar nombre del remote
```text
$ git remote rename origin [nuevo nombre]
```

### Borrar remoto:
```text
$ git remote rm destination
```
### Cambiar nombre de la rama default:
```text
git branch -m master main
```
### crear una nueva rama
```text
$ git branch [nombre rama]
```

### Crear una nueva rama y quedarse en ella
```text
$ git checkout -b [nombre rama]
```

### Cambiar el nombre de la rama master y cambiar nombre de ramas creadas
```text
$ git branch -M <nuevo-nombre>
$ git branch -m <nuevo-nombre>
```

## Cambiar nombre de rama, si estás en otra rama 
```text
$ git branch -m <nombre-antiguo> <nuevo-nombre>
```
### Mostrar las ramas existente
```text
$ git branch o git status
```
### Moverse a la rama creada
```text
$ git checkout [nomre rama]
```
### Ver que diferencias hay entre las ramas
```text
$ git diff [nombre rama] master
```
### Unir ramas
```text
$ git merge [nombre rama]
```

### Borrar rama local
```text
$ git branch -d nombre_rama
$ git branch -D nombre-rama 
```

### Borrar rama remota
```text
git push <remote> --delete <branch>
```
### Borrar rama que ya se unieron
```text
$ git branch -d [nombre rama]
$ git remote -v
```
### Ver los remotos actuales
```text
$ origin  https://github.com/OWNER/REPOSITORY.git (fetch)
$ origin  https://github.com/OWNER/REPOSITORY.git (push)
$ github  https://github.com/FORKER/REPOSITORY.git (fetch)
$ github  https://github.com/FORKER/REPOSITORY.git (push)
```

### Agregar remoto y agregar remoto adicional
```text
$ git remote add origin git@bitbucket.org:user/myproject.git
or
$ git remote add origin git@bitbucket.org:user/myproject.git
```
### Eliminar remoto
```text
$ git remote rm github
```
### Verificar que se haya ido
```text
$ git remote -v
$ origin  https://github.com/OWNER/REPOSITORY.git (fetch)
$ origin  https://github.com/OWNER/REPOSITORY.git (push)
...
```
### Ver remotos existentes
```text
$ git remote -v
$ origin  https://github.com/OWNER/REPOSITORY.git (fetch)
$ origin  https://github.com/OWNER/REPOSITORY.git (push)

```
### Cambiar el nombre del remoto
```text
$ git remote rename origin destination
$ git remote rename [nombre actual remoto] [nombre nuevo]
```
### Realizar un push al remoto o aun remoto en especifico
```text
$ git push origin master
or
$ git push github master
```

### Como realizar un Release
```text
$git tag -a v1.0.0 -m "Full diseño"
```

### Subir los tag al repositorio Ver todos los tag
```text
$git push --tag 
```
``` javascript Esc + w + q ```


### Crear key SSH
```text
$ ssh-keygen
$ cat C:\Users\cmunozm/.ssh/id_rsa.pub
```


# NESTJS:
Desde el siguiente link se podra al sitio web de [Nest.js](https://docs.nestjs.com/)

```bash
nest -v
```
### Para iniciar el proyecto

```bash
nest start --watch
```

### Crear un primer controlador, se le agrega la bandera --no-spec para no agregar archiv de prueba
```bash
nest g co
```
```bash
nest generate controller
```
# FIREBASE:
Desde el siguiente link se podra al sitio web de [COnsola de firabase](https://console.firebase.google.com/u/0/)

### Instalando el CLI de Firebase
El CLI de Firebase nos proporciona varias herramientas para gestionar, visualizar y desplegar a proyectos Firebase. Podemos utilizar npm para instalar el CLI:

```bash
npm i -g firebase-tools
```

Una vez que hayamos instalado el CLI, podemos utilizarlo para iniciar sesión. Para ello, podemos utilizar el siguiente comando:

```bash
firebase login
```

Para comprobar si hemos iniciado sesión con éxito, podemos ejecutar el siguiente comando:
```bash
firebase projects:list
```
Deberíamos ver una lista de todos los proyectos Firebase que haya en nuestra cuenta. Y por fin, es hora de empezar con nuestra aplicación Angular.

### Añadiendo Firebase y AngularFire
Vamos a añadir Firebase y AngularFire a nuestro proyecto. Para ello, utilizaremos el schematic de AngularFire, que se encargará de configurarlo todo. Para ello, ejecutamos el siguiente comando:
```bash
ng add @angular/fire
```
 Tendremos que contestar a una serie de preguntas, como qué funcionalidades de Firebase queremos configurar. En el caso de que queráis añadir autenticación/Firestore, seleccionad ambas opciones ahora:
 <p align="center">
  <br>
  <img src="https://miro.medium.com/max/1100/0*YLrKtpDauowsnDSG.webp" alt="Angular CLI logo" width="300px" height="auto"/>
  <br><br>
  <br>
</p>
 Una vez seleccionadas las opciones que queremos, se nos preguntará por la cuenta de Firebase que queremos utilizar, y qué proyecto queremos configurar. Por tanto, tendremos que seleccionar el proyecto que creamos anteriormente, y posteriormente seleccionaremos la app que también creamos en los pasos anteriores.

Una vez hecho todo esto, podremos ver que el schematic se ha encargado de llevar a cabo toda la configuración de Firebase automáticamente. ¡Genial! ¡Es el momento de empezar a construir nuestra app