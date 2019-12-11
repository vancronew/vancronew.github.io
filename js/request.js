function validateRequestForm() {
    let isFormValid = true;
    let newemail = $("#mce-EMAIL_ADDRESS").val();
    clearRequestFormErrors();
    if ($("#mce-COMPANY_NAME").val().length < 1) {
        isFormValid = false;
        $("#companyError").show();
    }else if ($("#mce-CONTACT_NAME").val().length < 1) {
        isFormValid = false;
        $("#contactError").show();
    } else if (newemail.length < 1 || !isValidEmail(newemail)) {
        isFormValid = false;
        $("#newEmailError").show();
    } else if ($("#mce-PHONE_NUMBER").val().length < 1) {
        isFormValid = false;
        $("#phoneError").show();
    }else if ($("#mce-TIME_OF_SERVICES_REQUESTED").val().length < 1) {
        isFormValid = false;
        $("#timeError").show();
    }else if ($("#mce-LOCATION_OF_SERVICES_REQUESTED").val().length < 1) {
        isFormValid = false;
        $("#locationError").show();
    }else if ($("#mce-NATURE_OF_REQUEST").val().length < 1) {
        isFormValid = false;
        $("#natureError").show();
    }
    if (isFormValid) {
        clearRequestFormErrors();
    }
    return isFormValid;
}
    
    
    
function isValidEmail(newemail)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newemail))
    {
        return true;
    }
    return false;
}

function clearRequestFormErrors() {
    $("#companyError").hide();
    $("#contactError").hide();
    $("#newEmailError").hide();
    $("#phoneError").hide();
    $("#timeError").hide();
    $("#locationError").hide();
    $("#natureError").hide();
}
