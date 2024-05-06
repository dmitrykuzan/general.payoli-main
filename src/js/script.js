"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import {
  mobileCheck,
  burger,
  dynamicAdaptive,
  inputInternational,
  registrationPhone,
  modals,
} from "./functions/";


// Components
import { scrollBlock, cardSlider, choicesSelect, choicesCurrency } from "./components";


window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  burger();
  dynamicAdaptive();
  inputInternational();
  scrollBlock();
  cardSlider();
  choicesCurrency();
  choicesSelect();
  registrationPhone();
  modals();
});
