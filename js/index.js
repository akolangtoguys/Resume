function loadResume() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.status === 200) {
            document.getElementById("resume").innerHTML = this.responseText;
        } else {
            console.error("Error loading resume");
        }
    };
    xhttp.open("GET", "resume.html", true);
    xhttp.send();
}