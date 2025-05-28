
initGFO();

function initGFO() {

  showdown.setFlavor("github");

  if (!location.hash) { location.hash = COR.defaultFile; }

  if (location.hash.endsWith(".md")) {

    onHashChange();

  } else {

    const url = COR.pathContent + location.hash.slice(1);

    divMainContent.innerHTML = `<iframe class=iframe-resize src="${ url }" height=100% width=100% ><iframe>`;

  }

  window.addEventListener("hashchange", onHashChange, false);

}


function onHashChange() {

  // if no file extension then probably an internal link
  if (!location.hash.includes(".")) { return; }

  const url = COR.pathContent + location.hash.slice(1);

  let title =  url.split("/").pop()
    .split("-")
    .filter(x => x.length > 0)
    .map((x) => (x.charAt(0).toUpperCase() + x.slice(1)))
    .join(" ");
  document.title = title;

  if (location.hash.endsWith(".md")) {

    const options = { openLinksInNewWindow: false, excludeTrailingPunctuationFromURLs: true, ghMention: true, simplifiedAutoLink: true, simpleLineBreaks: true, emoji: true };
    const xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.onload = () => {
      let txt = xhr.responseText;
      //txt = txt.replace(/\<!--@@@/, "").replace(/\@@@-->/, "");
      divMainContent.innerHTML = new showdown.Converter(options).makeHtml(txt);
      window.scrollTo(0, 0);
    };
    xhr.send(null);

  } else {

    divMainContent.innerHTML = `<iframe class=iframe-resize src="${ url }" height=100% width=100% ><iframe>`;

  }

}

