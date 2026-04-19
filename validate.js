function validateRegister() {  
    var email = document.getElementById("email").value.trim(); 
    var password = document.getElementById("password").value; 
    if (email === "") { 
        alert("Email is required"); 
        return false; 
    } 
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(email)) { 
        alert("Enter a valid email address"); 
        return false; 
    } 
    if (password === "") { 
        alert("Password is required"); 
        return false; 
    }
     if (password.length < 6) { 
        alert("Password must be at least 6 characters"); 
        return false; 
    } 
    alert("Registration successful!"); 
    return true;   } 
function validateLogin() { 
    var email = document.getElementById("email").value.trim(); 
    var password = document.getElementById("password").value; 
    if (email === "" || password === "") { 
        alert("All fields are mandatory"); 
        return false; 
    } 
    return true; 
}

