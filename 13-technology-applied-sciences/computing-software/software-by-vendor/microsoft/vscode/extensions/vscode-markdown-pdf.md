# vscode-markdown-pdf

## links

* https://github.com/yzane/vscode-markdown-pdf/tree/master
* https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf
* https://github.com/yzane/vscode-markdown-pdf#readme
* https://github.com/markdown-it/markdown-it-container

## markdown-pdf.css

"markdown-pdf.styles" is kept and editable in:
* C:\Users\tarmo\AppData\Roaming\Code\User\settings.json

```json
    "markdown-pdf.styles": [
        "C:\\Users\\tarmo\\OneDrive\\Documents\\GitHub\\theo-armour-agenda\\markdown-pdf.css",
        "C:\\Users\\tarmo\\OneDrive\\Documents\\GitHub\\markdown-pdf.css",
    ],
```

Elsewhere, as in Workspace  or Folder, it appears grayed out and it does not seem to be editable.

Last file in the array wins. Select the one you want by:

* Change the order in settings.json
* rename markdown-pdf.css to markdown-pdf-zzz.css

## Header and Footer Templates

Header and Footer Templates can be stored and ara available from a settings.json in amy(?) .vscode folder

Templates require a div, span or ?? with at least a font-size:

```html
<div style=\"font-size: 12pt; margin-left: 0.8in;">text</div>
```

If margin-left for body text is 1in then header template needs margin-left: 0.8in; in oder to line up


## Tips

Format: letter

Margins: al 1in

Footer Template

<div style="color:#880000;font-size: 12pt; margin-left: 0.75in; ">%%ISO-DATE%%</div> <div style="color: #880000;font-size: 12pt;margin-left: auto;margin-right: 0.75in;"> Page <span class='pageNumber'></span> / <span class='totalPages'></span> </div>

<div style="font-size: 10px;margin: 0 auto;"> <span class='pageNumber'></span> / <span class='totalPages'></span></div>

<div style="font-size: 9px; margin: 0 auto;"> <span class='pageNumber'></span> / <span class='totalPages'></span></div>

Header Template

"<div></div>"

<div style="color:#880000;font-size: 12pt; margin-left: 0.75in;"> <span class='title'></span> </div> <div style="color:#880000;font-size: 12pt; margin-left: auto;margin-right: 0.75in;"><i>Heritage Happenings</i></div>

<div style="color:#880000;font-size: 12pt; margin-left: 1in; \"> <span class='title'></span> </div> <div style="color:#880000;font-size: 12pt; margin-left: auto;margin-right: 0.75in;\"><i></i></div>


## New Header

<div style=\"color:#880000;font-size: 12pt; margin-left: 0.8in; \"> <span>Agenda</span></div> <div style=\"color:#880000;font-size: 12pt; margin-left: auto;margin-right: 1in;\">Page <span class='pageNumber'></span> / <span class='totalPages'></span></div>

## New Footer

<div style=\"color:#880000;font-size: 12pt; margin-left: 0.8in; \" class='title'></div> <div style=\"color:#880000;font-size: 12pt; margin-left: auto; margin-right: 1in;\" class='date'></div>

### Settings

```json
  // pdf only. Display header and footer.
  "markdown-pdf.displayHeaderFooter": true,
  // pdf only. HTML template for the print footer.
  "markdown-pdf.footerTemplate": "<div style=\"color:#880000; font-size: 12pt; margin-left: 0.8in; \" class='title'></div> <div style=\"color:#880000; font-size: 12pt; margin-left: auto; margin-right: 0.8in;\" class='date'></div>",
  // pdf only. Paper format [Letter, Legal, Tabloid, Ledger, A0, A1, A2, A3, A4, A5, A6].
  "markdown-pdf.format": "Letter",
  // pdf only. HTML template for the print header.
  "markdown-pdf.headerTemplate": "<div style=\"color:#880000;font-size: 12pt; margin-left: 0.8in; \"> <span>Agenda</span></div> <div style=\"color:#880000; font-size: 12pt; margin-left: auto; margin-right: 0.8in;\">Page <span class='pageNumber'></span> / <span class='totalPages'></span></div>",
  // pdf only. Paper height, accepts values labeled with units(mm, cm, in, px). If it is set, it overrides the markdown-pdf.format option.
  "markdown-pdf.height": "",
  // Page Option. Border bottom. units: mm, cm, in, px
  "markdown-pdf.margin.bottom": "0.75in",
  // Page Option. Border left. units: mm, cm, in, px
  "markdown-pdf.margin.left": "1in",
  // Page Option. Border right. units: mm, cm, in, px
  "markdown-pdf.margin.right": "1in",
  // Page Option. Border Top. units: mm, cm, in, px
  "markdown-pdf.margin.top": "0.75in",
  // pdf only. Paper orientation. portrait or landscape.
  "markdown-pdf.orientation": "portrait",
  // pdf only. Paper ranges to print, e.g., '1-5, 8, 11-13'.
  "markdown-pdf.pageRanges": "",
  // pdf only. Print background graphics.
  "markdown-pdf.printBackground": false,
  // pdf only. Paper width, accepts values labeled with units(mm, cm, in, px). If it is set, it overrides the markdown-pdf.format option.
  "markdown-pdf.width": ""
```
