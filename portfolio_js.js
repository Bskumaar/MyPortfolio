function val(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("nameinput").value.trim();
    const email = document.getElementById("emailinput").value.trim();
    const area = document.getElementById("areainput").value.trim();

    const para1 = document.getElementById("namepara");
    const para2 = document.getElementById("emailpara");
    const para3 = document.getElementById("areapara");

    // Clear previous error messages
    para1.innerHTML = "";
    para2.innerHTML = "";
    para3.innerHTML = "";

    let isValid = true;

    // Name Validation
    if (name === "") {
        para1.innerHTML = "Please enter your name";
        isValid = false;
    } else if (name.length < 5) {
        para1.innerHTML = "Please enter at least 5 characters";
        isValid = false;
    } else if (name.length > 10) {
        para1.innerHTML = "Please enter at most 10 characters";
        isValid = false;
    } else if (/[!@#$%^&*()_+\-=]/.test(name)) {
        para1.innerHTML = "Please remove special characters";
        isValid = false;
    }

    // Email Validation
    if (email === "") {
        para2.innerHTML = "Please enter your email";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        para2.innerHTML = "Please enter a valid email (e.g., example@mail.com)";
        isValid = false;
    }

    // Message Validation
    if (area === "") {
        para3.innerHTML = "Please enter your message";
        isValid = false;
    } else if (area.length < 10) {
        para3.innerHTML = "Please enter at least 10 characters";
        isValid = false;
    }

    return isValid; // Return false if any validation fails
}
