let resultDisplay = document.getElementById("result")



class UI {
    static getButton() {
        let buttons = [...document.querySelectorAll(".allBtn")]
        buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                UI.validation(btn.textContent)
            })
        });
    }
    static validation(type) {
        switch (type) {
            case "Email":
                let email = prompt("Enter Your Email:")
                let emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                let EmailResult = emailRe.test(email)
                if (EmailResult) {
                    this.displayResult(email, "is a Valid Email" )
                } else if (email == null || email == "") {
                    this.displayResult("Please, Enter a Email")
                } else {
                    this.displayResult(email, "is Invalid Email")
                }
                break;
            case "Phone Number":
                let phone = prompt("Enter Your Phone Number:")
                let phoneRe = /^(\+)?(88)?01([0-9]){9}$/
                let phoneResult = phoneRe.test(phone)
                if (phoneResult) {
                    this.displayResult(phone, "is valid Phone Number")
                } else if (phone == null || phone == "") {
                    this.displayResult( "Please, Enter a Phone Number")
                } else {
                    this.displayResult(phone, "is invalid Phone Number")
                }

                break;
            case "Post Code":
                let code = prompt("Enter Your Post Code:")
                let codeRe = /^([0-9]{4})$/
                let codeResult = codeRe.test(code)
                if (codeResult) {
                    this.displayResult(code, "is valid Post Code")
                } else if (code == null || code == "") {
                    this.displayResult("Please, Enter a Post code")
                } else {
                    this.displayResult(code, "is invalid Post Code")
                }
            default:
                break;
        }
    }
    static displayResult(item, result) {
        let head = `<h2>"${item}" ${result || ""}</h2>`
        resultDisplay.innerHTML = head
    }
}




document.addEventListener("DOMContentLoaded", () => {
    UI.getButton()
})