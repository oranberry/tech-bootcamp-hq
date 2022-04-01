/* Given the 'id' attribute of a form element, 
   this will return the value entered by the user 
	 into that form element. */
     function formValue(id) {
        // Get the form element
        let formElement = document.getElementById(id);
        
        // When the form element isn't found, 
        // return a string that signifies that
        if (formElement === null) {
          return `[${id} NOT FOUND]`;
        }
      
        let value = formElement.value;
      
          // When the value is empty, 
        // return a placeholder string
        if (formElement.value.trim() === "") {
          return `[${formElement.placeholder}]`;
        }
      
        return document.getElementById(id).value;
      }
      
      /* Given the 'id' of an HTML element and a 
         'className', this will add that class to
         the HTML element. */
      function addClassToElement(id, className) {
        let element = document.getElementById(id);
        element.classList.add(className);
      }
      
      /* The code here will be executed each time
         that the form button is clicked. */
      function generate() {
        // Retrieve form values.
        let relative= formValue("relative");
        let adjective1 = formValue("adjective-1");
        let adjective2 = formValue("adjective-2");
        let adjective3 = formValue("adjective-3");
        let famousPerson = formValue("famous-person");
        let noun = formValue("noun");
        let dessert = formValue("dessert");
        let petName = formValue("pet-name");
        
        // Insert form values into madlib.
        let madLib = `
        Dear ${relative},
        <br><br>
        I have been having a really ${adjective1} time 
        at camp. The counselour is ${adjective2} and 
        the food is ${adjective3}. I met ${famousPerson} 
        and we quickly became ${noun}. Talk soon!
        <br><br>
        Your ${dessert},
        <br>
        ${petName}
      `;
      
        // Output madlib to player.
        document.getElementById("output").innerHTML = madLib;
        addClassToElement("container", "generated");
       
      }