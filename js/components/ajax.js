function ajax(fileName, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            const parsedResponse = JSON.parse(this.responseText);
            callback(parsedResponse);

        }
    };
    xhttp.open("GET", `http://127.0.0.1:3000/js/data/${fileName}`, true);
    xhttp.send();
}

export { ajax }