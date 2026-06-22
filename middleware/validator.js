/* Request Validation Middleware (Custom Middleware #2): Checks if Content-Type header is application/json on POST and PATCH requests
Requirements - Create and use at least two pieces of custom middleware, Weight 5%.
*/

const validator = (req, res, next) => {

    if (req.method === "POST" || req.method === "PATCH") {
        
        const contentType = req.headers["content-type"] || "";

        if (!contentType.includes("application/json") && !contentType.includes("urlencoded")) {

            return res.status(400).json({ error: "Invalid Content-Type" });

        // if (!req.headers["content-type"].includes("application/json")) {

        //     return res.status(400).json({ error: "Content-Type must be application/json"});
            
        // }
        }
    }

    next();

}

export default validator;

