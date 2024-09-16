// open modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// close modal when clicked outside
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}


