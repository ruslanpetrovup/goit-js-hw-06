const form = document.forms[0];
const formBtn = document.querySelector('.login-form');
const { email, password } = form;
const formCheck = (evn) => {
  evn.preventDefault()
  if (!email.value || !password.value) {
    alert('Check the data entry')
    return
  }
  console.log(`Email: ${email.value}`);
  console.log(`Password: ${password.value}`)
  form.reset()

}
formBtn.addEventListener('submit',formCheck)