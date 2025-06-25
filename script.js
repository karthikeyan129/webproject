
function showbutton() {
    // Check that the element exists
    const myButton = document.getElementById("myButton");
    if (myButton) {
        // Set the href of a link inside the button or another target element
        myButton.innerHTML = "<a href=\"https://www.google.com/search?q=+candy&sca_esv=97d8cc157e55592e&udm=2&biw=1366&bih=641&ei=JFDhZ-77DqOMvr0Pnp-_-Q4&ved=0ahUKEwjunfSI3KKMAxUjhq8BHZ7PL-8Q4dUDCBE&uact=5&oq=+candy&gs_lp=EgNpbWciBiBjYW5keTINEAAYgAQYsQMYQxiKBTIGEAAYBxgeMgYQABgHGB4yChAAGIAEGEMYigUyChAAGIAEGEMYigUyBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeSJEQULIFWN8KcAF4AJABAJgBtwGgAYkFqgEDMC41uAEDyAEA-AEBmAIFoAKkBMICDBAAGIAEGEMYigUYCsICCBAAGAcYChgemAMAiAYBkgcDMS40oAesG7IHAzAuNLgHjgQ&sclient=img#vhid=R6r6pY0PLJQdlM&vssid=mo\">Candy</a>"; //add the link inside the button.
    } else {
        console.error("The element with id 'myButton' was not found.");
    }
}
//Assign the function showbutton to the click event
document.getElementById("myButton").onclick = showbutton;