function validateLogin() { 
    const email = document.getElementById("loginUser").value.trim(); 
    const pass = document.getElementById("loginPass").value; 

    if (email === "") { 
        alert("Email is required"); 
        return false; 
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Enter a valid email address");
        return false;
    }

    if (pass === "") { 
        alert("Password is required"); 
        return false; 
    } 

    if (pass.length < 6) { 
        alert("Password must be at least 6 characters"); 
        return false; 
    } 

    window.location.href = "bookingeticket.html"; 
    return false;
}
