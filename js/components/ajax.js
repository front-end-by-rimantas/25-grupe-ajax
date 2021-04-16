function ajax(fileName, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            const parsedResponse = JSON.parse(this.responseText);
            callback(parsedResponse);

        }
    };
    xhttp.open("GET", `https://front-end-by-rimantas.github.io/25-grupe-ajax/js/data/${fileName}`, true);
    xhttp.send();
}

export { ajax }