const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
var bodyParser = require('body-parser');

// khai bao routes
const authRoute = require('./routes/author');
const bookRoute = require('./routes/book');



dotenv.config();
// CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

)
    .then(() => {
        console.log('Database connected successfully!');
    })
    .catch((err) => {
        console.log('Error connecting with error code:', err);
    })

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));


// ROUTES
app.use("/v1/author", authRoute)
app.use("/v1/book", bookRoute)


app.listen(8008, () => {
    console.log('listening on port', 8008);
})