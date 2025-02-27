function konprobaketa(event) {
    event.preventDefault();

    const emaila = document.getElementById("emaila").ariaValue;
    const emaitza = document.getElementById("onartu");

    if (emaila.includes("@")) {
        emaitza.textContent = "emaila egokia da!"
        emaitza.style.textColor = "emaila egokia da!"
    }
}