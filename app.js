// Select the HTML element with the ID 'char_list'

let char_list = document.querySelector("#char_list");

/* 
Fetching Data: The code fetches data from the Star Wars API (https://swapi.dev/api/people/${i}/)
for character IDs ranging from 1 to 99.
*/

for (let i = 1; i < 100; i++){

    // Fetch data from the file 'data.txt'
//The fetch() function is used to fetch data from a specified URL ('data.txt' in this case).

fetch(`https://swapi.dev/api/people/${i}/`)

/*
Once the data is fetched, convert the Response object to text format
The .then() method is used to handle the Promise returned by fetch().
Inside the first .then() callback, the Response object is converted
to text format using the text() method.
*/

.then((Response) => {
    return Response.text();
})

/*
    // Once the text data is retrieved, parse it as JSON and log it to the console
In the second .then() callback, the text data is retrieved and stored in
the data variable. It is then parsed as JSON using JSON.parse() and
stored in the mydata variable.
*/

.then((data) => {

    // Parse the text data as JSON

    const mydata = JSON.parse(data);

    // Log the parsed JSON data to the console
    //Finally, the parsed JSON data (mydata) is logged to the console using console.log().

    console.log(mydata);

    /*
    Creating Table Rows: For each character, a new table row (<tr>) is created using
    document.createElement('tr'). The inner HTML of the table row is set with data from
    the API response.
    */

    let tr = document.createElement('tr');
    tr.innerHTML = `
    <tr>
        <td>${mydata.name}</td>
        <td>${mydata.height}</td>
        <td>${mydata.mass}</td>
        <td>${mydata.hair_color}</td>
        <td>${mydata.skin_color}</td>
        <td>${mydata.eye_color}</td>
    </tr>
    `;

    /*
    Appending Rows to Table: The newly created table row is appended to the char_list table.
    */

    char_list.appendChild(tr);



}).catch((error) =>{
    console.log("Failed To Get Data " , error);
})

}

