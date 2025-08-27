
const form=document.querySelector('form');

form.addEventListener("submit", function (event1){
  event1.preventDefault();
  console.log('nah don't refresh)
});

  const form1= document.getElementById("feedbackForm");
  const form1Length= [];

  console.log(form1.childrenElement);
  console.log(form1.parentElement);
  console.log(form1Length.childrenElement.length;);

  const nameInput = document.getElementById("customerName");

  const satisfactionInput = document.getElementById("satisfaction");

  const name = nameInput.value.trim();
  
  const score = parseInt(satisfactionInput.value);

    if (score >= 4) {
      alert(nameInput + ", thank you!!!!")
    } else (score < 4) {
      alert(nameInput + ", we'll improve I swear T_T")
    }

  ---

/* 1. Show parent/children Data for learning/debugging */
  
  // TODO: Log the form's children collection in the console
  // TODO: Log the form's parent element tag name
  // TODO: Log how many children the form has

  /* 2. Extract values */
  // TODO: Select the name input

  // TODO: Select the satisfaction input by its id

  //Get the value from the name input and trim spaces
  //Convert satisfaction input to a number

    /* 3. TODO: Conditional operator
    Use the conditional operator ( ? : ) to create a message INCLUDING NAME INPUT where
    If score >= 4 → thank the customer
    Otherwise → promise to improve
  */
// 4. TODO: Show the message in an alert
//End of listener

// Select the form using querySelector
// TODO: Attach a "submit" event listener to the form
//Start of listener
// TODO: Prevent the form from refreshing the page