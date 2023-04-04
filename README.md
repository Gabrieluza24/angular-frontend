# angular-frontend
Frontend para la prueba tecnica Pervolare

## Instalacion

**Pre-requisitos.**
1. Instalación de **NodeJS** y sistema de gestion de paquetes **NPM**

**Instalacíon**

Una vez clonado el repositorio,

-ingrese al archivo ***environment.ts*** el cual se encuentra en la carpeta ***/src/environments*** e indique la url donde se encuentre el backend en ejecución, este ya tiene por defecto la conexion con localhost:3000 puerto que expone la aplicacion **nest-backend**

```
  production: false,
  serverUrl: 'http://localhost:3000'
```

- ejecute el comando `npm install` para instalar todos los modulos necesarios para el correcto funcionamiento de la aplicación

- ejecute el comando `npm start` y automaticamente la aplicación estara funcionando.

- finalmente puede ir al navegador a la direccion `http://localhost:4200` donde estara la aplicación ejecutandose
