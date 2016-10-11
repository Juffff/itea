var request = new XMLHttpRequest();
request.open("GET", "test.json",true);


request.onreadystatechange = function () {
    console.log(request.status);
    console.log(this.responseText);
}
request.send();
