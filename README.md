# Corona_Blocker Chrome Extension

By Default Google Chrome does not allow you to block coronavirus text on your computer screen. In this extension you can block any coronavirus text which will appear on your screen.

Everyone who is planning on blocking the Coronavirus in Google Chrome will need to have this extension added. This set of instructions indicates how to publish the resulting extension to Google's extensions store.

# Instructions for pushing the version of the Chrome Extension to the Google Store:

Download a copy of the files in this repository. This is for all urls in `manifest.json`.

```
"content_scripts": {
   "matches": [
       "*://matches:["<all_urls>"]/*",
       "*://js:["YOUR_JAVASCRIPT_FILE"]/*",
        "*://css:["YOUR_STYLE_FILE"]/*"
     ]
````

Bump up the version of the extension in `manifest.json` and save all files.

Navigate to chrome://extensions/ in Google Chrome. Enable 'Developer Mode' via the checkmark. Remove any existing versions of this extension. Select `Load unpacked extension...` and navigate to the folder containing manifest.json

If you are able to use this unpacked extension and it is working correctly, it is now safe to upload it to the Chrome WebStore.

Create a ZIP archive of the files in this directory

```
corona_block-chrome-extension
├── script.js
├── style.css
└── manifest.json
```


Link:
[chrome://extensions/?id=plmahaddfnkhakabikebgfhbbpbmmfmn]



