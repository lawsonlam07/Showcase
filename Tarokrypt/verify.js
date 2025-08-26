async function checkWebsite(url) {
    try {
        const response = await fetch(url, {method: "HEAD"})
        if (url && response.ok) {
            alert("Correct! Press 'ok' to continue.")
            window.location.href = url
        } else {alert("Incorrect! Please try again.")}
    } catch (error) {alert("Incorrect! Please try again.")}
}

function encrypt(plain, key) {
    return CryptoJS.AES.encrypt(plain, key).toString(CryptoJS.enc.UTF8)
} console.log(encrypt("i-magician.html", "PASSWORD"))

function decrypt(cipher, key) {
    try {return CryptoJS.AES.decrypt(cipher, key).toString(CryptoJS.enc.Utf8)}
    catch (error) {return ""}
}

function verify() { // Are you trying to reverse engineer this to cheat?
    let cipher = document.getElementById("main-title").dataset.ciphertext
    let key = document.getElementById("inputButton").value.trim()
    let link = decrypt(cipher, key)
    checkWebsite(link)
}