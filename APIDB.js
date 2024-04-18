const myform = document.getElementById('myform');

myform.addEventListener('submit' , (event) => {

    event.preventDefault();

    const formWithData = new FormData(myform);

    fetch(`https://api-db-a57ed-default-rtdb.firebaseio.com/item.json` , {

    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formWithData)),
    headers: {

        'Content-Type':'application/json'

        }

    })

})

