const form = document.querySelector('.form__box');
const numberPattern =
  /\+?\d{1,4}[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}/;
const emailPattern =
  /^[a-zA-Zа-яА-ЯёЁ0-9._%+-]+@[a-zA-Zа-яА-ЯёЁ0-9.-]+\.[a-zA-Zа-яА-ЯёЁ]{2,}$/;

const formNumberInput = form.querySelector('#user-phone');
const formEmailInput = form.querySelector('#user-email');

form.setAttribute('novalidate', '');

function isEmpty(input) {
  return input.value.trim() === '';
}

form.addEventListener('focusin', (evt) => {
  if (evt.target === formEmailInput || evt.target === formNumberInput) {
    const label = form.querySelector(`label[for='${evt.target.id}']`);
    label.classList.add('form__label--disabled');
  }
});

form.addEventListener('focusout', (evt) => {
  if (
    (evt.target === formEmailInput && isEmpty(formEmailInput)) ||
    (evt.target === formNumberInput && isEmpty(formNumberInput))
  ) {
    const label = form.querySelector(`label[for='${evt.target.id}']`);
    label.classList.remove('form__label--disabled');
  }
});

function formValidation() {
  formNumberInput.addEventListener('input', () => {
    formNumberInput.setCustomValidity('');
    formNumberInput.classList.remove('form__input--error');
  });

  formEmailInput.addEventListener('input', () => {
    formEmailInput.setCustomValidity('');
    formEmailInput.classList.remove('form__input--error');
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const numberValue = formNumberInput.value.trim();
    const emailValue = formEmailInput.value.trim();
    const errors = [];

    if (numberValue.length === 0) {
      formNumberInput.setCustomValidity('Заполните это поле.');
      formNumberInput.reportValidity();
      formNumberInput.classList.add('form__input--error');
      return;
    }

    if (!numberPattern.test(numberValue)) {
      formNumberInput.setCustomValidity('Поле должно содержать только цифры.');
      formNumberInput.reportValidity();
      formNumberInput.classList.add('form__input--error');
      return;
    }

    if (emailValue.length === 0) {
      formEmailInput.setCustomValidity('Заполните это поле.');
      formEmailInput.reportValidity();
      formEmailInput.classList.add('form__input--error');
      return;
    }

    if (!emailValue.includes('@')) {
      errors.push('Адрес электронной почты должен содержать символ "@".');
    }

    if (!emailPattern.test(emailValue)) {
      errors.push('Адрес электронной почты не соответствует формату.');
    }

    if (emailValue.includes(' ')) {
      errors.push('В адресе электронной почты не должно быть пробелов.');
    }

    if (errors.length > 0) {
      formEmailInput.setCustomValidity(errors.join(' '));
      formEmailInput.reportValidity();
      formEmailInput.classList.add('form__input--error');
      return;
    }

    form.submit();
    formEmailInput.value = '';
    formNumberInput.value = '';
  });
}

formValidation();
