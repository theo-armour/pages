
// copyright 2025 Theo Armour. MIT license.

// [X]MLHTTPRequest [G]itHub [P]ush (XGP)

const XGP = {

    base: "https://api.github.com/repos/pushme-pullyou/tootoo-2025/contents/",
    path: "test.md", // Default file
    //branch: "main",

    githubContent: "", // Content as of last successful load/save from GitHub
    sha: "",           // SHA of XGP.githubContent

    isSyncing: false,  // True if a sync operation is in progress
    lastSyncTime: 0, // Timestamp of the last sync attempt

    //notesyURL: "file:///c%3A/Users/tarmo/OneDrive/Documents/GitHub/theo-armour-qdata/apps/notesy/2025-05-21/notesy.html#",

    notesyURL: "https://pushme-pullyou.github.io/tootoo-2025/apps/tootoo/#",
    commitMessage: "notesy: file update" // Default commit message

};


//if (window.self === window.top) { 

init();

//} // else use iframe onload

function init(url = XGP.path) {

    console.log("url", url);

    XGP.url = url; // Set initial URL (can be overridden by hash)

    //aPath.title = document.head.querySelector("[ name=version ]").content;

    //githubAccessToken();

   //window.addEventListener("hashchange", fileDisplay, false);

    window.addEventListener("beforeunload", checkForChange);

    divMainContent.addEventListener('blur', requestSync); // Changed from onBlur -> getSha to requestSync

    // divMainContent.addEventListener('focus', onFocus); // Removed onFocus save trigger

    //autoSave(); // Will call requestSync

    //XGP.url = location.hash ? location.hash : XGP.url;

    //onHashChange(); // Load initial file based on hash or default XGP.url

    //fetchMarkdown();
};


function githubAccessToken() {

    XGP.accessToken = localStorage.getItem("githubAccessToken") || "";

    //console.log("XGP.accessToken", XGP.accessToken);

    if (!XGP.accessToken || XGP.accessToken === "" || XGP.accessToken === "null") {

        XGP.accessToken = prompt("Enter GitHub Personal Access Token");

        localStorage.setItem("githubAccessToken", XGP.accessToken);

    }
}


function fileDisplay( hash) {

    //const hash = location.hash ? location.hash.slice(3) : XGP.url;
    //const hash = location.hash.slice(1);

    //console.log( "hash", hash );

    XGP.url = XGP.base + hash;
    console.log("XGP.url", XGP.url);

    XGP.fileName = XGP.url.split("/").pop();
    //console.log("onHashChange", XGP.fileName);	

    //XGP.base = XGP.url.split("contents")[0] + "contents/";
    //XGP.path = XGP.url.split("contents")[1].slice(1);
    //XGP.extension = XGP.fileName.split( "." ).pop();

    //console.log("XGP.base", XGP.base);

    fetchMarkdown();

};


function checkForChange(event) {

    if (divMainContent.innerText === XGP.githubContent) { return; } // Compare with githubContent

    if (!XGP.url.endsWith("md")) return;

    console.log("checkForChange", XGP.fileName);

    event.preventDefault();

    event.returnValue = "";

};


function onBlur(event) {

    // This function is now directly requestSync, so onBlur can be removed if not used otherwise
    // For now, keep original onBlur structure if it had other purposes, but its call to getSha is replaced.
    // If it only called getSha, it can be removed and requestSync used directly in addEventListener.
    // Based on current code, it seems it only added a message and called getSha.
    // We'll simplify by having the event listener call requestSync directly.
    // The `divMessage.innerText += " onBlur";` was likely for debugging and can be removed for cleaner messages.
    requestSync();

};


