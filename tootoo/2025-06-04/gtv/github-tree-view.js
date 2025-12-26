const user = COR.user;
const repo = COR.repo;
const branch = COR.branch;

const filterFolders = COR.filterFolders;
const ignoreFiles = COR.ignoreFiles;

const baseUrl = 'https://api.github.com';

async function fetchGitHubRepoContents(user, repo) {

  const response = await fetch(`${baseUrl}/repos/${user}/${repo}/git/trees/${branch}?recursive=1`);  //{ headers }
  const { tree } = await response.json();
  const div = document.getElementById('divNavTreeView');

  const createTree = (items, parentPath) => {
    const folderContents = document.createElement('div');
    folderContents.className = 'folder-contents';

    const trees = items.filter(item => item.type === 'tree');
    const blobs = items.filter(item => item.type === 'blob');

    trees.forEach(item => {
      // Skip creating a details tag if the folder path is in filterFolders
      if (filterFolders.includes(item.path)) {
        return;
      }

      const details = document.createElement('details');
      const summary = document.createElement('summary');

      // Format folder names: replace hyphens with spaces
      const folderName = item.path.replace(parentPath, '');
      summary.textContent = formatDisplayName(folderName, true);

      // Add a special class for top-level folders
      if (parentPath === '') {
        details.classList.add('top-level-folder');
      }

      // Add right-click context menu functionality
      details.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
        showContextMenu(e, details);
      });

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

    // Check if this is a "blog" folder by looking at the parent folder name
    const isBlogFolder = parentPath === '' ? false :
      parentPath.split('/').some(part => part === 'blog') ||
      (parentPath.split('/').length === 1 && parentPath.replace('/', '') === 'date-samples');

    // Sort blobs if this is a date-samples folder and files have date format
    let sortedBlobs = blobs;
    if (isBlogFolder) {
      const datePattern = /^\d{4}-\d{2}-\d{2}/;
      const hasDateFiles = blobs.some(item => {
        const fileName = item.path.replace(parentPath, '');
        return datePattern.test(fileName);
      });

      if (hasDateFiles) {
        sortedBlobs = [...blobs].sort((a, b) => {
          const fileNameA = a.path.replace(parentPath, '');
          const fileNameB = b.path.replace(parentPath, '');

          const dateMatchA = fileNameA.match(datePattern);
          const dateMatchB = fileNameB.match(datePattern);

          // If both have date format, sort by date (newest first)
          if (dateMatchA && dateMatchB) {
            return dateMatchB[0].localeCompare(dateMatchA[0]);
          }

          // If only one has date format, prioritize the dated one
          if (dateMatchA && !dateMatchB) return -1;
          if (!dateMatchA && dateMatchB) return 1;

          // If neither has date format, sort alphabetically
          return fileNameA.localeCompare(fileNameB);
        });
      }
    }

    sortedBlobs.forEach(item => {

      const fileName = item.path.replace(parentPath, '');

      const fileLink = document.createElement('a');
      fileLink.textContent = formatDisplayName(fileName);
      fileLink.href = `#${item.path}`;

      const readmeLink = document.createElement('a');
      readmeLink.innerHTML = COR.iconExternalLink;
      readmeLink.href = `${COR.pathApps}readme.html#${COR.pathContent}${item.path}`;
      readmeLink.target = '_blank';

      const fileContainer = document.createElement('p');
      fileContainer.appendChild(fileLink);
      fileContainer.appendChild(document.createTextNode(" "));
      fileContainer.appendChild(readmeLink);
      fileContainer.className = 'file-container';
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
      return item; //!filterFolders.includes(item.path);
    }
  });

  div.appendChild(createTree(topLevelItems, ''));
  setFileVisible();
  initKeyboardNavigation();

}

