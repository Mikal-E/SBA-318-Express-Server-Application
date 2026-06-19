/* Requirements - Utilize reasonable code organization practices, Weight 5%:
Spent a good deal of time researching best practices for code and directories organization.
Organized files based upon types and usage, which actually is similar to Lab 318.3.1 - Expanding a RESTful API */

import express from "express"

const app = express();
const port = 3000;

// Parsing Middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// View Engine Set

app.set("view engine", "ejs");

// Static Files Middleware

app.use("/public", express.static("public"));

app.listen(port, () => {

    console.log(`Server listening on port: ${port}.`);

});
