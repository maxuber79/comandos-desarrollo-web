<div align="center">
    <h1>INSTALACIONES DE PROGRAMAS DE DESARROLLO</h1>
</div>

### [GIT](https://git-scm.com/)
``` Aqui página de comandos: https://bluuweb.github.io/tutorial-github/ ```

### Configuración inicial global de GIT en em Windows

Paso 1: Agregar un usuario a la configuración global del git
```bash
git config --global user.name "John Doe"
```

Paso 2: Agregar un email a la configuración global del git
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
Este comando se utiliza en la consola para actualizar git en Windows
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
```bash
	npm install -g @angular/cli
```

### Actualizar Agular:
```bash
ng update @angular/cli @angular/core
```

### Crear un nuevo proyecto de Angular CLI
```bash 
ng new [name_first_project]
```

### Crear un nuevo proyecto con routing/scss/sin archvios de test:

```bash
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
```bash 
ng serve -o / ng serve --port 4401  
```
### Crear servicios:
```bash
ng g s services/infoPaginas
```
### Aplicacion pruebas en producción:
```bash
ng build --prod
```
### Instalar bootstrap + dependencias:skip
```bash
ng i [nombre paquete] / ng install [nombre paquete]
```
```bash
ng i jquery bootstrap popper --save
```

```text
Ej.
npm install bootstrap
npm i fontawesome-4.7
npm i popper
npm i @popperjs/core
```

### Desintalar dependencia
```bash 
npm uninstall <package-name>
```	
### Reinstalar Node_modules de angular bajado desde repositorios

```bash 
npm install --save-dev @angular-devkit/build-angular
```
### Eliminar carpeta node_modules
```bash  
rm -r node_modules
```
or

```bash 
rm -rf node_modules
```
### Instalar node_modules

```bash 
npm i	
```

# TYPESCRIPT:
```text 
$ tsc --init /crear archivo de configuracion de typescript
$ tsc -w / o --watch modo de observador
```

### Instalar Paquetes desde npm
```bash
ng install [nombre paquete]
```
or
```bash
ng i [nombre paquete]
```

```text
Ej.
- npm install bootstrap
- npm i fontawesome-4.7
```

# GIT:

### Iniciar un proyecto git
```bash
git init
```
### Pasar el proyecto al stage
```bash
git add .
```

### Deshacer el stage
```bash
git reset .
```
### Pasar el proyecto a un commit
```bash
git commit -m "primer commit"
```
### Comando para agregar al stage y el commit
```bash
git commit -am "Lorem ipsun dolor"
```

### Editar el nombre del commit
```bash
git commit --amend
```

### Reconstruir el proyecto desde ultimo commit
```bash
git checkout --.
```

### Actualizar git desde consola:
```bash
$ git update-git-for-windows
```

### Agregar un remoto:
```bash
$ git remote add origin [URL repositorio]
```

### Cambiar nombre del remote
```bash
$ git remote rename origin [nuevo nombre]
```

### Borrar remoto:
```bash
$ git remote rm destination
```
### Cambiar nombre de la rama default:
```bash
git branch -m master main
```
### crear una nueva rama
```bash
git branch [nombre rama]
```

### Crear una nueva rama y quedarse en ella
```bash
git checkout -b [nombre rama]
```

### Cambiar el nombre de la rama master y cambiar nombre de ramas creadas
```bash
git branch -M <nuevo-nombre>
git branch -m <nuevo-nombre>
```

## Cambiar nombre de rama, si estás en otra rama 
```bash
git branch -m <nombre-antiguo> <nuevo-nombre>
```
### Mostrar las ramas existente
```bash
git branch o git status
```
### Moverse a la rama creada
```bash
git checkout <name branch>
```
### Ver que diferencias hay entre las ramas
```bash
git diff <name branch> master
```
### Unir ramas
```bash
git merge <name branch>
```

### Borrar rama local
```bash
git branch -d <name branch>
git branch -D <name branch>
```

### Borrar rama remota
```bash
git push <name remote> --delete <name branch>
```
### Borrar rama que ya se unieron
```bash
git branch -d <name branch>
git remote -v
```
### Ver los remotos actuales
```text
$ origin  https://github.com/OWNER/REPOSITORY.git (fetch)
$ origin  https://github.com/OWNER/REPOSITORY.git (push)
$ github  https://github.com/FORKER/REPOSITORY.git (fetch)
$ github  https://github.com/FORKER/REPOSITORY.git (push)
```

### Agregar remoto y agregar remoto adicional
```bash
git remote add origin <url remote>
```
or
```bash
git remote add bitbucket <url remote> ej.git@bitbucket.org:user/myproject.git
```
### Eliminar remoto
```bash
git remote rm github
```
### Verificar que se haya ido
```bash
git remote -v
```
```text
$ origin  https://github.com/OWNER/REPOSITORY.git (fetch)
$ origin  https://github.com/OWNER/REPOSITORY.git (push)
```
### Ver remotos existentes
```bash
git remote -v
```

```text
$ origin  https://github.com/OWNER/REPOSITORY.git (fetch)
$ origin  https://github.com/OWNER/REPOSITORY.git (push)
```
### Cambiar el nombre del remoto
```bash
git remote rename origin destination
```
```bash
git remote rename <nombre actual remoto> <nombre nuevo>
```
### Realizar un push al remoto o aun remoto en especifico
```bash
git push origin master
```
or
```bash
git push github master
```

### Como realizar un Release
```bash
git tag -a v1.0.0 -m "Full diseño"
```

### Subir los tag al repositorio Ver todos los tag
```bash
git push --tag 
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
Desde el siguiente link se podra al sitio web de [Consola de firabase](https://console.firebase.google.com/u/0/)

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
  <img src="https://miro.medium.com/max/1100/0*YLrKtpDauowsnDSG.webp" alt="Angular CLI logo" width="100px" height="108px"/>
  <br><br>
  <br>
</p>
 Una vez seleccionadas las opciones que queremos, se nos preguntará por la cuenta de Firebase que queremos utilizar, y qué proyecto queremos configurar. Por tanto, tendremos que seleccionar el proyecto que creamos anteriormente, y posteriormente seleccionaremos la app que también creamos en los pasos anteriores.

Una vez hecho todo esto, podremos ver que el schematic se ha encargado de llevar a cabo toda la configuración de Firebase automáticamente. ¡Genial! ¡Es el momento de empezar a construir nuestra app

### Añadiendo carpetas y archivos por consola
<ul dir="auto">
<li><code>mkdir [name folder]</code> : Agregar un carpeta al proyecto.</li>
<li><code>touch [name file mas extension]</code> : Agregar un archivo con su extensión.</li>

</ul>