# Notesy GGPF

## Concept

* Get and Put Markdown files to a private or public GitHub repo
* Display in HTML, supports details tag
* Edit in HTML
* Toggle display content as html, Markdown or HTML text
* Save as Markdown
* API and update via location.hash
* Autosave by time or on blur
* Check for change before exit
* Display Get and Put time and byte count
* Load test files
* My primary test bed for Markdown to HTML and back
* Footer dingbat to go to top of page

## Reminders

* Notesy expects the full URL
* Runs on its own and in an iframe
* Inits if it's on top; waits if it's in an iframe
* Its location.hash is all it needs
* Updates via href, hash and src

``` JavaScript
<div id="divMainContent">
    <iframe id=ifr src="github-get-put-file.html"></iframe>
</div>
```

## To Do / Wish List

* Notsey: retrieve 2024 data from archive mmmm
* Notsey: fix masthead link so that it points to the file in use and not the notes file.
* 2024-12-25 ~ improve styles?
* 2024-08-23 ~ more messages about onBlur
* 2024-08-23 ~ show time since last save
* 2023-10-15 ~ Add ability to save to local storage
* 2023-10-15 ~ Check save time across multiple iframes
* TooToo with Notesy support

## Change Log


### 2025-06-06

I've run scripts like this one countless times without issue. I am an experienced developer working with the console window open. It is is used interchangeably on GitHub and locally using "--allow-file-access-from-files". 

Can you see any "Gotchas" or anything interesting to tweak in the code?

### 2024-12-24

* Links in titles now work to launch the current file in new tab. Helps Trayo

### 2024-09-22

Done or dealt with

* 2024-09-22 ~  allow for comments in the Markdown: it's already in

### 2024-09-20

Done

* 2023-10-18 ~ Display .txt files as txt


### 2024-09-19

Is it finished? Notesy seems to be doing just about everything. I wanted to do. There may be a few more fixes. regex I can simplify. Better security for storing the password.

Done or dealt with

* 2024-08-23 ~ top row stays visible

### 2024-08-17

* Many fixes
* 2023-10-15 ~ Check alternatives to ShowDown &lt; not
* Ability to view content as pure text
* See if CKEditor be any better? &lt; not

### 2024-08-02

* Testing

### 2024-01-15

* <a href="http://README.md">README.md</a> update to qdata folder

### 2023-10-17

* Fixed: 2023-10-16 ~ Deal with three spaces in list items
* Fixed: 2023-10-15 ~ stop loading two files in iframes - double init() in Trayo

### 2023-10-15

* Mostly fixed: Fix notesey asterisk issues

### 05-08-2023

* add lastSaveTime: &gt; 30 seconds
* Add saving = true || false

### 2023-04-30

* Works well with links to snippet files in newwwtab
* Automatically creates Markdown link references to text that is a link. I did not want, but then again this allows the text of the link to be edited upon a reload

### 2023-04-10

* onBlur event update from window to divContent
* Add function reminder to tooltips
* Add getSha()
* Add delSha() function
* Will keep prompting for GitHub credentials until they are correct

### 2023-02-19

* Good cleanup

### 2023-02-17

* First commit

***

<center title="Hello! Click me to go up to the top"><a class="aDingbat" href="javascript:divContent.scrollTo(0,0);">❦</a></center>
