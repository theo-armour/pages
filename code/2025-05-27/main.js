
const COR = {

    // Used by GTV ~ github tree view
    user: "pushme-pullyou",
    repo: "tootoo-2025",
    branch: "main",
    version: "2025-05-27",
    
    menuTitle: "TooToo 2025",
    menuTitleEdit: "TooToo Edit",

    // Used by GFO ~ github file open
    defaultFile: "README.md",
    defaultFileEdit: "@@test.md",

    pathApps: "./",
    pathContent: "../../",

    filterFolders: [], //[ "code"],
    ignoreFiles: [], //[ "404.html", "favicon.ico", "index.html", "LICENSE", "readme.html" ],

    urlBaseAPI: "https://api.github.com/repos/pushme-pullyou/tootoo-2025/contents/",
    urlSource: "https://github.com/pushme-pullyou/tootoo-2025/tree/main/",
    urlPathApps: "https://pushme-pullyou.github.io/tootoo-2025/tootoo/",
    urlPathContent: "https://pushme-pullyou.github.io/tootoo-2025/",
    urlPushPath: "https://pushme-pullyou.github.io/tootoo-2025/tootoo/",

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

