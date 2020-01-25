/* asynchronously get data from server */
const btn = document.getElementById('btn');

btn.addEventListener('submit', e => e.preventDefault());


function getdata() {
    paragraphs = document.getElementById('paragraphs').value;
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', `/?paragraphs=${paragraphs}`);
    xhttp.send();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
        }
    }
}

btn.addEventListener('click', e => getData());
