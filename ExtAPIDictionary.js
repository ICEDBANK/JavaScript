// Define a function called defineWord

function defineWord() {

    // Select the input element with the ID 'target' and store it in the variable 'target'

    let target = document.querySelector("#target");

    // Select the parent element of list items with the ID 'liParent' and store it in the variable 'liParent'

    let liParent = document.querySelector("#liParent");

    // Get the value of the input field and store it in the variable 'objective'

    let objective = target.value;

    // Check if the input field is empty

    if (objective === "") {

        // If the input field is empty, show an alert message

        alert("Please Enter A Word");

    } else {
        // If the input field is not empty
        
        // Check if there is already a list item present

        let existingli = liParent.querySelector("li");

        if (existingli) {

            // If a list item is already present, remove it

            existingli.remove();

        }

        // Fetch data from the dictionary API for the entered word

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${objective}/`)

            // Once the data is fetched, parse it as JSON

            .then(response => response.json())

            // Once the JSON data is retrieved, handle it

            .then((mydata) => {

                // Create a new list item element

                let li = document.createElement("li");

                // Set the inner HTML of the list item to the definition of the word

                li.innerHTML = mydata[0].meanings[0].definitions[0].definition;

                // Append the list item to the parent element

                liParent.appendChild(li);

                // Log the definition to the console

                console.log(mydata[0].meanings[0].definitions[0].definition);

            })

            // Handle errors if fetching data fails
            
            .catch(error => {
                console.log("Broke", error);
            });
    }
}
