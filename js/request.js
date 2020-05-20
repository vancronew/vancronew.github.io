function validateRequestForm() {
    let isFormValid = true;
    let newemail = $("#mce-Email_Add").val();
    clearRequestFormErrors();
    if (newemail.length < 1 || !isValidEmail(newemail)) {
        isFormValid = false;
        $("#newEmailError").show();
    } else if ($("#mce-Contact_Name").val().length < 1) {
        isFormValid = false;
        $("#contactError").show();
    } else if ($("#mce-Phone_Number").val().length < 1) {
        isFormValid = false;
        $("#phoneError").show();
    } else if ($("#mce-Company_Name").val().length < 1) {
        isFormValid = false;
        $("#companyError").show();
    }else if ($("#mce-Time_Zone").val().length < 1) {
        isFormValid = false;
        $("#timezoneError").show();
    }
        else if ($("#mce-Time_Of_Services_Requested").val().length < 1) {
        isFormValid = false;
        $("#timeError").show();
    }else if ($("#mce-Location_Of_Services_Requested").val().length < 1) {
        isFormValid = false;
        $("#locationError").show();
    } else if ($("#mce-Consumer_Name").val().length < 1) {
        isFormValid = false;
        $("#consumerError").show();
    }     
    else if ($("#mce-Preferred_Interpreter").val().length < 1) {
        isFormValid = false;
        $("#interpreterError").show();
    }else if ($("#mce-Nature_Of_Request").val().length < 1) {
        isFormValid = false;
        $("#natureError").show();
    }else if ($("#mce-Resource").val().length < 1) {
        isFormValid = false;
        $("#resourceError").show();
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
    $("#timezoneError").hide();
    $("#timeError").hide();
    $("#locationError").hide();
    $("#consumerError").hide();
    $("#interpreterError").hide();
    $("#natureError").hide();
    $("#resourceError").hide();
}
