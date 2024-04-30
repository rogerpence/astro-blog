remove-item .vercel\output\static\pagefind -force -recurse
node ./cmd-line/modules/get-markdown-as-objects.js
node ./cmd-line/data/create-index.js 
copy-item ./public/pagefind -destination ./.vercel/output/static/pagefind -recurse -force