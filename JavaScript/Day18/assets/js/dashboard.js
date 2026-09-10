const user = JSON.parse(localStorage.getItem("user"));

if (user) {

    document.getElementById("userData").innerHTML = `
        <p><b>Name:</b> ${user.name}</p>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Password:</b> ${user.password}</p>
    `;

} else {

    window.location.href = "login.html";
}

const logout = () => {

    window.location.href = "login.html";
};