document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    document.getElementById("userName").textContent = username;
    document.getElementById("login").style.display = "none";
    document.getElementById("birthdayWish").style.display = "block";
});