function fetchMarkdown(event) {

    const xhrFetch = new XMLHttpRequest(); // Localized variable

    xhrFetch.open("get", XGP.url, true);
    xhrFetch.setRequestHeader("Authorization", "token " + XGP.accessToken);
    xhrFetch.responseType = "json";
    xhrFetch.onload = () => { // Changed to arrow function for brevity, `this` context not an issue here
        if (xhrFetch.status === 200) {
            onLoad(xhrFetch.response); // Pass the response object
        } else if (xhrFetch.status === 401 || xhrFetch.status === 403) {
            alert("GitHub Authorization Error: Could not fetch file. Your token might be invalid or expired. Please try deleting the token (delSha button) and re-entering it.");
            divMessage.innerText = `Error fetching file (Auth ${xhrFetch.status})`;
            XGP.githubContent = ""; // Clear content as fetch failed
            XGP.githubContent = "";
            XGP.sha = "";
            autoSave();
            divMainContent.innerText = "Error loading file. Please check your GitHub token and refresh.";
        } else if (xhrFetch.status === 404) {
            alert("File not found on GitHub. Please check the URL/path.");
            divMessage.innerText = `Error fetching file (Not Found ${xhrFetch.status})`;
            XGP.githubContent = "";
            XGP.sha = "";
            autoSave();
            divMainContent.innerText = `File not found: ${XGP.url}`;
        }
        else {
            alert(`Error fetching file: GitHub API returned status ${xhrFetch.status}.\\n${xhrFetch.responseText}`);
            divMessage.innerText = `Error fetching file (Status ${xhrFetch.status})`;
            XGP.githubContent = "";
            XGP.sha = "";
            autoSave();
            divMainContent.innerText = "Error loading file content.";
        }
    };
    xhrFetch.onerror = () => {
        alert("Network error: Could not fetch file from GitHub.");
        divMessage.innerText = "Network error fetching file.";
        XGP.githubContent = "";
        XGP.sha = "";
        autoSave();
        divMainContent.innerText = "Error loading file due to network issue.";
    };
    xhrFetch.send(null);
}


function onLoad(response) { // Parameter is now the response object from successful fetch

    // https://developer.mozilla.org/en-US/docs/Glossary/Base64#solution_1_%E2%80%93_escaping_the_string_before_encoding_it
    // console.log( "content", response );

    let content = decodeURIComponent(escape(window.atob(response.content)));
    content = content.replace(/\\<!--@@@/, " ).replace /\\@@@--\\>/, ");

    divMainContent.innerText = content;
    XGP.githubContent = content; // Set the baseline content
    XGP.sha = response.sha;      // Set the SHA for this content

    divMessage.innerText = `Open: ${XGP.fileName} ${new Date().toLocaleString().slice(11, -3)} B:${content.length.toLocaleString()}`;

    //aSource.href = response.html_url;

   // aPath.href = XGP.notesyURL + XGP.url;

    //spnTitle.innerHTML = XGP.fileName.split(".").shift();

    //document.title = spnTitle.innerText;

    window.scrollTo(0, 0);

    //autoSave();


};


function autoSave() {

    if (!XGP.saveInterval) {
        // Calls requestSync instead of getSha
        XGP.saveInterval = setInterval(requestSync, 15000); // 15 seconds

    } else {

        clearInterval(XGP.saveInterval);
        XGP.saveInterval = null;

    }

};


// Replaces getSha and putFileToGitHub with a new flow
function requestSync() {
    const editorContent = divMainContent.innerText;

    if (XGP.isSyncing) {
        //console.log("Sync already in progress. Aborting new request.");
        divMessage.innerText = "Sync in progress... please wait.";
        return;
    }

    if (editorContent === XGP.githubContent) {
        //console.log("No changes to sync.");
        // Optionally update message: divMessage.innerText = "No changes to save.";
        return;
    }

    if (!XGP.url) {
        alert("No file URL specified. Cannot save.");
        return;
    }
    if (!XGP.accessToken) {
        alert("GitHub token not available. Please set it first (you might need to reload or use 'delSha' then reload).");
        githubAccessToken(); // Attempt to get it again
        if (!XGP.accessToken) return;
    }


    XGP.isSyncing = true;
    divMessage.innerText = `Syncing ${XGP.fileName}...`;
    XGP.lastSyncTime = Date.now();

    // Step 1: Get the latest SHA for the file
    const getShaXhr = new XMLHttpRequest();
    getShaXhr.open("GET", XGP.url, true);
    getShaXhr.setRequestHeader("Authorization", "token " + XGP.accessToken);
    getShaXhr.responseType = "json";

    getShaXhr.onload = () => {
        if (getShaXhr.status === 200) {
            XGP.sha = getShaXhr.response.sha; // Update SHA to the latest
            doPutContent(editorContent); // Proceed to save with the fresh SHA
        } else if (getShaXhr.status === 404) {
            // File might have been deleted, or it's a new file.
            // For a new file, the SHA would be absent. GitHub's API for create file doesn't need SHA.
            // For simplicity here, we'll assume if GET for SHA fails with 404, we might be creating.
            // The PUT operation will create if file doesn't exist and no SHA is provided,
            // OR update if SHA is provided and matches.
            // If we get 404 here, it means the file doesn't exist. So, we shouldn't provide an XGP.sha.
            console.log("File not found when getting SHA. Attempting to create.");
            XGP.sha = ""; // No SHA for new file creation via PUT
            doPutContent(editorContent);
        } else {
            alert(`Error getting file version from GitHub (Status ${getShaXhr.status}). Cannot save.\\n${getShaXhr.responseText}`);
            divMessage.innerText = `Error preparing sync (SHA fetch failed ${getShaXhr.status})`;
            XGP.isSyncing = false;
        }
    };

    getShaXhr.onerror = () => {
        alert("Network error while trying to get file version from GitHub. Cannot save.");
        divMessage.innerText = "Network error (SHA fetch). Sync failed.";
        XGP.isSyncing = false;
    };

    getShaXhr.send(null);
}

