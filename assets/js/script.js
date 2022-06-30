var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

function zeynuw(){
    const url = "http://127.0.0.1:5500/second.html"
    window.open(url);
}

const buttonsubmit=document.getElementById("btn");
const formemail=document.getElementById("email");
const formpassword=document.getElementById("password");

var User=[
  {
    email:"zeynab_bagirova",
    password:"zeynuw123"
  },
  {
    email:"nigar_shahriyarli",
    password:"nuguw123"
  }
];

if(buttonsubmit){
  buttonsubmit.addEventListener("click", singin)
  function singin(e){
    e.preventDefault();
const emailvalue=formemail.value;
const passwordvalue=formpassword.value;
    for (const user of User) {
      if(emailvalue!==user.formemail||passwordvalue!==user.formpassword ){

        document.querySelector(".output").style.display="block";
        document.querySelector(".output2").style.display="block";
      } else {
    // window.location.href="http://127.0.0.1:5500/";
       }
    }
  }
  function alindi (){
    const url = "http://127.0.0.1:5500"
    window.open(url);
}
}

