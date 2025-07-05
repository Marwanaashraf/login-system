//login
let loginEmail = document.getElementById("loginEmail")
let loginPassword = document.getElementById("loginPassword")
let alertLogin = document.getElementById("alertLogin")
//regex
let emailRegex = /^\w+@[a-zA-z]{3,20}\.com$/
let passRegex = /^(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$/
//users
let users = []
if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"))
}
function signIn() {
    if (validation(emailRegex, loginEmail) == true && validation(passRegex, loginPassword) == true) {
        //1-get values
        let user = {
            email: loginEmail.value,
            password: loginPassword.value,
        }
        //2-check email or password
        let userCheck = users.find(ele => ele.email == user.email && ele.password == user.password)
        if (userCheck) {
            //3-hide alert
            alertLogin.classList.replace("d-block", "d-none")
            //4-store local storage name
            localStorage.setItem("userName", userCheck.name)
            //5-link
            window.location.href = "index.html"

        } else {
            alertLogin.classList.replace("d-none", "d-block")
            alertLogin.innerHTML = "Email or Password is invalid"
        }

    } else {
        alertLogin.classList.replace("d-none", "d-block")
        alertLogin.innerHTML = "Email or Password is invalid"
    }
}
loginEmail.addEventListener("blur", () => {
    validation(emailRegex, loginEmail)
})
loginPassword.addEventListener("blur", (e) => {
    validation(passRegex, loginPassword)
})
function validation(regex, input) {
    if (regex.test(input.value) == true) {
        input.classList.add("is-valid")
        input.classList.remove("is-invalid")
        return true
    } else {
        input.classList.add("is-invalid")
        input.classList.remove("is-valid")

        return false
    }
}