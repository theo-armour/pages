
const COR = {

    version: "2025-05-26",

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
    urlBaseAPI: "https://api.github.com/repos/theo-armour/pages/contents/",
    

    iconExternalLink: "<img src='https://pushme-pullyou.github.io/assets/svg/icon-external-link.svg' width=16 >",
 	iconGitHub: `<img src="https://pushme-pullyou.github.io/assets/svg/mark-github.svg">`,
	iconInfo: `<img class=infoImg src="https://pushme-pullyou.github.io/assets/svg/noun_Information_585560.svg">`,
	iconRepo: "❦",

    menuTitle: "Theo Pages",
    

    filterFolders: [], //[ "code"],

    ignoreFiles: [], //[ "404.html", "favicon.ico", "index.html", "LICENSE", "readme.html" ],

}

if (location.protocol === "https:") {

    COR.pathContent = COR.urlPathContent;
    COR.pathApps = COR.urlPathApps + COR.version + "/";

} else {

    COR.pathContent = "../../";
    COR.pathApps = "./";

}

var urlBaseAPI = COR.urlBaseAPI;

//console.log( "COR.pathApps", COR.pathApps);
/* 0 to 360 10=red 120=green 240=blue */
let r = document.querySelector(':root');
r.style.setProperty('--main-hue', '120');
r.style.setProperty('--mnu-width', '17rem');

