// API Endpoints For Briefs

import express from "express";
const router = express.Router();

import briefs from "../data/briefs.js";

/* Chained Routes: GET Route To Return All Briefs | POST Route To Create New Briefs
Requirements - Create GET routes for all data that should be exposed to the client, Weight 5%
Create POST routes for data, as appropriate. At least one data category should allow for client
creation via a POST request, Weight	5%
*/

router
    .route("/")
    .get((req, res) => {

        res.json(briefs);

    }
)

    .post((req, res) => {

            if (req.body.projectName && req.body.projectType && req.body.timeline && req.body.targetAudience && req.body.status) {

        const brief = {

            id: briefs.length + 1,
            projectName: req.body.projectName,
            projectType: req.body.projectType,
            timeline: req.body.timeline,
            targetAudience: req.body.targetAudience,
            status: req.body.status

        };

        briefs.push(brief);
        res.json(briefs[briefs.length - 1]);
        } else res.status(400).json({error: "Insufficient Data" });

    }
)

/* Chained Routes: GET Route To Return One Brief By Id | PATCH Route To Update A Brief By Id | DELETE Route To Delete A Brief By Id
Requirements - Create GET routes for all data that should be exposed to the client, Weight 5%
Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request, Weight 5%
Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request, Weight 5%
*/

router
    .route("/:id")
    .get((req, res) => {

        const brief = briefs.find((projectBrief) => projectBrief.id == req.params.id);

        if (brief) res.json({ brief });
        else res.status(404).json({error: "Insufficient Data" });

    }
)

    .patch((req, res) => {

        const brief = briefs.find((projectBrief) => projectBrief.id == req.params.id);

        if (!brief) return res.status(404).json({ error: "Brief not found" });
        Object.assign(brief, req.body);

        res.json(brief);

    }
)

    .delete((req, res) => {

        const briefIndex = briefs.findIndex((projectBrief) => projectBrief.id == req.params.id);

        if (briefIndex === -1) return res.status(404).json({ error: "Brief not found" });
        briefs.splice(briefIndex, 1);

        res.json({ message: "Brief successfully deleted"});

    }
)

export default router;