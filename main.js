var xhr = new XMLHttpRequest();
//XML stands for extensible Markup Language which is a mark up language 
//similar too HTML in the way it structures data and it is a precursor to JSON.

xhr.open("GET", "https://swapi.co/api/"); 
//The get argument is used when we're retrieving data from a server. This 
//is standard for retrieving a webpage.
xhr.send();
//This sends the request. 

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    } 
};
//The xhr object maintains an internal state as it's completing the request operation.
//The ready state of 4 means the operation has been completed :-
//0	UNSENT = Client has been created. open() not called yet.
//1	OPENED = open() has been called.
//2	HEADERS_RECEIVED = send() has been called, and headers and status are available.
//3	LOADING = Downloading; responseText holds partial data.
//4	DONE = The operation is complete. -:
//--------------
//The HTTP status code of 200 means okay :- 
//200 OK = Standard response for successful HTTP requests.
//300 Multiple Choices = Indicates multiple options for the resource from which the client may choose
//401 Unauthorized = Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. 
//403 Forbidden = The request contained valid data and was understood by the server, but the server is refusing action.
//404 Not Found = The requested resource could not be found but may be available in the future.
//500 Internal Server Error = A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
//-------------
//After the code hjas checked the state and status are okay and finished. The code then gets the element by ID and changes it's inner html to the 
//response text that comes back from our xhr object.