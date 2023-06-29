cp LICENSE build/LICENSE
cp README.md build/README

jq 'del(.devDependencies) | del(.scripts)' package.json > build/package.json
pnpm publish --dry-run ./build/ --access public --no-git-checks --force
