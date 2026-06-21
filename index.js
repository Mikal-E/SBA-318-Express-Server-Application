/* Requirements - Utilize reasonable code organization practices, Weight 5%:
Spent a good deal of time researching best practices for code and directories organization.
Organized files based upon types and usage, which actually is similar to Lab 318.3.1 - Expanding a RESTful API */

import express from "express";

// Middleware Imports

import logger from "./middleware/logger.js";
import validator from "./middleware/validator.js";
import error from "./middleware/error.js";

// Route Imports

import briefs from "./routes/briefs.js";
import contacts from "./routes/contacts.js";
import team from "./routes/team.js";

const app = express();
const port = 3000;

// Parsing Middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// View Engine Set

app.set("view engine", "ejs");

// Static Files Middleware

app.use("/public", express.static("public"));

// Middleware Use

app.use(logger);
app.use(validator);

// Route Use

app.use("/api/briefs", briefs);
app.use("/api/contacts", contacts);
app.use("/api/team", team);

// Error Middleware Use

app.use(error);

app.listen(port, () => {

    console.log(`Server listening on port: ${port}.`);

});
