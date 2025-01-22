# React-server-render

Several years ago, I encountered a project where the mobile version suffered from slow load times. To address this, we initiated a research project aimed at improving performance. Our initial efforts involved caching the JavaScript bundle in the browser and splitting it into multiple files. As a next step, we explored server-side rendering (SSR) to see if it could further enhance performance. In this section, I'll review our findings regarding server-side rendering technologies.

let's review the react server render technology. use a simple counter as an example.

In this branch, I use express to implement the server-side rendering. the server will render the react component and send the html to the client. the client will use the html to render the page.
but now the button is not working, because the client-side js is not loaded. we are not doing hybrid rendering.
