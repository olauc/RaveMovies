const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

let editBtn = document.getElementById("edit-btn");

const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

    var userr = document.getElementById("validationCustomUsername");
    var email = document.getElementById("exampleInputEmail1");
    var name1 = document.getElementById("card-name");


    userr.setAttribute("placeholder",loggedInUser.userName);
    email.setAttribute("placeholder",loggedInUser.email);
    name1.innerHTML = loggedInUser.userName;
    /********************** */

editBtn.addEventListener("click", function() {

    let editBtn = document.getElementById("edit-btn");
    let oldPasswordInput = document.getElementById("oldPassword");
    let oldPasswordInputvalue = oldPasswordInput.value;
    let sessionPassword = user ? user.password : null;
    let hiddenDivInput = document.getElementById("hiddenDiv");
    let disabledInput = document.getElementById("oldPassword");
    /********************** */
    
    // console.log(oldPasswordInputvalue );
    //  console.log(sessionPassword);
   
    if (editBtn.textContent === "Edit") {
        oldPasswordInput.removeAttribute("disabled");
        editBtn.textContent = "Submit"; 
        return;
    }

    if (oldPasswordInputvalue === sessionPassword) {
        hiddenDivInput.classList.remove("d-none");
        editBtn.disabled = true;
    } else {
        alert("Incorrect Password! Please try again.");
    }
});


function togglePassword(inputId, eyeIcon) {
    let input = document.getElementById(inputId);
    
  
    if (input.disabled) {
        eyeIcon.style.display = "none";
        return;
    } else {
        eyeIcon.style.display = "inline"; 
    }

    if (input.type === "password") {
        input.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

let updateBtn = document.getElementById("update-btn");
updateBtn.addEventListener("click", function() {
    
    let updateBtn = document.getElementById("update-btn");

    let newPasswordInput = document.getElementById("new-password");
    let newPasswordInputvalue = newPasswordInput.value;
    // console.log(newPasswordInputvalue);

    let confirmPasswordInput = document.getElementById("confirm-password");
    let confirmPasswordInputvalue = confirmPasswordInput.value;
    // console.log(confirmPasswordInputvalue);

    if (newPasswordInputvalue === "" || confirmPasswordInputvalue === "") {
        alert("Both password fields must be filled!");
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(newPasswordInputvalue)) {
        alert("Password must be at least 8 characters long, contain at least one uppercase letter, and one special characters.");
        event.preventDefault();
        return false;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(newPasswordInputvalue)) {
        alert("Password must be at least 8 characters long, contain at least one uppercase letter, and one special characters.");
        event.preventDefault();
        return false;
    }

 


    if (newPasswordInputvalue === confirmPasswordInputvalue) {
        alert("Password Changed Successfully!");
        let local = JSON.parse(localStorage.getItem("users"));
        let sessionUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    
        if (local) {
            local.forEach(user => {
                if(user.email === sessionUser.email ){
                    user.password=newPasswordInputvalue;
                }
            });
             localStorage.setItem("users",JSON.stringify(local));
         
            
            if (sessionUser) {
                sessionUser.password = newPasswordInputvalue;
                sessionStorage.setItem("loggedInUser", JSON.stringify(sessionUser));
            }
             
            console.log("Password updated successfully in both storages!");
        } else {
            console.log("No logged-in user found!");
        }
    } else {
        console.log("Passwords do not match!");
    }
});



   


  
  
