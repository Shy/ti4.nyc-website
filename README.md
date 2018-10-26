# TI4 NYC Website

This is [website](ti4.nyc) to help organinze games of Twilight Imperium in NYC. It's forked from the [gatsby-starter-dimension](https://github.com/codebushi/gatsby-starter-dimension).

## Set up your own

This site is created with [Gatsby](https://http://gatsbyjs.org/), hosted by [Netlify](https://www.netlify.com/) and with data handled in [Contentful](https://www.contentful.com/).

### Requirements

To deploy this site you'll need a Contentful and Netlify account. If you don't have a Contentful account yet, you can register at [www.contentful.com/sign-up](https://www.contentful.com/sign-up/).

### Get the source code and install dependencies.

Create a new site using this repo ([assuming Gatsby is installed](https://www.gatsbyjs.org/docs/)) by running from your CLI:

```
gatsby new ti4NYC https://github.com/Shy/ti4.nyc-website
```

Then launch a hot-reloading development environment accessible at localhost:8000.

```
cd ti4NYC
gatsby develop
```

#### Set up the content model and update the API Keys.

This project comes pre-connected to a live Contentful space. For you to be able to modify and evolve the project, you'll need to create your own Contentful space.

From the Contentful website click on the name of the space in the top left corner of the interface and select 'Add new Space'. Select the blank space option. Name your space, select its default locale (language) and the organization it should belong to. Then hit 'Create Space'.

To import the content model into your new space you'll need to install the [Contentful import tool](https://github.com/contentful/contentful-import).

```
npm install -g contentful-import
```

Once that's installed you'll be able to import the content model into your new space using the following command:

```
contentful-import \
  --space-id spaceID \
  --management-token managementToken \
  --content-file import_export/export.json
  ```

Make sure to update the .env file with your spaceID and accessToken. You're able to find both of those keys via app.contentful.com -> Space Settings -> API keys.

Additionally you can also optionally install the [TI4 UI extension](https://github.com/Shy/ti4.nyc-ui-extension) that goes along with this project to replace the JSON field with something more editor friendly.