function doPutContent(contentToSave) {
    const codedData = window.btoa(unescape(encodeURIComponent(contentToSave)));

    const bodyPayload = {
        "branch": XGP.branch,
        "content": codedData,
        "message": `${XGP.commitMessage} (${XGP.fileName})`
    };

    // Only include SHA if it exists (for updates). If XGP.sha is empty/null, it's a create attempt.
    if (XGP.sha) {
        bodyPayload.sha = XGP.sha;
    }

    const body = JSON.stringify(bodyPayload);

    const putXhr = new XMLHttpRequest();
    putXhr.open("PUT", XGP.url, true);
    putXhr.setRequestHeader("Authorization", "token " + XGP.accessToken);
    putXhr.setRequestHeader("Content-Type", "application/json");

    putXhr.onload = () => {
        const responseStatus = putXhr.status;
        const responseText = putXhr.responseText;

        if (responseStatus === 200 || responseStatus === 201) { // 200 for update, 201 for create
            XGP.githubContent = contentToSave;
            try {
                const jsonResponse = JSON.parse(responseText);
                XGP.sha = jsonResponse.content.sha; // Update SHA from server response
            } catch (e) {
                console.error("Error parsing PUT response JSON:", e);
                // SHA might not be updated if parsing fails, but content is saved.
            }
            divMessage.innerText = `Saved: ${XGP.fileName} ${new Date().toLocaleString().slice(11, -3)} B:${XGP.githubContent.length.toLocaleString()}`;
        } else if (responseStatus === 409 || responseStatus === 422) { // Conflict or Unprocessable (often SHA mismatch)
            alert("Save failed: The file has changed on GitHub, or there was a validation issue.\\n\\nPlease copy your current changes, refresh the page, then paste your changes and try saving again.");
            divMessage.innerText = `Save failed (conflict/validation ${responseStatus}). File changed on server or invalid data.`;
        } else if (responseStatus === 401 || responseStatus === 403) {
            alert(`Save failed: GitHub Authorization error (Status ${responseStatus}).\\nYour GitHub token might be invalid or expired. Please try deleting the token (delSha button) and re-entering it.`);
            divMessage.innerText = `Save failed (Authorization Error ${responseStatus})`;
        } else {
            alert(`Save failed: GitHub API returned status ${responseStatus}.\\n${responseText}`);
            divMessage.innerText = `Save failed (error ${responseStatus})`;
        }
        XGP.isSyncing = false;
        XGP.lastSyncTime = Date.now(); // Update regardless of success to prevent rapid retries if issue persists
    };

    putXhr.onerror = () => {
        alert("Save failed: Network error or unable to connect to GitHub to save the file.");
        divMessage.innerText = "Save failed (network error)";
        XGP.isSyncing = false;
        XGP.lastSyncTime = Date.now();
    };

    putXhr.send(body);
}


