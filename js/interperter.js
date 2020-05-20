function validateRequestForm() {
    let isFormValid = true;
    let email = $("#mce-Email_Address").val();
    clearContactFormErrors();
    if (email.length < 1 || !isValidEmail(email)) {
        isFormValid = false;
        $("#emailError").show();
    } else if ($("#mce-First_Name").val().length < 1) {
        isFormValid = false;
        $("#fNameError").show();
    } else if ($("#mce-Last_Name").val().length < 1) {
        isFormValid = false;
        $("#lNameError").show();
    } else if ($("#mce-Message").val().length < 1) {
        isFormValid = false;
        $("#MMERGE6Error").show();
    }
    if (isFormValid) {
        clearContactFormErrors();
    }
    return isFormValid;
}

function isValidEmail(email)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        return true;
    }
    return false;
}

function clearRequestFormErrors() {
    $("#emailError").hide();
    $("#fNameError").hide();
    $("#lNameError").hide();
    $("#MMERGE6Error").hide();
}// Add your code here

