/* Error-handling Middleware
Requirements - Create and use error-handling middleware, Weight 5%.
*/

const errorHandler = (err, req, res, next) => {

    console.error(err);
    res.status(err.status || 500).json({ error: err.message })
    
}

export default errorHandler;