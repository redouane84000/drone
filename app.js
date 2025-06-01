require('dotenv').config();
console.log("cle stripe detectee", process.env.STRIPE_SECRET_KEY);

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const route = require('./routes/route');


app.use(express.json());
app.use(cors());

app.use('/', route);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
});
