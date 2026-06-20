// API Endpoints For Teams

import express from "express";
const router = express.Router();

import teams from "../data/team.js";

/* Chained Routes: GET Route To Return All Team Data | POST Route To Create New Team Data
Requirements - Create GET routes for all data that should be exposed to the client, Weight 5%
Create POST routes for data, as appropriate. At least one data category should allow for client
creation via a POST request, Weight	5%
*/

router
    .route("/")
    .get((req, res) => {

        res.json(teams);

    }
)

    .post((req, res) => {

            if (req.body.name && req.body.role && req.body.email && req.body.department && req.body.status) {

        const newTeamMember = {

            id: teams.length + 1,
            name: req.body.name,
            role: req.body.role,
            email: req.body.email,
            department: req.body.department,
            status: req.body.status

        };

        teams.push(newTeamMember);
        res.json(teams[teams.length - 1]);
        } else res.status(400).json({error: "Insufficient Data" });

    }
)

/* Chained Routes: GET Route To Return One Team Member By Id | PATCH Route To Update A Team Member By Id | DELETE Route To Delete A Team Member By Id
Requirements - Create GET routes for all data that should be exposed to the client, Weight 5%
Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request, Weight 5%
Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request, Weight 5%
*/

router
    .route("/:id")
    .get((req, res) => {

        const team = teams.find((teamMember) => teamMember.id == req.params.id);

        if (team) res.json({ team });
        else res.status(404).json({error: "Insufficient Data" });

    }
)

    .patch((req, res) => {

        const team = teams.find((teamMember) => teamMember.id == req.params.id);

        if (!team) return res.status(404).json({ error: "Team member not found" });
        Object.assign(team, req.body);

        res.json(team);

    }
)

    .delete((req, res) => {

        const teamIndex = teams.findIndex((teamMember) => teamMember.id == req.params.id);

        if (teamIndex === -1) return res.status(404).json({ error: "Team member not found" });
        teams.splice(teamIndex, 1);

        res.json({ message: "Team member successfully deleted"});

    }
)

export default router;