function toggleResume() {
    const resumeDiv = document.getElementById("resume");

    if (resumeDiv.innerHTML === "") {
        // Load the resume content
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            if (this.status === 200) {
                resumeDiv.innerHTML = this.responseText;
            } else {
                console.error("Error loading resume");
            }
        };
        xhttp.open("GET", "resume.html", true);
        xhttp.send();
    } else {
        // Clear the resume content
        resumeDiv.innerHTML = "";
    }
}
