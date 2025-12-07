const SELECTORS = [
  "ytd-rich-item-renderer", // Video element in the Homepage.
  "ytd-rich-shelf-renderer", // Shorts container in the Homepage.
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
