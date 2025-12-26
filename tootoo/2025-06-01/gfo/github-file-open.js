
function onHashChange() {

  COR.hash = hash = location.hash.slice(1);

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

  //console.log("hash", hash, "url", COR.pathContent);

  if (/\.(md|txt|ini)$/i.test(hash)) {

    if (hash.includes("@@")) {

      COR.hash = hash.slice(2);

      console.log("notesy", COR.hash);

      divMainContent.innerHTML =
        `<iframe id=ifr class="iframe-resize" src="${COR.pathApps}./ggpf/github-get-put-file.html"><iframe>`;

    } else {

      console.log("getHTMLfromURL", hash);

      getHTMLfromURL(hash);

    }

  } else if (/\.(jpg|jpeg|png|gif|svg|ico|bmp|tiff|webp)$/i.test(hash)) {

    console.log("img", hash);

    divMainContent.innerHTML = `<img src="${COR.pathContent}${hash}" ></img>`;

  } else if (hash === "LICENSE") {

    console.log("getHTMLfromURL", hash);

    getHTMLfromURL(hash);

  } else {

    console.log("else", COR.urlPathContent + hash);

    divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="${COR.urlPathContent}${hash}" ></iframe>`
  }

  setFileVisible();

}


function getHTMLfromURL(hash = COR.hash) {

  //console.log("hash", COR.pathContent + COR.hash);

  showdown.setFlavor("github");
  const options = { openLinksInNewWindow: false, excludeTrailingPunctuationFromURLs: true, ghMention: true, simplifiedAutoLink: true, simpleLineBreaks: true, emoji: true };

  const xhr = new XMLHttpRequest();
  xhr.open("get", COR.pathContent + hash, true);
  xhr.onload = () => {
    let txt = xhr.responseText;
    txt = txt.replace(/<!--@@@/g, "").replace(/@@@-->/g, "");
    divMainContent.innerHTML = new showdown.Converter(options).makeHtml(txt);
    window.scrollTo(0, 0);
  };
  xhr.onerror = () => {
    divMainContent.innerHTML = `
      <div style="padding: 20px; color: #d73a49; background: #ffeaea; border: 1px solid #d73a49; border-radius: 4px;">
        <h3>Network Error</h3>
        <p>Failed to load file: ${hash}</p>
        <p>Please check your internet connection and try again.</p>
        <button onclick="onHashChange()" style="margin-top: 10px; padding: 5px 10px;">Retry</button>
      </div>
    `;
  };
  xhr.send(null);

  let title = hash.split("/").pop()
    .split("-")
    .filter(x => x.length > 0)
    //.map((x) => (x.charAt(0).toUpperCase() + x.slice(1)))
    .join(" ");
  document.title = `${COR.menuTitle}: ` + title;

}