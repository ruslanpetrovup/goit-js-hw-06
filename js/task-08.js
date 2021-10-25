const form = document.forms[0];
const formBtn = document.querySelector('.login-form');
const { email, password } = form;
const formCheck = (evn) => {
  evn.preventDefault()
  if (!email.value || !password.value) {
    alert('Check the data entry')
    form.reset()
    return
  }
  console.log(`Email: ${email.value}`);
  console.log(`Password: ${password.value}`)

}
formBtn.addEventListener('submit',formCheck)