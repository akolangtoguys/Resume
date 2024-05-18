function loadHeader() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.status === 200) {
            document.getElementById('header').innerHTML = this.responseText;
        } else {
            console.error("Error loading header.html");
        }
    };
    xhttp.open("GET", "header.html", true);
    xhttp.send();
}

// Load the header
loadHeader();
