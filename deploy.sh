# Sirice
# This shell script is used to deploy your resume page to github page automatically.

set -e
pnpm run build
cd resume/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# change url below to yours.
git push -f https://github.com/Siricee/Resume-vuepress.git master:gh-pages

cd -

