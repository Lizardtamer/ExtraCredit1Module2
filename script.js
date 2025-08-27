// Select the form using querySelector

const form = document.querySelector('form');

// TODO: Attach a "submit" event listener to the form
//Start of listener
// TODO: Prevent the form from refreshing the page

form.addEventListener("submit", function (event1){
  event1.preventDefault();
  console.log("nah don't refresh")
});
 
  /* 1. Show parent/children Data for learning/debugging */
  
  // TODO: Log the form's children collection in the console
  // TODO: Log the form's parent element tag name
  // TODO: Log how many children the form has

  const form1 = document.getElementById("feedbackForm");
  console.log(form1.children);
  
  const form1Length = form1Child.children.length;
  const form1Parent= form1.parentElement;

  console.log(form1Child);
  console.log("Form parent is: " + form1);
  console.log("Form length is: " + form1Length);

  /* 2. Extract values */
  // TODO: Select the name input
  const nameInput = document.getElementById("customerName");

  // TODO: Select the satisfaction input by its id
  const satisfactionInput = document.getElementById("satisfaction");

  //Get the value from the name input and trim spaces
  const name = nameInput.value.trim();
  //Convert satisfaction input to a number
  const score = parseInt(satisfactionInput.value);

  /* 3. TODO: Conditional operator
    Use the conditional operator ( ? : ) to create a message INCLUDING NAME INPUT where
    If score >= 4 → thank the customer
    Otherwise → promise to improve
  */

    if (score >= 4) {
      alert(nameInput + ", thank you!!!!")
    } else (score < 4); {
      alert(nameInput + ", we'll improve I swear T_T")
    }

  // 4. TODO: Show the message in an alert
//End of listener
