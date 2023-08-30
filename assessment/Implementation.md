# WEB APPLICATION DEVELOPMENT FINAL PROJECT

Name: Stuart Saint

Student ID: G00411381

Date: 30th August, 2023

Index page: index.html

## Required Features

The below italicised and bolded items are each of the required items from the exam brief. My responses follow each point directly.

- **_Allow the customer to enter their login details and have login details validated (via a login screen) before receiving a summary of the order - You can implement the login feature any way you wish using JavaScript and/or Node. The credentials for your website should be user and pass (all lowercase)._** This has been implemented using the same process in the tutorial, where the create user function is called at the top of the index.js file. This won't persist from session to session, but I believe this is out of scope as long as we aren't using something like Werkzeug to implement secure routing and database connections.

- **_Create a form and perform form validation through JavaScript or HTML to ensure that text fields are not empty and a valid email address is entered._** A validated form uses HTML's standard form validations for e-mail addresses, while the name and address inputs use the minlength property.

- **_Include a slideshow or carousel which displays a different image each time the page is loaded._** - The carousel has been implemented but the random nature of the task has not. I found some simply ways of implementing random numbers but I ran out of time to implement this.

- **_Allow the user to purchase items from the site._** - The purchase process is completed up until the point at which an order requires payment and completion. The user can see a basket that is updated as they navigate through the site, and then enter recipient details using a form on the checkout page.

- **_Use an object or an array in JavaScript._** - In adding items to the cart, products are converted to a string object to be passed to local storage, and are then parsed to add them to the order summary.

- **_Use at least one custom module in Node._** - The authorisation process is completed using a module.

- **_Include capability for handling ‘post’ and ‘get’ requests._** - There are range of GET requests through the page, including SQL calls, while the POST methd is used for user log-ins.

- **_Include both static and dynamic content._** - The carousel on the logged-in homepage, as well as the item page and the store page are in EJS format, while the checkout page utilises dynamic content to present the user's order. In terms of static content, any images used are stored locally, while the landing page and the checkout pages are in HTML format.

- **_Include the use of Templates in Node._** - There store and item pages use the EJS templates, as well as the home-page for logged in users.

- **_Include error messages to provide feedback to users in case of any issues or errors._** - There are error pages to capture any incorrect logins or invalid product IDs that may be searched for.

- **_Connect to a MySQL database that contains relevant site information (eg., product info) using Node. Your database name should be your ATU ID, eg, G00345678, both username and password should be root._** -  See below for why the password is 'root123' instead of 'root', a copy of the G00411381

- **_Use the bootstrap version 5 framework (via CDN)._** Each HTML and EJS page contained a link to the Bootstrap 5 CDN within the page's 'head' element.

## Bugfixes

- I had a lot of trouble getting my default non-CSS page linked to into ExpressJS pages, until [StackOverflow](https://stackoverflow.com/questions/24582338/how-can-i-include-css-files-using-node-express-and-ejs#24582622) below reminded me that CSS files are static, and so are served from a single location determined by the 'app.use(express.static("pages"));' command.
- I have saved the username/password sent to MySQL as 'root' and 'root123' in the index.js file. I was having trouble getting around some error messages, and I could see that other people in the module discussion forum had similar issues. With Michael's guidance, the simple fix outlined on [YouTube](https://youtu.be/W2TuIx2y4kw?si=SxXfN5TJfpBAzBl6) allowed this.

## Code Referencing

The following links are referenced in the HTML and EJS files where used:

- The Bootstrap documentation was used to as create a [box model](https://getbootstrap.com/docs/4.0/layout/grid/#how-it-works) for each page, as well as how to [offset columns](https://getbootstrap.com/docs/5.0/layout/columns/) within that model. To finish the All Products view I had to re-read some material on the column and grid system in Bootstrap, luckily [W3Schools](https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp) had a great summary on this.

- The same documentation was used to style many of the elements on the page, including creating a [navigation bar](https://getbootstrap.com/docs/4.0/components/navbar/), styling [select](https://getbootstrap.com/docs/5.0/forms/select/) elements, and using [buttons](https://getbootstrap.com/docs/4.0/components/buttons/).

- The carousel styling was easy to implement, again thanks to [Bootstrap](https://getbootstrap.com/docs/4.0/components/carousel/), which also highlighted how to change the [speed](https://getbootstrap.com/docs/4.0/components/carousel/#options) of the selection. Randomising the visuals was more difficult, I ran through a number of tutorials of varying complexity, [WebDevPuneet](https://webdevpuneet.com/bootstrap-carousel-shuffle-slides/#gsc.tab=0) provided the most straightforward explanation of the process but I still cannot get it to work.

- The form validation items were taken from [W3Schools](https://www.w3schools.com/howto/howto_js_validation_empty_input.asp). Originally I planned to use JavaScript to complete this as a host of search results recommended this, but [Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/minlength) highlighted the minlength property that can be used for input and textarea values. The regular min property can only be used for numbers or dates, so I had previously not been able to implement this so easily.

- I created an "All Products" view that built upon the logic idea we had for adding to the cart in the tutorials. I could get the objects on to the page unparsed and was going down a bit of a rabibit hole, luckily I found a [StackOverflow](https://stackoverflow.com/questions/46632181/how-to-create-html-table-dynamically-from-database-with-node-js-and-express) response that broke the problem down really simply.
