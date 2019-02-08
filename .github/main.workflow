workflow "Update Content Model and Rebuild Site" {
  on = "push"
  resolves = ["Netlify Rebuild"]
}

action "Contentful Migration" {
  uses = "Shy/contentful-action/contentful-migrate@master"
  secrets = ["spaceId", "accessToken", "contentfulMigrationLocation"]
}

action "Netlify Rebuild" {
  uses = "Shy/contentful-action/netlify-rebuild@master"
  needs = ["Contentful Migration"]
  secrets = ["netlifyBuildHook"]
}
