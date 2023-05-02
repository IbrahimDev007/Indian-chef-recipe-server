const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./chief.json');

// enable CORS
app.use(cors());

// your routes and middleware go here
app.get('/', (req, res) => {
    const chefsData = chefs.map(chef => {
        return {
            name: chef.name,
            picture: chef.picture,
            years_of_experience: chef.years_of_experience,
            number_of_recipes: chef.number_of_recipes,
            likes: chef.likes
        };
    });

    res.send(chefsData);
});



app.listen(port, () => {
    console.log(`Chiefe API is running on port: ${port}`)
})