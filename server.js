const express = require('express');
const cors = require('cors');
const app = express();

// app.use(cors({
//     origin: [`http://localhost:3000/creators, `],
//     methods: "GET,POST",
//     optionsSuccessStatus: 200
// }))

require('dotenv').config();

app.use(express.json());
// app.use(express.urlencoded({
//     extended: false
// }));

//  * CORS allows for Local Devlopment
// ! Work around without using CORS (again only local)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date().toLocaleTimeString()}`);
    next();
});

app.get('/creators', async (req, res) => {
    const creators = [{
            name: 'John',
            img: 'https://'
        },
        {
            name: 'Becky',
            img: 'https://'
        },
        {
            name: 'George',
            img: 'https://'
        },
        {
            name: 'Michael',
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