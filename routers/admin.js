const express = require('express');
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');

// Middleware to parse form data
router.use(bodyParser.urlencoded({ extended: false }));

// Route for login
router.get('/login', (req, res, next) => {
    res.send(`
        <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/chat">
            <input type="text" id="username" name="userid" placeholder="Enter username"> 
            <button type="submit">Login</button>
        </form>
    `);
});

// Route to display the chat form
router.get('/chat', (req, res, next) => {
    // Read messages from the file
    fs.readFile('messages.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading messages file:', err);
            data = 'No messages available';
        }
        
        // Display messages along with the chat form
        res.send(`
            <div>
                <h3>Chat Messages</h3>
                <pre>${data}</pre>
            </div>
            <form onsubmit="document.getElementById('username').value = localStorage.getItem('username')" action="/chat" method="POST">
                <input type="hidden" id="username" name="username">
                <input type="text" id="message" name="message" placeholder="Enter message">
                <button type="submit">Send</button>
            </form>
        `);
    });
});

// Route to handle chat message submission
router.post('/chat', (req, res, next) => {
    const username = req.body.username;
    const message = req.body.message;

    // Append the message to the messages file
    fs.appendFile('messages.txt', `${username}: ${message}\n`, (err) => {
        if (err) {
            console.log('Error writing message to file:', err);
            return res.status(500).send('Server error');
        }
        console.log('Message saved successfully');
        res.redirect('/chat');
    });
});

module.exports = router;
