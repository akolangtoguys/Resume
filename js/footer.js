function loadFooter() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.status === 200) {
            document.getElementById('footer').innerHTML = this.responseText;
        } else {
            console.error("Error loading footer.html");
        }
    };
    xhttp.open("GET", "footer.html", true);
    xhttp.send();
}

// Load the footer
loadFooter();
