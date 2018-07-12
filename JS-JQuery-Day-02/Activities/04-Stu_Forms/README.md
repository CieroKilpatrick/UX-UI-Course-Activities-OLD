# Daily UI Challenge - Forms

In this activity, you create a contact form which triggers a modal upon submission.

## Instructions

1. Create a form that has the following:

   - Labels and inputs for:

     - First name

     - Last name

     - Email

     - Message

   - A "Send Email" button

1. The HTML file includes a modal. Adjust the code as needed so that the modal is triggered when the "Send Email" button is clicked.

1. Create an event listener on the "Send Email" button that does the following:

   - Retrieves the input from the "First Name" input box and stores it to a variable.

   - Sets the HTML in `modal-body` to include a confirmation message. For example, "Thank you, `name`. Your message has been sent."

   - Clears the input fields on the form.

## Hints

- Use the [Bootstrap Documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/) as a refresher on forms and triggering modals with buttons.

- Remember that buttons in forms will reload the page unless `type` is set equal to `button`.

- If you are not sure that your event listener is working correctly or retrieving the right information, use `console.log(yourvariable)` and check the console to see what was retrieved.

- To read more about retrieving information from an input box using the `.val()` method see the [jQuery Documentation on .val()](http://api.jquery.com/val/#val1).

- To read more about setting information in an input box, see [jQuery Documentation on .val(value)](http://api.jquery.com/val/#val-value).

## Bonus

- Use conditionals to verify that the "First Name" input is not blank. If it is blank, set the `modal-body` to display "Sorry, some required fields are missing." and do not clear the form inputs. Otherwise, have it perform the same actions as in the regular solution.
