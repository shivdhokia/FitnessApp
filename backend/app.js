const express = require('express');
const errorHandeler = require('./middleware/errorHandler');
const router = require('./routes/user');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});
app.get('/api/data', (req, res) => {
    res.json({ message: 'This is a sample response from the backend.' });
});

app.use("/api/users", router);

app.use((req, res, next) => {
    const error = new Error("Path not found");
    next(error);
});


app.use(errorHandeler);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

