// API Endpoints For Contacts

import express from "express";
const router = express.Router();

import contacts from "../data/contacts.js";

/* Chained Routes: GET Route To Return All Contacts | POST Route To Create New Contacts
Requirements - Create GET routes for all data that should be exposed to the client, Weight 5%
Create POST routes for data, as appropriate. At least one data category should allow for client
creation via a POST request, Weight	5%
*/

/* Query Parameters For Data Filtering (One Required): Data Filtering Implemented On All 3 Data Categories - 2 of 3
Requirements - Include query parameters for data filtering, where appropriate. At least one data category
should allow for additional filtering through the use of query parameters, Weight 5%. */

router
    .route("/")
    .get((req, res) => {

        if (req.query.status) {

            const filteredContacts = contacts.filter((contact) => contact.status === req.query.status);
            res.json(filteredContacts);
            
        } else {

        res.json(contacts);

        }
    }
)

    .post((req, res) => {

            if (req.body.name && req.body.email && req.body.phone && req.body.preferredContact && req.body.status) {

        const contact = {

            id: contacts.length + 1,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            preferredContact: req.body.preferredContact,
            status: req.body.status

        };

        contacts.push(contact);
        res.json(contacts[contacts.length - 1]);
        } else res.status(400).json({error: "Insufficient Data" });

    }
)

/* Chained Routes: GET Route To Return One Contact By Id | PATCH Route To Update A Contact By Id | DELETE Route To Delete A Contact By Id
Requirements - Create GET routes for all data that should be exposed to the client, Weight 5%
Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request, Weight 5%
Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request, Weight 5%
*/

router
    .route("/:id")
    .get((req, res) => {

        const contact = contacts.find((clientContact) => clientContact.id == req.params.id);

        if (contact) res.json({ contact });
        else res.status(404).json({error: "Insufficient Data" });

    }
)

    .patch((req, res) => {

        const contact = contacts.find((clientContact) => clientContact.id == req.params.id);

        if (!contact) return res.status(404).json({ error: "Contact not found" });
        Object.assign(contact, req.body);

        res.json(contact);

    }
)

    .delete((req, res) => {

        const contactIndex = contacts.findIndex((clientContact) => clientContact.id == req.params.id);

        if (contactIndex === -1) return res.status(404).json({ error: "Contact not found" });
        contacts.splice(contactIndex, 1);

        res.json({ message: "Contact successfully deleted"});

    }
)

export default router;