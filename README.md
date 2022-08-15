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
    "watch": "tailwindcss -i ./src/style.css -o assets/css/style.css --watch"
  },

```

Source

- https://alexanderzeitler.com/articles/watch-tailwind-changes-update-browser-sync/
- https://v2.tailwindcss.com/docs/installation
- https://github.com/rebelchris/HTML-Tailwind-Starter
- https://daily-dev-tips.com/posts/plain-html-starter-with-tailwind-css/

```

```

```

```
