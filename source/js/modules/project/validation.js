import {resetDefaultForm} from './reset-default-form.js';

const initForm = (myForm) => {
  if (myForm) {
    resetDefaultForm(myForm);
  }
};

export {initForm};
