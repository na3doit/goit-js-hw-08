import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

formEl.addEventListener('submit', onSubmitForm);
formEl.addEventListener('input', throttle(onFormData, 500));

listenTextarea();

function onSubmitForm(event) {
  event.preventDefault();

  const { email, message } = event.currentTarget;
  const formInput = {
    email: email.value,
    message: message.value,
  };

  console.log(formInput);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function listenTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    formData = JSON.parse(savedMessage);
    email.value = formData.email;
    message.value = formData.message;
  }
}
