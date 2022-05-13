# Getting Started with ident.world

This project is a testbed prototype for the ident.world SPA.

## Development

In the project directory you can run:

### `npm start`

## Deployment

After committing and pushing your code to the `master` branch, you can deploy by running:

### `npm run deploy` or `npm run deploy -- -m "my commit message"`

This will deploy the code to the `gh-pages` branch of the `ident.world` repository. GitHub Pages will automatically detect that a new commit has been added to the gh-pages branch. Once it detects that, it will begin serving the files that make up that commit — in this case, the distributable version of the React app — to anyone that visits the `homepage` URL you specified package.json.
