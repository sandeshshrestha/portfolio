workflow "New workflow" {
  on = "push"
  resolves = ["new-action"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "deploy"
}

action "new-action" {
  uses = "owner/repo/path@ref"
  needs = ["GitHub Action for npm"]
}