# Photopea Automator

Herramienta para automatizar la generación de mockups usando Photopea y Puppeteer. Ideal para integrar con flujos de N8N.

## Instalación

```bash
npm install
```

## Uso

Puedes ejecutar el automatizador de dos formas:

1. Usando npm:
```bash
npm start
```

2. Directamente con node:
```bash
node automate.js scripts/crearMockup.js
```

## Estructura de archivos

- El logo del cliente debe guardarse como `logos/logo.png`
- El archivo PSD del mockup debe estar en `mockups/cuero.psd`
- El resultado final se guardará en `output/mockup.jpg`

## Carpetas

- `mockups/`: Archivos PSD de los mockups (ej: cuero.psd, madera.psd)
- `logos/`: Logos de los clientes (logo.png)
- `output/`: Donde se guardan los mockups generados
- `scripts/`: Scripts de Photopea para diferentes tipos de mockups

## Integración con N8N

Puedes usar este automatizador en tus flujos de N8N ejecutando el script mediante un nodo Execute Command.