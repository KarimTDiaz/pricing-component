import { SUBSCRIPTION__OPTIONS } from './consts.js';

const cardsElement = document.getElementById('cards');

const plans = ['basic', 'professional', 'master'];

const changeModeSubscription = isChecked => {
  for (let index = 0; index < 3; index++) {
    for (let j = 0; j < 4; j++) {
      if (!isChecked) {
        cardsElement.children[plans[index]].children[j + 1].textContent =
          Object.values(SUBSCRIPTION__OPTIONS.monthly[plans[index]])[j];
      } else {
        cardsElement.children[plans[index]].children[j + 1].textContent =
          Object.values(SUBSCRIPTION__OPTIONS.annualy[plans[index]])[j];
      }
    }
  }
};

changeModeSubscription();

export { changeModeSubscription };
