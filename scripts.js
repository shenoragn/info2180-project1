/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', () => {
    function eSubscribe(e) {
        e.preventDefault();
        var email = document.getElementById(email);
        alert(email);
        if (email != null){
            var message = ("Thank you! Your email address " + email.value + " has been added to our mailing list");
            alert(message);
        }
    }
    document.getElementById("btn").addEventListener("submit", eSubscribe);
})