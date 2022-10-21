//* Cookies
/*
    → a small text file stored on your computer used to remember information about the user saved in name=value pairs
*/

console.log(navigator.cookieEnabled);

// adding a cookie manually

document.cookie = "firstName=Edu; expires=Sun, 1 December 2021 12:00:00 UTC";
document.cookie = "lastName=Vieira; expires=Sun, 1 December 2021 12:00:00 UTC";
console.log(document.cookie)


setCookie("email", "edu@fmail.com", 365)
setCookie("car", "corvette", 1)
deleteCookie("email")
deleteCookie("name")
deleteCookie("firstName")
deleteCookie("firtsName")
deleteCookie("lastName")
deleteCookie("undefined")
console.log(getCookie("car"))

//console.log(document.cookie)

function setCookie(name, value, expiresInDays) {
    const date = new Date();              
    date.setTime(date.getTime() + expiresInDays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

function deleteCookie(name) {
    setCookie(name, null, null);
}

function getCookie(name) {
    const decodeCookie = decodeURIComponent(document.cookie);
    console.log(decodeCookie);
    const cArray = decodeCookie.split("; ");
    let result = null;

    console.log(cArray)
    cArray.forEach(element => {
        if (element.indexOf(name) == 0)
        result = element.substring(name.length + 1)
    })

    return result;
}