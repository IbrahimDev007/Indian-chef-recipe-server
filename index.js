const express = require('express');
const cors = require('cors');
const app = express();

// enable CORS
app.use(cors());

// your routes and middleware go here

app.listen(5000, () => {
    console.log('Server started on port 5000');
});