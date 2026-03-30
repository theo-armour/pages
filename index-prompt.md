# Index Prompt

**Create a file browser for the `theo-armour/work` GitHub repo as `index.html`, a single HTML file hosted on GitHub Pages.**

## Layout

- Dark header (#24292f) with title "📂 Theo Armour Work" and a "View on GitHub" link to https://github.com/theo-armour/work
- Clicking the title reloads the app to its initial state (navigates to the page URL without any hash)
- Header contains token UI: a password input and green "Connect" button (visible when no token is stored), or a green "Connected" label and red "Disconnect" button (visible when a token is stored)
- Two-panel layout filling the viewport:
  - **Left panel**: resizable tree view (280px default, 200–400px range) with folder/file navigation
  - **Right panel**: content viewer with a sticky header showing the file path as clickable breadcrumbs and action buttons (📋 Copy, Raw, GitHub)

## Tree View

- Fetch the full repo tree dynamically from the GitHub API on load using the Git Trees endpoint with `?recursive=1`
- API URL: `https://api.github.com/repos/{owner}/{repo}/git/trees/{branch}?recursive=1`
- If a GitHub token is provided, send it as an `Authorization: token <value>` header (required for private repos)
- Show a loading spinner in the tree panel while fetching
- On API error, display an error message in the tree panel with a "Retry" button; 404 errors hint that the repo may be private
- All folders are closed when the app first loads
- Folders sort before files, then alphabetically
- Folders toggle open/close on click
- When a folder is opened, its `README.md` is automatically displayed in the content panel (if it exists), without updating the URL hash
- File icons by extension using emoji: 📁/📂 folders, 📝 .md, 📕 .pdf, 📊 .xlsx, 📋 .json, 🌐 .html, ⚙️ .yml, 🖼️ images, 📄 default
- Skip hidden files (dotfiles) and `node_modules`
- Selected file gets a blue highlight (#ddf4ff)
- Nested indentation increases by 16px per level
- Each tree item stores its full path in a `data-path` attribute for reliable lookup

### Tree Header & Controls

- Sticky tree header contains "Files" label and a ⊟ "Collapse all" button
- Collapse all button closes every expanded folder in the tree (removes `expanded` from `.tree-children`, removes `open` from folder icons)
- Below the header, a sticky filter input ("Filter files...") searches by file name or path
- Filter matches show the item and auto-expand all parent folders (via `filter-expanded` class)
- Clearing the filter restores the original tree state

### Keyboard Navigation

- Arrow Down / Arrow Up moves the highlight through visible tree items without activating them (respects expanded/collapsed and filter state)
- Enter or Space activates the highlighted item (opens/closes a folder, or loads a file)
- Arrow Right expands a highlighted folder (if collapsed)
- Arrow Left collapses a highlighted folder (if expanded)
- Selected item scrolls into view
- Keyboard navigation is disabled when focus is in the filter input or other text fields

## Content Viewer

- On initial load (no hash), the root `README.md` is automatically displayed without setting the hash
- **Markdown** (.md): rendered with a lightweight inline converter (headings, bold, italic, strikethrough, inline code, fenced code blocks, links, images, ordered/unordered lists, horizontal rules, paragraphs); styled with `github-markdown-css`
- **Images** (.png, .jpg, .jpeg, .gif, .svg, .webp): display inline with `max-width: 100%`
- **PDF**: show an embedded iframe (600px tall) with a download link
- **Excel** (.xlsx, .xls): show a download link
- **Other text files**: show in a monospace `<pre>` block with HTML-escaped content
- "Raw" button toggles markdown between rendered and raw views
- "GitHub" button opens the file on GitHub in a new tab
- "📋 Copy" button copies the current file path to the clipboard; shows "✓ Copied" feedback for 1.5 seconds
- File path displayed as clickable breadcrumbs: folder segments are links that expand the folder in the tree; the filename is plain text
- Breadcrumbs use `data-folder` attributes with event delegation on the content path element (no inline onclick handlers)
- Loading spinner animation while fetching
- All file content is fetched via relative paths (`"./" + item.path`) since the app is hosted on GitHub Pages in the same repo

## Navigation

- Update `location.hash` only when a user explicitly clicks a file in the tree
- Auto-displayed READMEs (root and folder) do not set the hash
- On load, if a hash is present, auto-navigate to that file (expand parent folders as needed)
- Listen for `hashchange` events

## GitHub API & Token Authentication

- Configuration object at the top of the script:

  ```js
  const CONFIG = {
    owner: "theo-armour",
    repo: "work",
    branch: "main"
  };
  ```

- Header contains a password input (`#tokenInput`), Connect button (`#btnConnect`), Disconnect button (`#btnDisconnect`), and status label (`#tokenStatus`)
- When no token is stored: input and Connect button are visible; Disconnect is hidden
- When a token is stored: input and Connect are hidden; "Connected" label and Disconnect button are visible
- Token is stored in `localStorage` under key `gh-token` (persists across sessions)
- On Connect: save the token to `localStorage`, hide the input, clear the cached tree from `sessionStorage`, and re-fetch the tree
- On Disconnect: remove the token from `localStorage`, show the input, clear the cached tree, and re-fetch the tree
- On init, fetch the recursive tree: `https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}/git/trees/${CONFIG.branch}?recursive=1`
- If a token exists, include `Authorization: token <value>` header in API requests
- The API returns `{ tree: [{ path, type, ... }] }` where `type` is `"blob"` (file) or `"tree"` (folder)
- Parse the flat array into a nested tree structure for rendering
- Cache the fetched tree in `sessionStorage` keyed by `tree-{owner}-{repo}-{branch}` to avoid redundant API calls on page reload

## Tech Stack

- Single HTML file with embedded CSS and JS
- Vanilla JavaScript (ES2020+, no frameworks)
- No external JavaScript dependencies (no Showdown or other CDN scripts)
- External stylesheet: `github-markdown-css` 5.5.1 (from CDN, for markdown styling)
- Inline lightweight markdown-to-HTML converter (`mdToHtml` and `inline` functions)
- GitHub Pages compatible (static, no build step)
- Tree data fetched from GitHub REST API (supports both public and private repos via optional token)
- File content fetched via relative paths (`"./" + item.path`) since the app is hosted on GitHub Pages in the same repo

## Style

- GitHub-inspired design using the GitHub color palette (#24292f, #f6f8fa, #d0d7de, #0969da, #58a6ff, etc.)
- System font stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial
- Monospace for code/paths: SFMono-Regular, Consolas, Liberation Mono, Menlo
- Smooth transitions on hover (0.1s background)
- Error state styled in red (#cf222e on #ffebe9)
- Token input styled to match the dark header (#161b22 background, #c9d1d9 text)
- Connect button styled green (#238636)
- Disconnect button styled red (#da3633)
- "Connected" status label in green (#3fb950)