// Open parent details elements to make the file-container visible
function setFileVisible() {
  const fileContainers = document.querySelectorAll('.file-container');
  //console.log("fileContainers", fileContainers);
  for (const container of fileContainers) {
    const link = container.querySelector('a');
    if (link && link.getAttribute('href') === '#' + COR.hash ) {
      let parentNode = container.parentNode;
      while (parentNode && parentNode.id !== "detNavMenu") {
        if (parentNode.tagName === 'DETAILS') {
          parentNode.open = true;
        }
        parentNode = parentNode.parentNode;
      }
      // Set focus to the link
      link.focus();
      break;
    }
  }

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

// Context menu functionality for details elements
let contextMenu = null;

function createContextMenu() {
  if (contextMenu) return contextMenu;
  
  contextMenu = document.createElement('div');
  contextMenu.className = 'context-menu';
  contextMenu.innerHTML = `
    <div class="context-menu-item" data-action="toggle-self">Toggle This Folder</div>
    <div class="context-menu-item" data-action="open-all">Open All Sub-folders</div>
    <div class="context-menu-item" data-action="close-all">Close All Sub-folders</div>
  `;
  
  document.body.appendChild(contextMenu);
  return contextMenu;
}

function showContextMenu(event, detailsElement) {
  const menu = createContextMenu();
  
  // Count sub-folders to determine if menu items should be enabled
  const subFolders = detailsElement.querySelectorAll('details');
  const openSubFolders = detailsElement.querySelectorAll('details[open]');
  
  // Update menu items based on current state
  const toggleSelfItem = menu.querySelector('[data-action="toggle-self"]');
  const openAllItem = menu.querySelector('[data-action="open-all"]');
  const closeAllItem = menu.querySelector('[data-action="close-all"]');
  
  // Update toggle self text
  if (detailsElement.hasAttribute('open')) {
    toggleSelfItem.textContent = 'Close This Folder';
  } else {
    toggleSelfItem.textContent = 'Open This Folder';
  }
  
  // Enable/disable sub-folder options based on availability
  if (subFolders.length === 0) {
    openAllItem.style.opacity = '0.5';
    openAllItem.style.pointerEvents = 'none';
    closeAllItem.style.opacity = '0.5';
    closeAllItem.style.pointerEvents = 'none';
  } else {
    openAllItem.style.opacity = '1';
    openAllItem.style.pointerEvents = 'auto';
    closeAllItem.style.opacity = '1';
    closeAllItem.style.pointerEvents = 'auto';
    
    // Update text to show count
    openAllItem.textContent = `Open All Sub-folders (${subFolders.length})`;
    closeAllItem.textContent = `Close All Sub-folders (${subFolders.length})`;
  }
  
  // Remove existing event listeners and add new ones
  const menuItems = menu.querySelectorAll('.context-menu-item');
  menuItems.forEach(item => {
    const newItem = item.cloneNode(true);
    item.parentNode.replaceChild(newItem, item);
  });
  
  // Add event listeners to new items
  menu.querySelector('[data-action="toggle-self"]').addEventListener('click', () => {
    if (detailsElement.hasAttribute('open')) {
      detailsElement.removeAttribute('open');
    } else {
      detailsElement.setAttribute('open', '');
    }
    hideContextMenu();
  });
  
  menu.querySelector('[data-action="open-all"]').addEventListener('click', () => {
    const subFolders = detailsElement.querySelectorAll('details');
    subFolders.forEach(folder => {
      folder.setAttribute('open', '');
    });
    hideContextMenu();
  });
  
  menu.querySelector('[data-action="close-all"]').addEventListener('click', () => {
    const subFolders = detailsElement.querySelectorAll('details');
    subFolders.forEach(folder => {
      folder.removeAttribute('open');
    });
    hideContextMenu();
  });
  
  // Position and show menu
  menu.style.left = event.pageX + 'px';
  menu.style.top = event.pageY + 'px';
  menu.style.display = 'block';
  
  // Hide menu when clicking elsewhere
  setTimeout(() => {
    document.addEventListener('click', hideContextMenu, { once: true });
    document.addEventListener('contextmenu', hideContextMenu, { once: true });
  }, 10);
}

function hideContextMenu() {
  if (contextMenu) {
    contextMenu.style.display = 'none';
  }
}

// Keyboard navigation functionality
function initKeyboardNavigation() {
  // Remove any existing keyboard event listeners
  document.removeEventListener('keydown', handleTreeViewKeyNavigation);
  
  // Add keyboard event listener
  document.addEventListener('keydown', handleTreeViewKeyNavigation);
}

function handleTreeViewKeyNavigation(event) {
  // Only handle arrow keys when focus is within the tree view or no specific element is focused
  const activeElement = document.activeElement;
  const treeViewContainer = document.getElementById('divNavTreeView');
  
  if (!treeViewContainer) return;
  
  // Check if focus is within the tree view or body (no specific focus)
  // Also allow navigation when focus is on main content area
  const mainContent = document.getElementById('divMainContent');
  const isInTreeView = treeViewContainer.contains(activeElement) || 
                       activeElement === document.body ||
                       (mainContent && mainContent.contains(activeElement));
  
  if (!isInTreeView) return;
  
  switch(event.key) {
    case 'ArrowUp':
      event.preventDefault();
      navigateToFile('previous');
      break;
    case 'ArrowDown':
      event.preventDefault();
      navigateToFile('next');
      break;
  }
}

function navigateToFile(direction) {
  const fileLinks = getAllFileLinks();
  if (fileLinks.length === 0) return;
  
  let currentIndex = getCurrentFileIndex(fileLinks);
  let nextIndex;
  
  if (direction === 'next') {
    nextIndex = (currentIndex + 1) % fileLinks.length; // Wrap to beginning
  } else {
    nextIndex = currentIndex <= 0 ? fileLinks.length - 1 : currentIndex - 1; // Wrap to end
  }
  
  const nextLink = fileLinks[nextIndex];
  if (nextLink) {
    // Ensure the parent folders are open so the link is visible
    ensureLinkVisible(nextLink);
    
    // Update the hash to navigate to the file
    const href = nextLink.getAttribute('href');
    if (href && href.startsWith('#')) {
      location.hash = href;
      // Focus will be set automatically by setFileVisible() called from onHashChange
    }
  }
}

function ensureLinkVisible(link) {
  // Open all parent details elements to make the link visible
  let parentNode = link.closest('.file-container').parentNode;
  while (parentNode && parentNode.id !== "divNavTreeView") {
    if (parentNode.tagName === 'DETAILS') {
      parentNode.open = true;
    }
    parentNode = parentNode.parentNode;
  }
}

function getAllFileLinks() {
  const treeViewContainer = document.getElementById('divNavTreeView');
  if (!treeViewContainer) return [];
  
  // Get all file links (not folder links)
  const fileContainers = treeViewContainer.querySelectorAll('.file-container');
  const fileLinks = [];
  
  fileContainers.forEach(container => {
    const link = container.querySelector('a[href^="#"]');
    if (link) {
      fileLinks.push(link);
    }
  });
  
  return fileLinks;
}

function getCurrentFileIndex(fileLinks) {
  const currentHash = location.hash;
  
  for (let i = 0; i < fileLinks.length; i++) {
    if (fileLinks[i].getAttribute('href') === currentHash) {
      return i;
    }
  }
  
  // If no current file is found, return -1 so next navigation starts from 0
  return -1;
}

fetchGitHubRepoContents(user, repo);
