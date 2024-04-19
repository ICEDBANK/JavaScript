// Select the form element and the data holder table body element
const myform = document.getElementById('myform');
const dataHolder = document.getElementById('dataHolder');

/*

Fetching Data: The code uses the fetch API to retrieve data from the specified 
API endpoint (https://api-db-a57ed-default-rtdb.firebaseio.com/user.json).
It then parses the response as JSON and logs the retrieved data to the console.

*/

fetch(`https://api-db-a57ed-default-rtdb.firebaseio.com/user.json`)
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        console.log("Data retrieved:", data); // Log retrieved data
        // Loop through each entry in the retrieved data
        for (const key in data) {
            // Create a new table row for each entry
            let tr = document.createElement('tr');
            // Populate the table row with data from the API response
            tr.innerHTML = `<td>${data[key].name}</td><td>${data[key].email}</td>`;
            console.log("Created table row:", tr); // Log created table row
            /* 
            
            Appending Data to Table: For each entry in the retrieved data, the
            code dynamically creates a new table row (<tr>) and populates it with
            the name and email data from the API response. These table rows are
            appended to the <tbody> element with the id dataHolder.

            */
            dataHolder.appendChild(tr);
        }
    })
    .catch((error) => {
        console.log("Failed to get data:", error); // Log fetch error
    });

/*

Form Submission: The code adds an event listener to the form's submit event. When the
form is submitted, it prevents the default form submission behavior, retrieves the form
data using FormData, and sends a POST request to the API endpoint to add the form data.
If the request is successful, the form is reset, and the page is redirected to a
confirmation page.

*/
myform.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Create a new FormData object containing form data
    const formWithData = new FormData(myform);
    // Send a POST request to the API to add data
    fetch(`https://api-db-a57ed-default-rtdb.firebaseio.com/user.json`, {
        method: 'POST', // Use POST method
        body: JSON.stringify(Object.fromEntries(formWithData)), // Convert form data to JSON string
        headers: {
            'Content-Type': 'application/json' // Specify content type as JSON
        }
    })
    .then(() => {
        myform.reset(); // Reset the form after successful submission
        // Redirect to a confirmation page
        window.location.href = 'http://127.0.0.1:5500/confirm.html';
    })
    .catch((error) => {
        console.log("Failed to post data:", error); // Log post error
    });
});



