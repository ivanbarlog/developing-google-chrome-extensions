chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
        case "swap-languages":
			var swapButton = document.getElementById("gt-swap");
//			if(divs.length === 0) {
//				alert("There are no any divs in the page.");
//			} else {
//				for(var i=0; i<divs.length; i++) {
//					divs[i].style.backgroundColor = message.color;
//				}
//			}
            document.getElementById("gt-swap").fireEvent("click");
            alert("hovno");
            swapButton.click();
		break;
	}
});