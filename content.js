chrome.extension.onMessage.addListener(function(message, sender, sendResponse)
{
    switch (message.command) {
        case "swap-languages":
//            var ev =  document.createEvent("MouseEvents");
//            var button = document.getElementById('gt-swap');
//
            console.log("wtf");
//
//            ev.initMouseEvent(
//                "mouseup",
//                true /* bubble */, true /* cancelable */,
//                window, null,
//                0, 0, 0, 0, /* coordinates */
//                false, false, false, false, /* modifier keys */
//                0 /*left*/, null
//            );
//
//            button.dispatchEvent(ev);

/*
            console.log("I am in");
            jQuery("#gt-swap").click(function () {
                console.log("clicked");
            });

            jQuery("#gt-swap").trigger("click");
*/

            break;
    }

});
