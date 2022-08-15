Material do Youtube: https://www.youtube.com/c/codewithsadee

Projeto 1 - https://github.com/codewithsadee/homeverse
Starter File - https://drive.google.com/file/d/1WG71WDALJgKWs_LojxMQ_dpwzVyvOP2T/view

Installation instructions

```
npm init -y

```

Pacotes NPM

```

npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Create a new file config tailwind.config.js

```
npx tailwindcss init

```

Create styles.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

Running

```

npx tailwindcss -i ./src/style.css -o ./assets/css/style.css

```

Script package.json

```
"scripts": {
    "browser-sync": "browser-sync start --config bs-config.js",
    "tailwind-watch": "tailwindcss -i ./src/style.css -o assets/css/style.css --watch",
    "dev:start": "run-p tailwind-watch browser-sync"
  },

```

tailwind + browser-sync

```
npm run dev:start
```

Source

- **https://github.com/webesque/prototyping-with-tailwind**
- https://alexanderzeitler.com/articles/watch-tailwind-changes-update-browser-sync/
- https://github.com/bearcodeteeeps/000-tailwind-3-parcel-2-brosersync-prettier
- https://v2.tailwindcss.com/docs/installation
- https://v2.tailwindcss.com/docs/just-in-time-mode
- https://github.com/rebelchris/HTML-Tailwind-Starter
- https://daily-dev-tips.com/posts/plain-html-starter-with-tailwind-css/
- https://github.com/SergioGarciaGil/practicando-Taillwind-
- https://github.com/rfkokt/luxspace-taillwind
- https://github.com/tailwindtoolbox/StarterTemplate
- https://dannyherran.com/2021/08/tailwind-css-with-parcel-v2/
- https://tailwindcss.com/docs/guides/parcel
- https://github.com/m-w-d-d/tailscore - Tailscore - A minimal \_s (Underscores), Tailwind, Parcel & Browsersync Wordpress Theme
