# Cómo contribuir

Este informe es coordinado por el Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) y acepta (y agradece) la colaboración de la comunidad. Para contribuir, por favor siga la guía a continuación.

::: info Contribuyendo al código

La documentación está desarrollada con [VitePress](https://vitepress.dev/). Para colaborar directamente en el código será necesario:

- Conocimientos básicos de [Markdown](https://www.markdownguide.org/).
- Conocimientos básicos de Git y una [cuenta personal](https://docs.github.com/es/get-started/start-your-journey/creating-an-account-on-github) en GitHub.
- Una terminal o consola de comandos (recomendado: [Warp](https://warp.dev/)).
- Un editor de texto o entorno integrado de desarrollo (recomendado: [Visual Studio Code](https://code.visualstudio.com/)).

La siguiente guía está pensada para ayudar a nuevos colaboradores a comenzar de cero.

:::

::: warning Otras formas de contribuir

Si no desea contribuir directamente al código, hay otras formas de ayudar y hacer sugerencias:

- Por correo electrónico, a [fabian.abarca@ucr.ac.cr](mailto:fabian.abarca@ucr.ac.cr).
- Creando una propuesta (_issue_) en GitHub: [simovilab/sistema-informacion/issues](https://github.com/simovilab/sistema-informacion/issues) (requiere cuenta de GitHub).
- En redes sociales, a través de [Twitter](https://twitter.com/fabianabarca) o [Instagram](https://www.instagram.com/ing.fabianabarca/).

:::

## Pasos previos

1. Tener acceso a la terminal o consola de comandos.
1. Instalar [Git](https://github.com/git-guides/install-git) (la aplicación [GitHub Desktop](https://desktop.github.com/download/) puede ayudar con esto).
1. Instalar [Node.js](https://nodejs.org/en/download) versión LTS con [pnpm](https://pnpm.io/). Verificar la instalación con `node --version`.
1. Visitar el repositorio en GitHub: [simovilab/sistema-informacion](https://github.com/simovilab/sistema-informacion) (y ¡dejar una estrella ⭐️ en el repositorio y seguir a SIMOVI!).
1. Hacer una bifurcación del repositorio ([_fork_](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)).

## Cómo ejecutar

- Clonar el repositorio de la bifurcación remota en su cuenta de GitHub a su computadora:

```bash
git clone https://github.com/<nombre-usuario>/sistema-informacion.git
```

con `<nombre-usuario>` su nombre de usuario de GitHub (reemplazar).

- Moverse al directorio recién creado:

```bash
cd sistema-informacion
```

- Instalar los paquetes de Node.js con pnpm:

```bash
pnpm install
```

- Crear una rama de Git para desarrollo:

```bash
git branch <nombre-rama>
```

- Moverse a esa rama:

```bash
git switch <nombre-rama>
```

Reemplazar `<nombre-rama>` con un nombre descriptivo, por ejemplo: `mi-contribucion`.

- Correr el servidor de desarrollo en el mismo directorio donde está `package.json`, con:

```bash
pnpm docs:dev
```

- Abrir el navegador en `http://localhost:5173/` para ver los cambios en tiempo real (para detener el servidor, presionar `Ctrl + C` en la terminal).

## Cómo contribuir

- Abrir el proyecto en el editor de texto para editar los archivos. Puede usar `code .` si está usando Visual Studio Code, o hacerlo manualmente.
- Editar el o los archivos `*.md` en la carpeta `docs/` para realizar cambios en la documentación.
- Cada vez que realice un cambio, guardar el archivo y verificar los cambios en el navegador.

## Cómo hacer una solicitud de incorporación de cambios

Una solicitud de incorporación de cambios ([_pull request_](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)) es una forma de proponer sus contribuciones al proyecto. Para hacer una, siga estos pasos:

- Asegurarse de que los cambios están en la rama correcta (la rama creada anteriormente).
- Agregar los cambios al área de preparación (_staging area_) de Git:

```bash
git add .
```

- Hacer una confirmación ([_commit_](https://docs.github.com/es/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop)) con un mensaje descriptivo:

```bash
git commit -m "Descripción de los cambios"
```

- Verificar el estado del repositorio para asegurarse de que todo está correcto:

```bash
git status
```

- Subir los cambios a GitHub:

```bash
git push origin <nombre-rama>
```

:::tip Visual Studio Code
Si está usando Visual Studio Code, puede usar la interfaz gráfica para hacer los pasos anteriores. Para esto haga clic en el ícono de Git en la barra lateral izquierda, agregue los cambios (+), escriba un mensaje descriptivo de confirmación y haga clic en el botón de confirmación.
:::

- Ir a la página del repositorio en GitHub y hacer clic en "Compare & pull request".
- Completar el formulario con un título y una descripción de los cambios.
- Hacer clic en "Create pull request" para enviar la solicitud.

## Referencias

- Los contenidos deben tener abundantes referencias a fuentes académicas y documentales, confiables y relevantes. Para citar, por favor recopilar las referencias en el formato BibTeX y agregarlas al archivo `docs/public/references.bib` y luego usarlas en la sección de referencias de la página correspondiente con la sintaxis `<Citation citekey="clave_de_cita" />`, donde `clave_de_cita` es la clave de la referencia en el archivo BibTeX. [Google Scholar](https://scholar.google.com/) es una buena fuente para encontrar referencias y exportarlas en formato BibTeX.

Por ejemplo, la referencia:

```bibtex
@inproceedings{abarca2024system,
  author    = {Abarca, Fabián and Murillo, David and Segura, David and Vargas, Josué and Cordero, Adrián and Murillo, Edson and Núñez, Gustavo and Coto, Marvin},
  booktitle = {XLII Convención IEEE de Centroamérica y Panamá (CONCAPAN)},
  date      = {2024},
  title     = {A System-Level Design for a Public Transportation Information System in Costa Rica}
}
```

citada como:

```html
<Citation citekey="abarca2024system" />
```

genera:

<Citation citekey="abarca2024system" />

## ¡Gracias por contribuir!

Los cambios serán revisados por el equipo de SIMOVI y se integrarán al proyecto si son aprobados. Si tiene alguna pregunta o necesita ayuda, no dude en contactarnos a través de los canales mencionados anteriormente.
