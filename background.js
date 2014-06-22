chrome.commands.onCommand.addListener(function(command) {
    switch (command) {
        case "change-origin-language":
            changeOriginLanguage();
            break;
        case "change-translation-language":
            changeTranslationLanguage();
            break;
        case "swap-languages":
            //console.log("swap-languages");

            chrome.tabs.getSelected(null, function (tab) {
                chrome.tabs.sendMessage(tab.id, {command: "swap-languages" });
                // setting a badge
                //chrome.browserAction.setBadgeText({text: "red!"});
            });

            break;
    }
    return true;
});

// omnibox
//chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
//	suggest([
//	  {content: "color-divs", description: "Make everything red"}
//	]);
//});
//chrome.omnibox.onInputEntered.addListener(function(text) {
//	if(text == "color-divs") colorDivs();
//});

// listening for an event / one-time requests
// coming from the popup
//chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
//    switch (request.type) {
//        case "change-origin-language":
//            changeOriginLanguage();
//            break;
//        case "change-translation-language":
//            changeTranslationLanguage();
//            break;
//        case "swap-languages":
//            swapLanguages();
//            break;
//    }
//    return true;
//});


// listening for an event / long-lived connections
// coming from devtools
//chrome.extension.onConnect.addListener(function (port) {
//    port.onMessage.addListener(function (message) {
//        switch (port.name) {
//            case "color-divs-port":
//                colorDivs();
//                break;
//        }
//    });
//});

//send a message to the content script
var swapLanguages = function () {
    chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.sendMessage(tab.id, {command: "swap-languages" });
        // setting a badge
        //chrome.browserAction.setBadgeText({text: "red!"});
    });
}