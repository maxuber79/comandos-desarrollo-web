# INSTALACIONES DE PROGRAMAS DE DESARROLLO

### Git | url:https://git-scm.com/
``` text Aqui página de comandos: https://bluuweb.github.io/tutorial-github/ ```

## Configuración inicial Git
```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```
## Versión Git
```$git --version```

### Version de NodeJS | url:https://nodejs.org/es/
```text $ node -v ```

### Version de NPM | url:https://www.npmjs.com/
```text $ npm -v ```

nota: npm esta por defecto si instalas node js

### Instalar TypeScript | url: https://www.typescriptlang.org/es/
```text $ npm install -g typescript ```

### Versión de TypeScript
```text $ tsc --version```

### Version Angular CLI
```text $ ng v / ng version```


## INSTALACIONES PARA ANGULAR CLI

### Instalar AngularCLI de forma global | url:https://angular.io/
```text $ npm install -g @angular/cli```

### Actualizar Agular:
```text $ ng update @angular/cli @angular/core```

### Crear un nuevo proyecto de Angular CLI
```text $ ng new my-first-project```

### Crear un nuevo component/modulo/servicio etc en Angular
```text 
$ ng g c template_parts/header --skip-tests
$ ng g s services/name_service --skipTests 
$ ng g c components/name_component -is --skipTests
$ ng g m micarpeta/name_modulo
```

Nota:

- -is Eliminar archiv scss/css/sass
- --skipTests Eliminar los archivos de pruebas
- "--skip-tests" 0 "--skipTests /  Crear unmodulo sin el archivo spec.ts
- Para cre un componente, modulo o servicio sin carpata se debe agregar --flat

	
### Abrir aplicación:
```text 
$ ng serve -o / ng serve --port 4401  
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

### Actualizar git por comandos
```text
$ git update-git-for-windows
```
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

``` javascript Esc + w + q ```





