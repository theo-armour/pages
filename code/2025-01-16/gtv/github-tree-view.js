const user = COR.user;
const repo = COR.repo;
const branch = COR.branch;
//const path = COR.pathContent;
const filterFolders = COR.filterFolders;
const ignoreFiles = COR.ignoreFiles;
// let accessToken = localStorage.getItem( "githubAccessToken" ) || "";

// if ( !accessToken || accessToken === "" || accessToken === "null" ) {

//   accessToken = prompt( "Enter GitHub Personal Access Token" );

//   localStorage.setItem( "githubAccessToken", accessToken );

// }
var readmeLink

async function fetchGitHubRepoContents ( user, repo ) {
  const baseUrl = 'https://api.github.com';

  const headers = new Headers( {
    'Accept': 'application/vnd.github+json',
    //'Authorization': `token ${ accessToken }`
  } );

  const response = await fetch( `${ baseUrl }/repos/${ user }/${ repo }/git/trees/${ branch }?recursive=1`, { headers } );
  const { tree } = await response.json();
  const div = document.getElementById( 'divContent' );

  const createTree = ( items, parentPath ) => {
    const folderContents = document.createElement( 'div' );
    folderContents.className = 'folder-contents';

    const trees = items.filter( item => item.type === 'tree' )
      //.filter( item => filterFolders.includes( item ) );
    const blobs = items.filter( item => item.type === 'blob' );

    //console.log( "trees", trees );
    trees.forEach( item => {
      const details = document.createElement( 'details' );
      const summary = document.createElement( 'summary' );
      summary.textContent = item.path.replace( parentPath, '' );
      details.appendChild( summary );

      const childItems = tree.filter( child => child.path.startsWith( item.path + '/' ) && child.path.split( '/' ).length === item.path.split( '/' ).length + 1 );
      details.appendChild( createTree( childItems, item.path + '/' ) );

      folderContents.appendChild( details );
    } );

    blobs.forEach( item => {
      const fileLink = document.createElement( 'a' );
      fileLink.textContent = item.path.replace( parentPath, '' );
      fileLink.href = `#${ item.path }`;
      //fileLink.target = '_blank';

      readmeLink = document.createElement( 'a' );
      readmeLink.innerHTML = " <img src='https://pushme-pullyou.github.io/assets/svg/icon-external-link.svg' width=16 >";

      readmeLink.href = `../../readme.html#${ item.path }`;
      //readmeLink.target = '_blank';
      const newLine = document.createElement( 'br' );

      folderContents.appendChild( fileLink );
      folderContents.appendChild( readmeLink );
      folderContents.appendChild( newLine );
    } );

    return folderContents;
  };

  let topLevelItems = tree.filter( item => {
    const pathParts = item.path.split( '/' );
    return pathParts.length === 1;
  } );

  topLevelItems = topLevelItems.filter( item => ( item.type === 'blob' && ignoreFiles.includes( item.path ) === false ) || filterFolders.includes( item.path ) );
  div.appendChild( createTree( topLevelItems, '' ) );

  //console.log( "topLevelItems", topLevelItems );

}


fetchGitHubRepoContents( user, repo );
