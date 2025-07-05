let nameSpan = document.getElementById("nameSpan")
//logout
function logOut() {
    localStorage.removeItem("userName")
    window.location.href = "index.html"
}
(function () {
    nameSpan.innerHTML = localStorage.getItem("userName")
}())