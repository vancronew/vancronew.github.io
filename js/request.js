function validateRequestForm() {
    let isFormValidNew = true;
    let newemail = $("#mce-Email_Add").val();
    clearRequestFormErrors();
    if ($("#mce-Company_Name").val().length < 1) {
        isFormValidNew = false;
        $("#companyError").show();
    }else if ($("#mce-Contact_Name").val().length < 1) {
        isFormValidNew = false;
        $("#contactError").show();
    } else if ($("#mce-Phone_Number").val().length < 1) {
        isFormValidNew = false;
        $("#phoneError").show();
    } else if (newemail.length < 1 || !isValidEmailNew(newemail)) {
        isFormValidNew = false;
        $("#newEmailError").show();
    } else if ($("#mce-Time_Of_Services_Requested").val().length < 1) {
        isFormValidNew = false;
        $("#timeError").show();
    }else if ($("#mce-Location_Of_Services_Requested").val().length < 1) {
        isFormValidNew = false;
        $("#locationError").show();
    } else if ($("#mce-Preferred_Interpreter").val().length < 1) {
        isFormValidNew = false;
        $("#interpreterError").show();
    }else if ($("#mce-Nature_Of_Request").val().length < 1) {
        isFormValidNew = false;
        $("#natureError").show();
    }
    if (isFormValidNew) {
        clearRequestFormErrors();
    }
    return isFormValidNew;
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
    $("#interpreterError").hide();
    $("#natureError").hide();
}
