workflow "New workflow" {
  on = "push"
  resolves = ["Contentful Migration"]
}

action "Contentful Migration" {
  uses = "Shy/contentful-action/contentful-migrate"
  secrets = ["spaceId", "accessToken"]
}