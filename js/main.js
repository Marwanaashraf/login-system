//signup
let nameSignup = document.getElementById("name")
let emailSignup = document.getElementById("email")
let passwordSignup = document.getElementById("password")
let alertValid = document.getElementById("alert")
//regex
let nameRegex = /^[A-Z][a-zA-Z ]{4,30}$/
let emailRegex = /^\w+@[a-zA-z]{3,20}\.com$/
let passRegex = /^(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$/
//users
let users = []
if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"))
}

function signup() {
    //1-check validation
    if (validation(nameRegex, nameSignup) == true && validation(emailRegex, emailSignup) == true && validation(passRegex, passwordSignup) == true) {
        //2-get values from inputs
        let user = {
            name: nameSignup.value,
            email: emailSignup.value,
            password: passwordSignup.value,
        }
        //3-check email is exist
        let emailCheck = users.find(ele => ele.email == user.email)
        if (emailCheck) {
            alertValid.classList.replace("d-none", "d-block")
            alertValid.innerHTML = "Email is already exist"
        } else {

            //4-push in array
            users.push(user)
            //5-store
            localStorage.setItem("users", JSON.stringify(users))
            //6-hide alert
            alertValid.classList.replace("d-block", "d-none")
            //7-link to login
            window.location.href = "index.html"
        }
    } else {
        alertValid.classList.replace("d-none", "d-block")
    }
}
nameSignup.addEventListener("blur", () => {
    validation(nameRegex, nameSignup)
})
emailSignup.addEventListener("blur", () => {
    validation(emailRegex, emailSignup)
})
passwordSignup.addEventListener("blur", () => {

    validation(passRegex, passwordSignup)
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



