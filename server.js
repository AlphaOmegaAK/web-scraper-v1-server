const express = require('express');
const app = express();
require('dotenv').config();

// app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

//  * CORS allows for Local Devlopment
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Content-Type");
    next();
})

app.get('/creators', async (req, res) => {
    const creators = [{
            name: '',
            img: 'https://'
        },
        {
            name: '',
            img: 'https://'
        },
        {
            name: '',
            img: 'https://'
        },
    ];
    // TODO  GET from DB
    res.send(creators);
});

app.post('/creators', async (req, res) => {
    // TODO : Scrape Chanell
    //  TODO : Add to DB
    console.log(req.body);
    res.send("Success");
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server Running on ${PORT}`));