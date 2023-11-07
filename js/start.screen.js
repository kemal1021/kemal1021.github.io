function showLoginForm() {
    var loadingContainer = document.getElementById("loading-container");
    var loginForm = document.getElementById("login-form");

    loadingContainer.style.transition = "opacity 4s";
    loadingContainer.style.opacity = 0;
    loginForm.style.display = "none"
    setTimeout(function () {
        loadingContainer.style.display = "none";
        loginForm.style.display = "block";
    }, 4000); 
}

showLoginForm();