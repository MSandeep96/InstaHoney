const chatWindowFilter = {
  url: [
    {pathContains: "/direct/t"}
  ]
}

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.executeScript(null,{file:"chatWindowEvents.js"});
}, chatWindowFilter);

const chatPickerFilter = {
  url: [
    {pathContains: "/direct/inbox"}
  ]
}


chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.executeScript(null,{file:"chatPicker.js"});
}, chatPickerFilter);


// chrome.browserAction.onClicked.addListener(function() {
//   chrome.windows.create({
//     url: "https://www.instagram.com/",
//     width: 580,
//     height: 600,
//     focused: true
//   });
// });


// let mobileAgent = "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Mobile Safari/537.36";

// chrome.webRequest.onBeforeSendHeaders.addListener(
//   function(details) {
//     for (var i = 0; i < details.requestHeaders.length; ++i) {
//       if (details.requestHeaders[i].name === 'User-Agent') {
//         details.requestHeaders[i].value = mobileAgent;
//         j=i;
//         break;
//       }
//     }
//     return {requestHeaders: details.requestHeaders};
//   },
//   {urls: ["*://*.instagram.com/*"]},
// ["blocking", "requestHeaders"]);