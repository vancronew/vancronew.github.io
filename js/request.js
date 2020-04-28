function validateRequestForm() {
    let isFormValid = true;
    let newemail = $("#mce-Email_Address").val();
    clearRequestFormErrors();
    if ($("#mce-Company_Name").val().length < 1) {
        isFormValid = false;
        $("#companyError").show();
    }else if ($("#mce-Contact_Name").val().length < 1) {
        isFormValid = false;
        $("#contactError").show();
    } else if ($("#mce-Phone_Number").val().length < 1) {
        isFormValid = false;
        $("#phoneError").show();
    } else if (newemail.length < 1 || !isValidEmail(newemail)) {
        isFormValid = false;
        $("#newEmailError").show();
    } else if ($("#mce-Time_Of_Services_Requested").val().length < 1) {
        isFormValid = false;
        $("#timeError").show();
    }else if ($("#mce-Location_Of_Services_Requested").val().length < 1) {
        isFormValid = false;
        $("#locationError").show();
    }else if ($("#mce-Nature_Of_Request").val().length < 1) {
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
    $("#phoneError").hide();
    $("#newEmailError").hide();
    $("#timeError").hide();
    $("#locationError").hide();
    $("#natureError").hide();
}
