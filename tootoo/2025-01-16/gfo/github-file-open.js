const GFO = ( function () {

  const defaultFile = COR.defaultFile;

  // Set the flavor of the Markdown converter
  showdown.setFlavor( "github" );

  // Set the options for the Markdown converter
  const options = {
    backslashEscapesHTMLTags: true,
    completeHTMLDocument: false,
    disableForced4SpacesIndentedSublists: true,
    emoji: true,
    excludeTrailingPunctuationFromURLs: true,
    ghMention: true,
    noHeaderId: true,
    openLinksInNewWindow: false,
    simplifiedAutoLink: true,
    simpleLineBreaks: true,
    smoothLivePreview: true,
    strikethrough: true,
    tasklists: true,
  };

  // Listen for changes to the hash in the URL
  window.addEventListener( "hashchange", onHashChange, false );

  // If there's no hash in the URL, set it to the default file
  if ( !location.hash ) {

    location.hash = defaultFile;

  } else {

    //onHashChange();

  }

  function onHashChange () {

    // Get the URL from the hash and update the document title
    const url = location.hash.slice( 1 );

    setDocumentTitle( url );

    // Fetch the file and update the page content
    fetchFile( COR.pathContent + url, options );

  }

  function setDocumentTitle ( url ) {

    const title = url.split( "/" ).pop()
      .split( "-" )
      .filter( word => word.length > 0 )
      .map( word => word.charAt( 0 ).toUpperCase() + word.slice( 1 ) )
      .join( " " );

    document.title = title;

  }

  function fetchFile ( url, options ) {

    fetch( url )
      .then( response => response.text() )
      .then( txt => {

        const extension = url.includes( "." ) ? url.toLowerCase().split( '.' ).pop() : "";
        //console.log( "extension", extension );

        if ( [ "", "LICENSE", "txt", "md", "markdown" ].includes( extension ) ) {

          txt = txt.replace( /\<!--@@@/, "" ).replace( /\@@@--\>/, "" );
          divMainContent.innerHTML = new showdown.Converter( options ).makeHtml( txt );

        } else if ( [ "gif", "jpg", "jpeg", "png", "svg" ].includes( extension ) ) {

          divMainContent.innerHTML = `<img src="${ url }" style="border:none;max-width:100%;" >`;

        } else {

          divMainContent.innerHTML = `<iframe src="${ url }" height=${ window.innerHeight } style="border:none;width:100%;" ></iframe>`;

        }

        window.scrollTo( 0, 0 );

      } )
      .catch( err => console.error( "Error fetching file:", err ) );
  }

  return {
    onHashChange,
    setDocumentTitle,
    fetchFile
  };
} )();

test = function () {
  console.log( "test" );
  location.hash = "test.md";
};