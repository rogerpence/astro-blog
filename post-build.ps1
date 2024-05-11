if (test-path .\public\pagefind) {
    remove-item .\public\pagefind -force -recurse
}

if (test-path .vercel\output\static\pagefind) {
    remove-item .vercel\output\static\pagefind -force -recurse
}

node .\cmd-line\create-index-objects.js
node .\cmd-line\create-index.js 

copy-item .\public\pagefind -destination .\.vercel\output\static\pagefind -recurse -force

node .\cmd-line\create-tagmap-objects.js