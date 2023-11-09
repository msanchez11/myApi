const express = require("express")
require("dotenv").config()
const cors = require("cors")
const dbConnect = require("./config/mongo")

const app = express()
app.use(cors())
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening https://localhost:${port}`)
});

dbConnect();
