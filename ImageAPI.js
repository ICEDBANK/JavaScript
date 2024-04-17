/*
 The code selects an HTML element with the class robotImage using
 document.querySelector(".robotImage"). This element is presumably
 where the robot images will be displayed.
*/

let robotImage = document.querySelector(".robotImage");

/*
Fetching Robot Images: Inside the loop, the code fetches robot
images from the RoboHash API (https://robohash.org/${i}) for
IDs ranging from 1 to 10.
*/

for (let i = 1; i < 11; i++) {

    // Fetch a robot image from the RoboHash API for a specific ID
    fetch(`https://robohash.org/${i}`)
    
    // Once the image is fetched successfully
    .then((response) => {

        /*
        Creating Image Elements: Once the image is fetched successfully,
        a new image element (<img>) is created using document.createElement('img').
        */

        let img = document.createElement('img');

        /*
        Setting Image Source: The src attribute of the image is set to the
        URL of the fetched image using img.src = response.url.
        */

        img.src = response.url;

        /*
        Appending Images to Container: The newly created image is appended
        to the robotImage container element using robotImage.appendChild(img).
        */

        robotImage.appendChild(img);
    })

    // Handle errors if fetching data fails
    .catch((error) => {
        console.log("Failed To Get Data ", error);
    });
}

