const observer = new MutationObserver(() => {
  // Create an observer to observe the DOM changes.
  document.querySelectorAll("img").forEach((el) => (el.style.visibility = "hidden"));
});

observer.observe(document.body, {
  // Setting up the observer to observe the document body and all child elements.
  subtree: true,
  childList: true,
});
