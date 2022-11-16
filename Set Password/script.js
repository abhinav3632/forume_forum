const pwSet = document.querySelector(".set");
const pwConfirm = document.querySelector(".confirm"),
createPw = document.querySelector("#createPw"),
confirmPw = document.querySelector("#confirmPw");

pwSet.addEventListener("click", ()=>{
    if(createPw.type === "password"){
        createPw.type = "text";
        document.getElementById("eye").style.color='#444bab';
    }
    else{
        createPw.type = "password";
        document.getElementById("eye").style.color='#4F516B';
    }
});
pwConfirm.addEventListener("click", ()=>{
    if(confirmPw.type === "password"){
        confirmPw.type = "text";
        document.getElementById("eye1").style.color='#444bab';
    }
    else{
        confirmPw.type = "password";
        document.getElementById("eye1").style.color='#4F516B';
    }
});
