// function to make navbar appear and disappear

function toggleNavBar() {
    var navBar = document.getElementById("navbar")
    if (navBar.style.display !== "none") {
      navBar.style.display = "none";
    } else {
      navBar.style.display = "block";
    }
}

// function to bring up the content when clicking a link

async function displayPageContent(subpage) {
    // strip off any http or https part, then the site
    // will try to treat it as a subPage
    subpage = subpage.replace('http://', '')
    subpage = subpage.replace('https://', '')
    // retrieve the content
    const response = await fetch(subpage);
    const newText = await response.text();
    // stick it on the page
    contentBase = document.getElementById("content");
    contentBase.innerHTML = newText;
    // if there's a visible menu button, hide the navbar after clicking
    var menuButton = document.getElementById("navBarCollapser");
    var menuButtonDisplay = getComputedStyle(menuButton).display;
    if (menuButtonDisplay !== "none") {
        toggleNavBar();
    }
}
