# INSTALACIONES DE PROGRAMAS DE DESARROLLO

### Git | url:https://git-scm.com/
```text Aqui página de comandos: https://bluuweb.github.io/tutorial-github/```

### Version de NodeJS | url:https://nodejs.org/es/
```text $ node -v```

### Version de NPM | url:https://www.npmjs.com/
```text $ npm -v```

nota: npm esta por defecto si instalas node js

### Instalar TypeScript | url: https://www.typescriptlang.org/es/
```text $ npm install -g typescript```

### Versión de TypeScript
$```text  tsc --version```

### Version Angular CLI
```text $ ng v / ng version```


## INSTALACIONES PARA ANGULAR CLI

## Instalar AngularCLI de forma global | url:https://angular.io/
$ npm install -g @angular/cli

## Actualizar Agular:
$ ng update @angular/cli @angular/core

## Crear un nuevo proyecto de Angular CLI
$ ng new my-first-project

## Crear un nuevo modulo en Angular
$ ng g c template_parts/header --skip-tests
$ ng g s services/productos --skipTests 
$ ng g c components/MyName -is --skipTests

Nota:
-is Eliminar archiv scss/css/sass
--skipTests Eliminar los archivos de pruebas
"--skip-tests" 0 "--skipTests /  Crear unmodulo sin el archivo spec.ts
	
## Abrir aplicación:
$ ng serve -o / ng serve --port 4401  

## Crear servicios:
$ ng g s services/infoPaginas

## Aplicacion pruebas en producción:
$ ng build --prod

## Instalar bootstrap + dependencias:skip
$ npm i bootstrap --save
$ npm i jquery --save
$ npm i @popperjs/core

## Reinstalar Node_modules de angular bajado desde repositorios
$ npm install --save-dev @angular-devkit/build-angular

# Eliminar carpte node_modules
$ rm -rf node_modules && npm i	

### TYPESCRIPT:
$ tsc --init /crear archivo de configuracion de typescript
$ tsc -w / o --watch modo de observador


## Instalar Paquetes desde npm
$ ng i [nombre paquete] / ng install [nombre paquete]

Ej.
npm install bootstrap
npm i fontawesome-4.7

### GIT:

### Iniciar un proyecto git
$ git init

### Pasar el proyecto al stage
$ git add .

### Deshaser el stage
	git reset .

### Pasar el proyecto a un commit
$ git commit -m "primer commit"

### Comando para agregar al stage y el commit
$ git commit -am "Lorem ipsun dolor"

### Editar el nombre del commit
$ git commit --amend

### Reconstruir el proyecto desde ultimo commit
$ git checkout --.

### Actualizar git desde consola:
$ git update-git-for-windows

### Agregar un remoto:
$ git remote add origin [URL repositorio]

### Cambiar nombre del remote
$ git remote rename origin [nuevo nombre]

### Borrar remoto:
$ git remote rm destination

### crear una nueva rama
$ git branch [nombre rama]

### Crear una nueva rama y quedarse en ella
$ git checkout -b [nombre rama]

### Mostrar las ramas existente
$ git branch o git status

### Moverse a la rama creada
$ git checkout [nomre rama]

### Ver que diferencias hay entre las ramas
$ git diff [nombre rama] master

### Unir ramas
$ git merge [nombre rama]

### Borrar rama que ya se unieron
$ git branch -d [nombre rama]

$ git remote -v
### Ver los remotos actuales
> origin  https://github.com/OWNER/REPOSITORY.git (fetch)
> origin  https://github.com/OWNER/REPOSITORY.git (push)
> destination  https://github.com/FORKER/REPOSITORY.git (fetch)
> destination  https://github.com/FORKER/REPOSITORY.git (push)

$ git remote rm destination

### Eliminar remoto
$ git remote -v

### Verificar que se haya ido

> origin  https://github.com/OWNER/REPOSITORY.git (fetch)
> origin  https://github.com/OWNER/REPOSITORY.git (push)

$ git remote -v
# Ver remotos existentes
> origin  https://github.com/OWNER/REPOSITORY.git (fetch)
> origin  https://github.com/OWNER/REPOSITORY.git (push)

$ git remote rename origin destination
# Cambiar el nombre del remoto de 'origen' a 'destino'

$ git remote -v
# Verificar el nombre nuevo del remoto
> destination  https://github.com/OWNER/REPOSITORY.git (fetch)
> destination  https://github.com/OWNER/REPOSITORY.git (push)

``` javascript Esc + w + q ```





