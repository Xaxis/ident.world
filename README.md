# What is ident.world?

A system for managing online identities.

## How does it work?

1. Create an identity by providing your email address. You can create multiple identities with the same email address. A unique ident.world identifier will be generated for you in each instance.
2. An email will be sent to you to confirm the creation of your new ident.world identity.

## Development

In the project directory you can run:

### `npm start`

## Deployment

After committing and pushing your code to the `master` branch, you can deploy by running:

### `npm run deploy` or `npm run deploy -- -m "my commit message"`

This will deploy the code to the `gh-pages` branch of the `ident.world` repository. GitHub Pages will automatically detect that a new commit has been added to the gh-pages branch. Once it detects that, it will begin serving the files that make up that commit — in this case, the distributable version of the React app — to anyone that visits the `homepage` URL you specified package.json.
