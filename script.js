const fname = document.getElementById('name')
const email = document.getElementById('email')
const stAdress = document.getElementById('stadress')
const city = document.getElementById('city')
const province = document.getElementById('province')
const postalCode = document.getElementById('pcode')
const form = document.getElementById('form')



form.addEventListener('submit' , (e) => {
    e.preventDefault()

    checkInputs()

})





function checkInputs(){

    const fnameVal = fname.value.trim()
    const emailVal = email.value.trim()
    const stAdressVal = stAdress.value.trim()
    const cityVal = city.value.trim()
    const provinceVal = province.value.trim()
    const postalCodeVal = postalCode.value.trim()




    // Validate name
    if(fnameVal === "" || fnameVal === null) {
        setErrorFor(fname, "First Name cannot be empty!")
    }else{
        setSuccessFor(fname)
    }
    // Validate email
    if(emailVal === "" || emailVal === null) {
        setErrorFor(email, "Email cannot be empty!")
    } else if(!isEmail(emailVal)){
        setErrorFor(email, "Email address is not valid!")
    }else{
        setSuccessFor(email)
    }
    // Validate street address
    if(stAdressVal === "" || stAdressVal === null) {
        setErrorFor(stAdress, "Street address cannot be empty!")
    }else{
        setSuccessFor(stAdress)
    }
    // Validate city
    if(cityVal === "" || cityVal === null) {
        setErrorFor(city, "City cannot be empty!")
    }else{
        setSuccessFor(city)
    }
    // Validate province
    if(provinceVal === "" || provinceVal === null) {
        setErrorFor(province, "Province cannot be empty!")
    }else{
        setSuccessFor(province)
    }
    // Validate postal code 
    if(postalCodeVal === "" || postalCodeVal === null) {
        setErrorFor(postalCode, "Email cannot be empty!")
    } else if(!isPostalCode(postalCodeVal)){
        setErrorFor(postalCode, "Postal Code is not valid!")
    }else{
        setSuccessFor(postalCode)
    }

}



// Function to show error msg
function setErrorFor(input, msg){
    const el  = input.parentElement
    const errorMsg = el.querySelector('.error-msg')
    errorMsg.innerText = msg
    errorMsg.classList = 'error-msg error'
}
//Function to show success msh
function setSuccessFor(input){
    const el  = input.parentElement
    const errorMsg = el.querySelector('.error-msg')
    errorMsg.classList = 'error-msg success'
}



// TO SHOW INPUT FIELD IF OTHER RADIO BUTTON IS SELECTED
const radiobtns = document.querySelectorAll('.query')
const otherBtn = document.getElementById('other')

radiobtns.forEach(el => { 
    el.addEventListener("click", () => {
        if (otherBtn.checked == true) {
            const otherInput = document.getElementById("otherInput")
            otherInput.classList = "query-field query-field-show" 
        } else {
            otherInput.classList.remove("query-field-show")
        }
    })
    
    
});



// REGEX functions 
function isEmail(email){
    
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

function isPostalCode(code){
    
    return /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(code);

}