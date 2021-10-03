const // put all your consts here
    express = require('express') // require express
  , app = express() // initalize it
  , http = require('http') // http
  , server = http.createServer(app) // create the server
  , { Server } = require("socket.io") // socket.io to talk to your users
  , io = new Server(server) // initalize it
  , path = require('path') // used to grab your all the need files
  , PORT = process.env.PORT || 80 // 80 is default http port but change it to your needs
  , pathz = [["/","/view/index.html"],["/upload","/view/upload.html"]]; // to add another page to your site the format is 
  //
  //    [ ["HOW TO GET TO YOUR PAGE","WHERE THE FILE IS LOCATED"] , ["etc","etc"] , and so on! ]
  //

app.use(express.static(path.join(__dirname, 'public'))); // this is where you keep your static files like js css images etc.
    // you dont need to restart the server for these to update since you are grabbing them with each request!
pathz.forEach(function(element,i){ // a foreach loop to set up each of your pages!
    // this is added for ease of your life!
  app.get(pathz[i][0], (req, res) => { // this is how you initalize a page
    res.sendFile(__dirname + pathz[i][1]) // this grabs your page file
  });
});

io.on('connection', (socket) => {
    var address = socket.handshake.address; // this grabs the ipv6
    var IPADDR = address.split(":")[3]; // this grabs the actual ipv4 you want
    console.log('[\x1b[96mConnection\x1b[0m] [\x1b[92mNEW\x1b[0m]',IPADDR); // log a new connection alongside the IP requesting
        // PLEASE refer to the example html file script section because this will only log a new IP connection if it has the socket.io code on the page!
    socket.on('disconnect', () => { // if a user has disconnected
        console.log('[\x1b[96mConnection\x1b[0m] [\x1b[91mDEAD\x1b[0m]',IPADDR); // Log the dead connection with its IP
    });

    socket.on('hello', (msg) => { // when the server gets a 'hello' message from a user
        console.log(`${IPADDR} has said \n${msg}!`); // log the msg (the msg variable is the info sent)
        socket.emit('helloback', `hello ${IPADDR}! Welcome to my site.`); // emit a helloback message with a string including their IP!
    });

  });
server.listen(PORT, () => { // when you run node .
  console.log('[\x1b[1m\x1b[92mStarting\x1b[0m]'); // log that the server is STARTING
  console.log('[\x1b[1m\x1b[96mListening\x1b[0m]',`http://localhost:\x1b[95m${PORT}\x1b[0m`); // log that its listening and where at on your localhost. if you are using visual studio code its an actual link too!
});

// 
// 
// when thinking of login to implement on your backend remember that when the server emits something lets say because a user sent a emit. all of that is in its own enviroment and no other use will get the emit
// so you can even implement private messaging and no one will accidently get a users message.
// read on the socket.io docs for other things like rooms and whatever else i didnt add to this example for you!
// 
// 