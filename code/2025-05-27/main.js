
const COR = {

    // Used by GTV ~ github tree view
    user: "theo-armour",
    repo: "pages",
    branch: "main",
    version: "2025-05-27",
    
    menuTitle: "TooToo 2025",
    menuTitleEdit: "TooToo Edit",

    // Used by GFO ~ github file open
    defaultFile: "README.md",
    defaultFileEdit: "@@README.md",

    pathApps: "./",
    pathContent: "../../",

    filterFolders: [], //[ "code"],
    ignoreFiles: [], //[ "404.html", "favicon.ico", "index.html", "LICENSE", "readme.html" ],

    urlBaseAPI: "https://api.github.com/repos/theo-armour/pages/contents/",
    urlSource: "https://github.com/theo-armour/pages/tree/main/",
    urlPathApps: "https://theo-armour.github.io/pages/tootoo/",
    urlPathContent: "https://theo-armour.github.io/pages/",
    urlPushPath: "https://theo-armour.github.io/pages/tootoo/",

    iconExternalLink: "<img src='https://pushme-pullyou.github.io/assets/svg/icon-external-link.svg' width=16 >",
 	iconGitHub: `<img src="https://pushme-pullyou.github.io/assets/svg/mark-github.svg">`,
	iconInfo: `<img src="https://pushme-pullyou.github.io/assets/svg/noun_Information_585560.svg">`,
	iconOpenClose: `<img src="https://pushme-pullyou.github.io/assets/svg/open-close-toggle.svg">`,
    iconPencil: `<img src="https://pushme-pullyou.github.io/assets/svg/https://pushme-pullyou.github.io/assets/svg/mark-github.svg" >`,
    iconRepo: `<img src=https://pushme-pullyou.github.io/assets/svg/dingbat.svg">`,

}

if (location.protocol === "https:") {

    COR.pathApps = COR.urlPathApps + COR.version + "/";
    COR.pathContent = COR.urlPathContent;

} else {

    COR.pathApps = "./";
    COR.pathContent = "../../";

}

//console.log( "COR.pathApps", COR.pathApps);
/* 0 to 360 10=red 120=green 240=blue */
let r = document.querySelector(':root');
r.style.setProperty('--main-hue', '120');
r.style.setProperty('--mnu-width', '17rem');

