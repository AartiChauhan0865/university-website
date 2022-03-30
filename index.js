studentBtn = document.getElementById("btn1");
facultyBtn = document.getElementById("btn2");

studentBtn.addEventListener("click", () => {
    let ans = confirm("Do you want to login as student?");
    if(ans == true) {
        window.location.replace("https://web.whatsapp.com/");
    } else {
        window.location.href = "https://in.linkedin.com/";
    }
})

facultyBtn.addEventListener("click", () => {
    let ans = confirm("Do you want to login as faculty?");
    if(ans == true) {
        window.location.replace("https://www.facebook.com/");
    } else {
        window.location.href = "http://instagram.com";
    }
})