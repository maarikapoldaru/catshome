const fs = require("fs");
const path = require("path");

/**
 * Checks if a page is in the folder
 *
 * @param {fs.PathLike} folderPath
 * @param {fs.PathLike} pagePath
 */
function isPageInFolder(folderPath, pagePath) {
  const dirContents = fs.readdirSync(folderPath);
  for (let i = 0, n = dirContents.length; i < n; i++) {
    const file = dirContents[i];
    const name = file.replace(/\..*$/, ""); // Replace file extension
    if (pagePath.includes(name)) return true;
  }
  return false;
}

/**
 * Gets the default locale path for the page.
 *
 * If it doesn't find the page at a given path it will strip away
 * the part between the first two "/" characters\
 * Ex: /xxx/yyy/ -> /yyy/
 * @param {String} pagePath expected input /xxx/
 */
function defaultPath(pagePath) {
  // Assumes path starts with / Ex: "/Donate/"
  let adjustedPath = `..${pagePath}`;
  if (adjustedPath.endsWith("/")) adjustedPath = adjustedPath.slice(0, -1);
  let resolvedPath = path.resolve(__dirname, adjustedPath);

  /* Checks if the path is correct, if the path is for a folder
      it is assumed that the "index file" (README.md) is properly set up */
  if (fs.existsSync(resolvedPath)) return pagePath;

  if (isPageInFolder(path.dirname(resolvedPath), pagePath)) return pagePath;
  // Assumes file doesn't exist since it doesn't exist at given local
  const defaultPath = pagePath.replace(/^\/.*?\//, "/");
  return defaultPath;
}

module.exports = defaultPath;
