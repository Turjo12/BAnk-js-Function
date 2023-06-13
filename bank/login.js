//  steo-1: add click event handler with the submit button

document.getElementById('button-submit').addEventListener('click', function(){

const emailField =  document.getElementById('user-email');

const email = emailField.value;

const passwordField = document.getElementById('user-password');
const password = passwordField.value;
console.log(email, password);

if(email==='tonmoyk259922@gmail.com' && password ==='2525'){
  window.location.href = 'indexs.html'
 }
else{
    alert('ARE YOU FORGET YOUR EMAIL OR PASSWORD YOUR ACCOUNT WILL BE IN DANGER...!! PLEASE CONTACT WITH BANK. TO REMEMBER YOUR EMAIL OR PASSWORD. \n HOTLINE : 01731158705')
}
})