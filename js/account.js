// const admin=document.querySelector('.admin');
// const owner=document.querySelector('.Owner');
// const guest=document.querySelector('.Guest');
// const mobile=document.querySelector('.mobile_number');
// const birthdate=document.querySelector('.Birth_date');
// const adhar=document.querySelector('.Adhar');
// const pwd1=document.querySelector('.pwd1');
// const pwd2=document.querySelector('.pwd2');
// const sform=document.querySelector('.sighupform');

// admin.addEventListener('click', ()=>{
//   admin.style.background="linear-gradient(90deg, rgba(2,0,36,1) 31%, rgba(21,227,126,1) 59%, rgba(53,158,169,1) 89%)";
//   guest.style.background="#15e37e";
//   owner.style.background="#15e37e";
//   mobile.style.opacity="1";
//   birthdate.style.opacity="1";
//   adhar.style.opacity="1";
//   pwd1.style.top="0px";
//   pwd2.style.top="0px";
//   pwd1.style.transition="0.8s";
//   pwd2.style.transition="0.9s";
//   mobile.style.transition="0.5s";
//   birthdate.style.transition="0.7s";
//   adhar.style.transition="0.9s";
// });
// owner.addEventListener('click', ()=>{
//   owner.style.background="linear-gradient(90deg, rgba(2,0,36,1) 31%, rgba(21,227,126,1) 59%, rgba(53,158,169,1) 89%)";
//   admin.style.background="#15e37e";
//   guest.style.background="#15e37e";
//   mobile.style.opacity="1";
//   birthdate.style.opacity="1";
//   adhar.style.opacity="1";
//   pwd1.style.top="0px";
//   pwd2.style.top="0px";
//   pwd1.style.transition="0.8s";
//   pwd2.style.transition="0.9s";
//   mobile.style.transition="0.5s";
//   birthdate.style.transition="0.7s";
//   adhar.style.transition="0.9s";
// });
// guest.addEventListener('click', ()=>{
//   guest.style.background="linear-gradient(90deg, rgba(2,0,36,1) 31%, rgba(21,227,126,1) 59%, rgba(53,158,169,1) 89%)";
//   admin.style.background="#15e37e";
//   owner.style.background="#15e37e";
//   mobile.style.opacity="0";
//   birthdate.style.opacity="0";
//   adhar.style.opacity="0";
//   pwd1.style.top="-110px";
//   pwd2.style.top="-110px";
//   pwd1.style.transition="0.8s";
//   pwd2.style.transition="0.9s";
//   mobile.style.transition="0.9s";
//   birthdate.style.transition="0.7s";
//   adhar.style.transition="0.5s";
// });



// function login(){

//   document.querySelector(".sighupform h3").style.display="none";
//   document.querySelector(".admin").style.display="none";
//   document.querySelector(".Owner").style.display="none";
//   document.querySelector(".Guest").style.display="none";
//   document.querySelector(".fname").style.display="none";
//   document.querySelector(".mname").style.display="none";
//   document.querySelector(".lname").style.display="none";
//   document.querySelector(".male").style.display="none";
//   document.querySelector(".female").style.display="none";
//   document.querySelector(".other").style.display="none";
//   document.querySelector(".gender").style.display="none";
//   document.querySelector(".Male").style.opacity="0";
//   document.querySelector(".Female").style.opacity="0";
//   document.querySelector(".Other").style.opacity="0";
//   mobile.style.display="none";
//   birthdate.style.display="none";
//   adhar.style.display="none";
//   pwd1.style.top="-250px";
//   pwd1.style.transition="0.8s";
//   pwd2.style.display="none";
//   document.querySelector(".Email").style.top="-150px";
//   document.querySelector(".Email").style.transition="0.7s";
//   document.querySelector(".si_button label1").innerHTML="login";
//   document.querySelector(".pwd1").placeholder="Password";

//   document.querySelector(".tc").style.display="none";
//   document.querySelector(".login").style.display="none";
//   document.querySelector(".s_up").style.display="none";
//   document.querySelector(".si_back a").style.opacity="1";
//   document.querySelector(".loginbtn").style.opacity="1";
//   document.querySelector(".loginbtn").style.position="center";
//   document.querySelector(".loginbtn").style.margin="0px 200px";
//   document.querySelector(".Icon_image img").style.height="500px";
// }




const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});