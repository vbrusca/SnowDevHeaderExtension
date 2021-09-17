# SnowDevHeaderExtension
A project that includes the source code for FireFox and Chromium based browser extensions that make the ServiceNow developer drop downs much wider.

Original Header:
![alt text](https://github.com/vbrusca/SnowDevHeaderExtension/blob/main/images/snow_header_old.png)

Modified Header:
![alt text](https://github.com/vbrusca/SnowDevHeaderExtension/blob/main/images/snow_header_new.png)

Steps to install locally for Chromium based browsers:
1. Unzip the archive in a persistent place like documents etc.
2. Open the extensions page in chromium based browser and toggle developer mode or look up how to do so.
3. Select the load unpacked option and choose the unzipped archive made in step 1.
4. Pin the extension to enable it everywhere. It will look for URLs with the string 'service-now' in them and attempt to adjust 4 style rules, very low impact.
5. Should automatically adjust any tabs with the matching string in the location URL.

Steps to install locally for FireFox based browsers:
1. Unzip the archive in a persistent location like documents etc.
2. Navigate to "about:debugging#/runtime/this-firefox" in FF
3. Select "Load Temporary Add-on" from the page
4. Browse and choose any file in the folder you created in step 1
5. Go to the "about:addons" page. Click the "..." next to the "SnowDevExt Plugin" extension, select manage, turn on "Run in Private Windows"
6. It will look for URLs with the string 'service-now' in them and attempt to adjust 4 style rules, very low impact.
7. Should automatically adjust any tabs with the matching string in the location URL.
