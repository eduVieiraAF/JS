
function myFunction() {
    const inpObj = document.getElementById("id1")

    if (!inpObj.checkValidity()) {
        document.getElementById("display").innerHTML = inpObj.validationMessage
    } else {
        document.getElementById("display").innerHTML = inpObj.willValidate
    }
}

/* 
customError 	    Set to true, if a custom validity message is set.
patternMismatch	    Set to true, if an element's value does not match its pattern attribute.
rangeOverflow	    Set to true, if an element's value is greater than its max attribute.
rangeUnderflow	    Set to true, if an element's value is less than its min attribute.
stepMismatch	    Set to true, if an element's value is invalid per its step attribute.
tooLong	            Set to true, if an element's value exceeds its maxLength attribute.
typeMismatch	    Set to true, if an element's value is invalid per its type attribute.
valueMissing	    Set to true, if an element (with a required attribute) has no value.
valid	            Set to true, if an element's value is valid.
*/