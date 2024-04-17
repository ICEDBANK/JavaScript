let container = document.querySelector("#container");

// Fetch data from the file 'data.txt'
//The fetch() function is used to fetch data from a specified URL ('data.txt' in this case).

fetch('https://swapi.dev/api/people/1/')

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

        let p = document.createElement('p');
        p.innerHTML = mydata.name;
        container.appendChild(p);

    }).catch((error) =>{
        console.log("Failed To Get Data " , error);
    })