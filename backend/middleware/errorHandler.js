const errorHandeler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace for debugging
    if (err.status) {
        return res.status(err.status).json({ message: err.message });
    }
    // If no specific status is set, default to 500 Internal Server Error
    return res.status(500).json({ message: 'Internal Server Error', error: err.message });
}
module.exports = errorHandeler;