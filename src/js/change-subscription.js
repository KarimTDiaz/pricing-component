import { SUBSCRIPTION__OPTIONS } from './consts.js';

const cardsElement = document.getElementById('cards');

const plans = ['basic', 'professional', 'master'];

const changeModeSubscription = toggle => {
  for (let index = 0; index < 3; index++) {
    cardsElement.children[index];

    for (let j = 0; j < 4; j++) {
      if (toggle.checked) {
        cardsElement.children[plans[index]].children[j + 1].textContent =
          Object.values(SUBSCRIPTION__OPTIONS.monthly[plans[index]])[j];
      } else {
        cardsElement.children[plans[index]].children[j + 1].textContent =
          Object.values(SUBSCRIPTION__OPTIONS.annualy[plans[index]])[j];
      }
    }
  }
};

export { changeModeSubscription };
