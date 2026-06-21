/* Requirements - Utilize reasonable code organization practices, Weight 5%:
Spent a good deal of time researching best practices for code and directories organization.
Organized files based upon types and usage, which actually is similar to Lab 318.3.1 - Expanding a RESTful API */

import express from "express";

// Middleware Imports

import logger from "./middleware/logger.js";
import validator from "./middleware/validator.js";
import error from "./middleware/error.js";

// Briefs Data Import For View Route

import briefs from "./data/briefs.js";

// Route Imports

import briefsRouter from "./routes/briefs.js";
import contactsRouter from "./routes/contacts.js";
import teamRouter from "./routes/team.js";

const app = express();
const port = 3000;

// View Route For Briefs.ejs

app.get("/briefs", (req, res) => {

    res.render("briefs", { briefs });

    }
);

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

app.use("/api/briefs", briefsRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/team", teamRouter);

// Error Middleware Use

app.use(error);

app.listen(port, () => {

    console.log(`Server listening on port: ${port}.`);

});
