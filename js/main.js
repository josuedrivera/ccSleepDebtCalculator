const getSleepHours = day => {
  
//switch statment could be used instead of if/else question

  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7.5;
  } else if (day === 'wednesday') {
    return 10;
  } else if (day === 'thursday') {
    return 7;
  } else if (day === 'friday') {
    return 6;
  } else if (day === 'saturday') {
    return 9;
  } else if (day === 'sunday') {
    return 5;
  } else {
    return 'Error! Something went wrong!';
  }
};

const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');


 const getIdealSleepHours = () => {
   const idealHours = 7.5;
   return idealHours * 7;
 };

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep this week.');
  } else if (actualSleepHours > idealSleepHours){
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more hour/s of sleep than you needed this week.');
  } else if (actualSleepHours < idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour/s less sleep than you needed this week. You should get some rest.');
  } else {
    console.log('Error! Something went wrong!')
  }
};

calculateSleepDebt();


// For extra practice, try these:

// getActualSleepHours() could be implemented without calling getSleepHours(). Use literal numbers and the + operator to rewrite getActualSleepHours(). It should still return the total actual hours slept in the week.

// Some people need to sleep longer than others. Rewrite getIdealSleepHours() so that you can pass it an argument, like getIdealSleepHours(8) where 8 is the ideal hours per night. Update the call to getIdealSleepHours() in calculateSleepDebt() too.

//HINT
// Put the daily sleep hours directly into getActualSleepHours().

// const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
// Make idealHours a parameter and multiply it by 7.

// const getIdealSleepHours = idealHours => idealHours * 7;
// When you call the updated function in calculateSleepDebt(), call it like this:

// const calculateSleepDebt = () => {
//   ...

//   const idealSleepHours = getIdealSleepHours(8);

//   ...
// };