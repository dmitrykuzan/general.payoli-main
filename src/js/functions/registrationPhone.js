import intlTelInput from 'intl-tel-input';


export const registrationPhone = () => {
  const inputRegistration = document.querySelector("#phone-registration");

  if(inputRegistration) {
    intlTelInput(inputRegistration, {
      onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
      "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
      "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
      "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
    });
  }
};

