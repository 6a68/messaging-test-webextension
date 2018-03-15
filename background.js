console.log("loaded messaging-test-webextension");

let trueReturnValue = browser.runtime.onMessage.addListener((msg, sender) => {
  console.log(`messaging-test-webextension received message. msg: ${msg}, sender: ${sender}`);
  return true;
});

console.log(`Return value from "return true" listener: ${trueReturnValue}`);

let promisedReturnValue = browser.runtime.onMessage.addListener((msg, sender) => {
  console.log(`messaging-test-webextension promise handler received message. msg: ${msg}, sender: ${sender}`);
  return new Promise((resolve, reject) => { console.log('promise invoked'); resolve() });
});

console.log(`Return value from "return new Promise()" listener: ${promisedReturnValue}`);

let falseReturnValue = browser.runtime.onMessage.addListener((msg, sender) => {
  console.log(`messaging-test-webextension received message. msg: ${msg}, sender: ${sender}`);
  return false;
});

console.log(`Return value from "return false" listener: ${falseReturnValue}`);
