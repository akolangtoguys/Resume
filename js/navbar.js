function loadNavbar() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.status === 200) {
            document.getElementById('navbar').innerHTML = this.responseText;
        } else {
            console.error("Error loading navbar.html");
        }
    };
    xhttp.open("GET", "navbar.html", true);
    xhttp.send();
}

loadNavbar();
