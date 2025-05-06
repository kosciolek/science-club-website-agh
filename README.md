# Automatic deploy

Any push to the `main` branch in this repository will automatically build and deploy the site to (http://kntryton.agh.edu.pl/)[http://kntryton.agh.edu.pl/]

# Local development

Install NodeJS. Version is specified in the [.nvmrc](.nvmrc) file.

Install dependencies with `npm i`.

Start the local server with `npm run dev`.

# Manual building

Install NodeJS. Version is specified in the [.nvmrc](.nvmrc) file.

Install dependencies with `npm i`.

Build the project with `npm run build`. The static output (`index.html` and other files) will appear in the `dist` directory. These files are ready to be moved to the `public_html` directory (or whatever directory your server uses as its WWW root).
