const SELECTORS = [
  "ytd-rich-item-renderer", // Video element in the homepage.
  "ytd-rich-shelf-renderer", // Shorts container in the homepage.
  "ytd-feed-filter-chip-bar-renderer", // Chips tag in the homepage.
  "ytd-search-header-renderer", // Search headers.

  "ytd-mini-guide-renderer", // Sidebar in the homepage.
  "ytd-guide-renderer", // Sidebar

  "ytd-shorts", // Shorts
  "grid-shelf-view-model", // Shorts in search.

  "#secondary", // Releated videos.
  "ytd-comments", // Comments.
];

function hideNode(node: HTMLElement) {
  node.style.display = "none";
}

const observer = new MutationObserver(() => {
  // Create an observer to observe the DOM changes.
  const videoElements = [...document.querySelectorAll(SELECTORS.join(", "))] as HTMLElement[];
  videoElements.forEach((el) => hideNode(el));
});

observer.observe(document.body, {
  // Setting up the observer to observe the document body and all child elements.
  subtree: true,
  childList: true,
});
