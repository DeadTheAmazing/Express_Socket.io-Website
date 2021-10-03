<p align="center">
    <a href="https://github.com/DeadTheAmazing/Express_Socket.io-Website/releases" alt="Releases">
        <img src="https://img.shields.io/github/downloads/DeadTheAmazing/Express_Socket.io-Website/total?logo=Github" /></a>
    <a href="" alt="Repo Size">
        <img src="https://img.shields.io/github/repo-size/DeadTheAmazing/Express_Socket.io-Website?logo=Github" /></a>
  <a href="" alt="Version">
        <img src="https://img.shields.io/github/v/release/DeadTheAmazing/Express_Socket.io-Website?logo=Github" /></a>
  <a href="" alt="Top Language">
        <img src="https://img.shields.io/github/languages/top/DeadTheAmazing/Express_Socket.io-Website?logo=Github" /></a>
</p>

# Express + Socket.io Website

This website is built off of the **[Express](https://expressjs.com)** and **[Socket.io](https://socket.io)** libraries and runs on **[Node.js](https://nodejs.org/en/)**

## Installation

Use the package manager **[npm](https://www.npmjs.com)** to install express

```bash
npm i express
```
and then socket.io.
```bash
npm i socket.io
```

## Starting
To start the server first you need to go into the directory using `cd`
```bash
cd ./Your/Directory/Here
```
and then start it using `node`
```bash
node .
``` 
The code above will start the index.js file and run the code on port **80**

## Details
I have commented *each* line of code for ease of understanding. When you need to know what a certain line does you can look to the right of it for something like this.
```javascript
io.on('connection', (socket) => {
    var address = socket.handshake.address; // this is where you will see my comments!
    ... 
};
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

If you think my comments are trash and don't explain the code well please consider making a pull request so this repo can do it's job better!

This is merely an **example** of a website with basic Socket.io integration with a Express website so please don't add anything advanced and complicated.

# License
This repo uses the **[MIT](https://choosealicense.com/licenses/mit/)** license because everyone loves open source!

# Credit
Credit goes to @DeadTheAmazing for all the code written.
