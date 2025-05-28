const user = COR.user;
const repo = COR.repo;
const branch = COR.branch;
const pathContent = COR.pathContent

const filterFolders = COR.filterFolders;
const ignoreFiles = COR.ignoreFiles;

const baseUrl = 'https://api.github.com';

async function fetchGitHubRepoContents(user, repo) {

  const headers = new Headers({
    'Accept': 'application/vnd.github+json',
    //'Authorization': `token ${ accessToken }`
  });

  const response = await fetch(`${baseUrl}/repos/${user}/${repo}/git/trees/${branch}?recursive=1`, { headers });
  const { tree } = await response.json();
  const div = document.getElementById('divNavTreeView');

  const createTree = (items, parentPath) => {
    const folderContents = document.createElement('div');
    folderContents.className = 'folder-contents';

    const trees = items.filter(item => item.type === 'tree');
    const blobs = items.filter(item => item.type === 'blob');

    trees.forEach(item => {
      const details = document.createElement('details');
      const summary = document.createElement('summary');

      // Format folder names: replace hyphens with spaces
      const folderName = item.path.replace(parentPath, '');
      summary.textContent = formatDisplayName(folderName, true);

      // Add a special class for top-level folders
      if (parentPath === '') {
        details.classList.add('top-level-folder');
      }

      details.appendChild(summary);

      const childItems = tree.filter(child => child.path.startsWith(item.path + '/') && child.path.split('/').length === item.path.split('/').length + 1);
      details.appendChild(createTree(childItems, item.path + '/'));

      folderContents.appendChild(details);

    });

    // Add a horizontal rule between folders and files if both exist
    if (trees.length > 0 && blobs.length > 0) {
      const hr = document.createElement('hr');
      folderContents.appendChild(hr);
    }

    blobs.forEach(item => {

      const fileName = item.path.replace(parentPath, '');

      const fileLink = document.createElement('a');
      fileLink.textContent = formatDisplayName(fileName);
      fileLink.href = `#${item.path}`;

      const readmeLink = document.createElement('a');
      readmeLink.innerHTML = " <img src='https://pushme-pullyou.github.io/assets/svg/icon-external-link.svg' width=16 >";
      readmeLink.href = `${pathContent}/readme.html#${item.path}`;
      readmeLink.target = '_blank';

      const fileContainer = document.createElement('p');
      fileContainer.style.marginBottom = '6px'; // Add bottom margin for spacing
      fileContainer.style.marginTop = '0px';     // No top margin needed

      const space = document.createElement('span');
      space.innerHTML = " ";

      fileContainer.appendChild(fileLink);
      fileContainer.appendChild(space);
      fileContainer.appendChild(readmeLink);

      folderContents.appendChild(fileContainer);
    });

    return folderContents;
  };

  let topLevelItems = tree.filter(item => {
    const pathParts = item.path.split('/');
    return pathParts.length === 1;
  });

  topLevelItems = topLevelItems.filter(item => {
    if (item.type === 'blob') {
      return !ignoreFiles.includes(item.path);
    } else {
      // Folders
      return !filterFolders.includes(item.path);
    }
  });

  div.appendChild(createTree(topLevelItems, ''));

}

function formatDisplayName(fileName, isFolder = false) {
  // Replace hyphens with spaces
  let displayName = fileName.replace(/-/g, ' ');

  // Remove .md extension if present
  if (displayName.toLowerCase().endsWith('.md')) {
    displayName = displayName.slice(0, -3);
  }

  return displayName;

}

fetchGitHubRepoContents(user, repo);
