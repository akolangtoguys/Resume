function loadrNavbar() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.status === 200) {
            document.getElementById('rNavbar').innerHTML = this.responseText;
        } else {
            console.error("Error loading rNavbar.html");
        }
    };
    xhttp.open("GET", "rNavbar.html", true);
    xhttp.send();
}

loadrNavbar();