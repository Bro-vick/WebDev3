    /*
        Exception/Error Handling
        When executing Javascript codes, error might ocuur. Exception handling is the process of handling abnormal statements or errors in the code.
        There are three types of errors:
        1) Syntax Error: When a user makes a mistake in the pre-defined syntax of a programming language.
        2) Runtime Error: This occurs during the execution of the program. The codes which create runtime errors are known as exceptions.
        3) Logical Error: An error which occurs when there is a logical mistake in the program.
        e.g An infinite loop

        Syntax:
        try{
            //code
        } catch(err){
            // Code for the Error display or code to handle the error
            e.g console.error(err)
        }
        try: Statement tests a block of code to check for errors.
        catch: Statement is used to handle the error if any is present.
        throw: Statement is used to make custom error messages
        e.g throw new Error("This is my own error message")
    */
    try {
        const name = "Geore";
        name = "George";
    } catch (err) {
        console.error(err)
    }

    /* Using The Fetch Function
     // fetch -- IS a function used for making HTTP requests to fetch resources (images, files, JSON style data, etc) It simplifies asynchronous data fetching in javascript, and it is used for interacting with API's to retrieve and send data asynchronously over the web. 
    // syntax: fetch(url, {options})
    // options can be HTTP methods like put, post, delete and get. The default is get. {method: "Get"}.
    // e.g let randomImg = fetch('https://random.imagecdn.app/500/150') or let img2 = fetch('https://picsum.photos/200/300')

    // What is an API?
    // An API (Application Programming Interface), it is a set of rules and definitions that allows different software applications to communicate with each other. 
    // API's define methods and data formats that applications can use to request and exchange information, enabling seamless interaction btw different systems.

    Key concepts of an API
    Interface: An API serves as an interface between different software components. It specifies how requests and responses should be formatted.
    So that systems can process data correctly.

    Endpoints: Endpoints are specific URLs or URIs where the API can be accessed. Each endpoint corresponds to a specific functionality or resource that the API provides. 
    For example: https://random.imagecdn.app/500/150  this endpoint can be used for fetching random images.

    Request and Responses:
    Request: A client (such as a web browser or an application) makes a request to an API endpoint. This request typically includes an HTTP method(Get, Post, Put, Delete), etc.
    Response: The server processes the request and sends back a response which includes a status code (indicating success or failure), headers, and usually a body containing the requested data or confirmation of an action.
*/