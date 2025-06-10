let divContent;

function onHashChange() {

  COR.hash = hash = location.hash.slice(1);
  
  divContent = COR.divContent;

  //console.log( "div", divContent );

  // Validate hash to prevent potential security issues
  if (!hash || hash.trim() === '') {
    hash = COR.defaultFile;
    location.hash = hash;
    return;
  }

  // Basic path traversal protection
  if (hash.includes('../') || hash.includes('..\\')) {
    console.warn('Invalid path detected:', hash);
    hash = COR.defaultFile;
    location.hash = hash;
    return;
  }

  // Update breadcrumb navigation
  if (typeof updateBreadcrumb === 'function') {
    updateBreadcrumb(hash);
  }

  //console.log("hash", hash, "url", COR.pathContent);

  if (/\.(md|txt|ini)$/i.test(hash)) {

    if (hash.includes("@@")) {

      console.log("notesy", COR.hash);

      //COR.hash = hash.replace("@@", "");
      divContent.innerHTML =

        `<iframe id=ifr class="iframe-resize" onload=onLoad() src="${COR.pathApps}/ggpf/github-get-put-file.html"><iframe>`;

    } else {

      console.log("getHTMLfromURL", hash);

      getHTMLfromURL(hash);

    }

  } else if (/\.(jpg|jpeg|png|gif|svg|ico|bmp|tiff|webp)$/i.test(hash)) {

    console.log("img", hash);
    
    divContent.innerHTML = `<img src="${COR.pathContent}${hash}" ></img>`;

  } else if (hash === "LICENSE") {

    console.log("getHTMLfromURL", hash);

    getHTMLfromURL(hash);

  } else {

    console.log("else", COR.urlPathContent + hash);
    divContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="${COR.urlPathContent}${hash}" ></iframe>`
  }

  // see github-tree-view.js
  setFileVisible();

}

function onLoad() {

  //console.log( "COR.urlBaseAPI + COR.hash", COR.urlBaseAPI + COR.hash );
  ifr.contentWindow.init();
  ifr.contentWindow.location.hash = COR.urlBaseAPI + COR.hash;

}

function getHTMLfromURL(hash = COR.hash) {

  //console.log("hash", COR.pathContent + COR.hash);

  showdown.setFlavor("github");
  const options = { openLinksInNewWindow: false, excludeTrailingPunctuationFromURLs: true, ghMention: true, simplifiedAutoLink: true, simpleLineBreaks: true, emoji: true };

  const xhr = new XMLHttpRequest();
  xhr.open("get", COR.pathContent + hash, true);
  xhr.onload = () => {
    let txt = xhr.responseText;
    //txt = txt.replace(/<!--@@@/g, "").replace(/@@@-->/g, "")
    divContent.innerHTML = new showdown.Converter(options).makeHtml(txt);
    window.scrollTo(0, 0);
  };
  xhr.onerror = (e) => { console.log( "e", e); };
  xhr.send(null);

  let title = hash.split("/").pop()
    .split("-")
    .filter(x => x.length > 0)
    //.map((x) => (x.charAt(0).toUpperCase() + x.slice(1)))
    .join(" ");
  document.title = `${COR.menuTitle}: ` + title;

}