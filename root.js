const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const bmiRoutes = require("./routes/bmiRoutes");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "js")));
app.use("/", bmiRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
    process.exit(1);
});
