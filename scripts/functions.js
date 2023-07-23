// function to bring up the content when clicking a link

async function displayPageContent(subpage) {
    console.log("Displaying content from ", subpage);
    // retrieve the content
    const response = await fetch(subpage);
    console.log(response);
    const newText = await response.text();
    console.log("received text:");
    console.log(newText);
    // stick it on the page
    contentBase = document.getElementById("content");
    contentBase.innerHTML = newText;
}