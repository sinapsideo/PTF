const bio = document.querySelector("#bio");
const works = document.querySelector("#works");
const tools = document.querySelector("#tools");
const contact = document.querySelector("#contact");
const buttonBio = document.querySelector(".button-boxes-bio");
const buttonWorks = document.querySelector(".button-boxes-works");
const buttonTools = document.querySelector(".button-boxes-tools");
const buttonContact = document.querySelector(".button-boxes-contact");

bio.addEventListener('click', function bioFunction() {
  document.querySelector('.inside-box-nav').style.display =  "none";
  document.querySelector('.bio-box').style.display =  "block";

});
works.addEventListener('click', function worksFunction() {
  document.querySelector('.inside-box-nav').style.display =  "none";
  document.querySelector('.works-box').style.display =  "block";

});
tools.addEventListener('click', function toolsFunction() {
  document.querySelector('.inside-box-nav').style.display =  "none";
  document.querySelector('.tools-box').style.display =  "block";

});
contact.addEventListener('click', function contactFunction() {
  document.querySelector('.inside-box-nav').style.display =  "none";
  document.querySelector('.contact-box').style.display =  "block";

});

buttonBio.addEventListener('click', function buttonFunction() {
  document.querySelector('.inside-box-nav').style.display =  "block";
  document.querySelector('.bio-box').style.display =  "none";

});
buttonWorks.addEventListener('click', function buttonFunction() {
  document.querySelector('.inside-box-nav').style.display =  "block";
  document.querySelector('.works-box').style.display =  "none";

});
buttonTools.addEventListener('click', function buttonFunction() {
  document.querySelector('.inside-box-nav').style.display =  "block";
  document.querySelector('.tools-box').style.display =  "none";

});
buttonContact.addEventListener('click', function buttonFunction() {
  document.querySelector('.inside-box-nav').style.display =  "block";
  document.querySelector('.contact-box').style.display =  "none";

});
