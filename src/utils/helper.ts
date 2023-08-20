export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const getGreetingBasedOnTimeOfDay = () => {
  const d = new Date();
  const time = d.getHours();

  if (time >= 6 && time < 12) {
    return 'Good Morning,';
  } else if (time > +12 && time < 18) {
    return 'Good Afternoon,';
  } else {
    return 'Good Evening,';
  }
};
