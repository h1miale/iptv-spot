document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-consent-banner");
    const acceptBtn = document.getElementById("accept-cookies-btn");

    if (!localStorage.getItem("cookieConsent")) {
        cookieBanner.style.display = "block";
    } else {
        cookieBanner.style.display = "none";
    }

    if (acceptBtn) {
        acceptBtn.addEventListener("click", function () {
            localStorage.setItem("cookieConsent", "true");
            cookieBanner.style.display = "none";
        });
    }
});
