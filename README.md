<h1 align="center">Welcome to One Dionys - Ajax Wrapper! 👋 </h1>

<p align="center">Facilitates the use of XMLHttpRequest or Fetch API for HTTP requests with simpler syntax. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-ajax-wrapper?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-ajax-wrapper?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-ajax-wrapper?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-ajax-wrapper?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-ajax-wrapper.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-ajax-wrapper?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-ajax-wrapper?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
// Import ajaxWrapper module
const ajaxWrapper = require('ajax-wrapper');

// Define the URL and data for the POST request
const url = 'https://jsonplaceholder.typicode.com/posts';
const postData = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

// Send a POST request
ajaxWrapper(url, 'POST', postData)
.then(response => {
    console.log('POST Response:', response);
    // Handling successful responses
})
.catch(error => {
    console.error('Error:', error);
    // Handle error
});
```

#### Explanation

* The ajaxWrapper function is used to submit an AJAX request to the specified URL with the specified method (GET, POST, etc.) and optional data for POST requests.
* This function returns a Promise. If the request is successful, the Promise will be resolved with the response from the request. If there is an error in the request, the Promise will be rejected with an error object containing information about the error.

#### Return Value

* If the request succeeds, the ajaxWrapper function will return a Promise that will be resolved with the response from the request.
* If the request fails due to a network error or server error (e.g. status code unsuccessful), the ajaxWrapper function will return a rejected Promise with an error object containing information about the error.

## 📆 Release Date

* v1.0.0 : 07 March 2024
* v1.0.1 : 10 March 2024
* v1.0.2 : 10 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Ajax Wrapper is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Ajax Wrapper? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
