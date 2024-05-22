function loadlNavbar() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.status === 200) {
            document.getElementById('lNavbar').innerHTML = this.responseText;
        } else {
            console.error("Error loading lNavbar.html");
        }
    };
    xhttp.open("GET", "lNavbar.html", true);
    xhttp.send();
}

loadlNavbar();