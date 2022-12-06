function dekor1() {
    dekor_1 = document.getElementById("home");
    dekor_1.style.color = "aqua";
}

function dekor2() {
    dekor_2 = document.getElementById("home");
    dekor_2.style.color = "whitesmoke";
}

function cekform() {
    let uname = document.getElementById("username").value;
    let pw = document.getElementById("password").value;

    if(uname != "dzakydzulfikar" || pw != "dzaky270902") {
        alert("Username atau Password yang anda masukan salah!")
    }else{
        document.getElementById("login").href = `index2.html`
    }
}