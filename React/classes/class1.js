/*
    React is a Javascript library known for front end development, it is popular due to its component-based architecture, Single Page Applications (SPAs) and Virtual DOM for building web applications that are fast, efficient, and scalable.
    Virtual Dom:
    Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
    Hence it only changes what needs to be changed.

    JSX (JavaScript XML)
    JSX allows you to write HTML-like syntax in JavaScript.
    This: 
        const element = <h1>Hello, React!</h1>;
    Is equivalent to:
        const element = React.createElement("h1", null, "Hello, React!");

    JSX Converts html tags into react elements.
    To use jsx we add the file extension ".jsx" to our filename. Instead of ".js or .ts"

    Rendering React

    ReactDOM is responsible for rendering React components into the actual DOM. it has methods like createRoot() and render().
    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(<p>Hello</p>);


    React is the core library used for building UI components and managing state. Provide hooks, like useState, useEffect, etc

*/

