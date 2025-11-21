#!/usr/bin/env bash
set -e
BRANCH=gh-pages
TEMP_DIR=$(mktemp -d)
git worktree add $TEMP_DIR $BRANCH
rsync -a --delete ./ $TEMP_DIR/
cd $TEMP_DIR
git add -A
git commit -m "Deploy: $(date -u +'%%Y-%%m-%%d %%H:%%M:%%S')" || true
git push origin $BRANCH
git worktree remove $TEMP_DIR
echo 'Deployed to gh-pages'
