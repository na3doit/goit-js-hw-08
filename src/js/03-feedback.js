import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {};

formEl.addEventListener('submit', onSubmitForm);
formEl.addEventListener('input', throttle(onFormData, 500));

listenTextarea();

function onSubmitForm(event) {
  event.preventDefault();

  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function onFormData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function listenTextarea() {
  try {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
      formData = JSON.parse(savedMessage);
      Object.entries(formData).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
        formEl[key].value = value;
      });
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
