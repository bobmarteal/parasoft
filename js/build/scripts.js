// for tabs actions
window.addEventListener("load", function() {
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.tabs__nav > li");
    // remove active from all but first tab selector
    for (var i = 1; i < myTabs.length; i++) {
        myTabs[i].classList.remove("active");
    }

    // store panes variable
    var myContentPanes = document.querySelectorAll(".tabs__pane");
    console.log(myContentPanes);
    // remove active from all but first pane
    for (i = 1; i < myContentPanes.length; i++) {
        myContentPanes[i].classList.remove("active");
    }

	function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		//var myContentPanes = document.querySelectorAll(".tab__pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);
		activePane.classList.add("active");
	}
	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
});

console.log("scriptsyodog");

// Tiny Carousels

$(document).ready(function(){
    $('#slider1').tinycarousel({
        intervalTime:8000,
        interval:true

    });
});
