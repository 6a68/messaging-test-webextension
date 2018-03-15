const {name} = browser.runtime.getManifest();

console.log(name, "content script loaded");

/* TODO: do we even really need to do this? I don't think so.
browser.runtime.sendMessage("content script message").then(reply => {
  console.log(name, "content script received reply", {reply});
});
*/

console.log(name, "content script message sent");
