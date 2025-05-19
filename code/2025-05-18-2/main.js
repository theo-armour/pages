
const COR = {

    // Used by GFO ~ github file open
    defaultFile: "README.md",
    pathContent: "../../",

   // Used by GTV ~ github tree view
    user: "theo-armour",
    repo: "pages",
    branch: "main",

    urlSource: "https://github.com/theo-armour/pages/",
    urlPathContent: "https://theo-armour.github.io/pages/",
    urlPushPath: "https://theo-armour.github.io/pages/",

    menuTitle: "Theo Pages",

    menuTitle: "TooToo 2025",
    version: "Version: 2025-05-18-2",

    filterFolders: [], //[ "code"],

    ignoreFiles: [], //[ "404.html", "favicon.ico", "index.html", "LICENSE", "readme.html" ],
}

if (location.protocol === "https:") {

    COR.pathContent = COR.urlPathContent;

} else {

    // COR.pathContent unchanged

}

/* 0 to 360 10=red 120=green 240=blue */
let r = document.querySelector(':root');
r.style.setProperty('--main-hue', '120');
r.style.setProperty('--mnu-width', '17rem');

