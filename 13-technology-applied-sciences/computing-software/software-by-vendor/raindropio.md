# Raindrop.io Read Me

* https://raindrop.io
* https://raindrop.io/TheoA

## App

* https://app.raindrop.io/my/0
* https://app.raindrop.io/account/login

## Links

* https://help.raindrop.io/import#supported-formats


## CSV format

* Comma delimited
* Columns: url, folder, title, note, tags, created
* url column is required, other are optional
* use / to specify nested folder, like a/b/c
* to have multiple tags just put them in quotes, like "tag1, tag2"
* created column should have Unix timestamp or date in ISO 8601 format
* Column order doesn't matter

``` csv
folder,url,title,note,tags,created
"Folder",http://google.com,Google,"Note","search, app",1629980125
"Folder/Nested folder",http://yahoo.com,Yahoo,"Note","search, app",1629980125
```

### Validate CSV file

https://csvlint.io/



***

<center title="Hello! Click me to go up to the top" ><a class=aDingbat href=javascript:window.scrollTo(0,0);> ❦ </a></center>
