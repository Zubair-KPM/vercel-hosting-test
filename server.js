const express = require('express');
const app = express();

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Adjust path as needed
});


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
