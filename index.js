const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())
const userRoute = require('./src/User/user.route')

// Connect to the database using mongoose
mongoose.connect('mongodb://127.0.0.1/crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection is successful"))
    .catch(err => console.error("Connection failed:", err));

// appication route here

app.use('/user-route',userRoute)


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});