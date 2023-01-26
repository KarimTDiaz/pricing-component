// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { changeModeSubscription } from './change-subscription.js';

const toggleElement = document.getElementById('toggle');

toggleElement.addEventListener('change', ev => {
  changeModeSubscription(ev.target.checked);
});
