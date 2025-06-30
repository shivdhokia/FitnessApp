const getAllUsers = (req, res, next) => {
    // Simulate fetching users from a database
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];

    // Send the users as a JSON response
    res.status(200).json(users);
}

const getUserById = (req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }

    // Simulate fetching a user by ID from a database
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];

    const user = users.find(u => u.id === userId);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

const createUser = (req, res, next) => {
    const newUser = req.body;
    if (!newUser || !newUser.name) {
        return res.status(400).json({ message: 'Invalid user data' });
    }

    // Simulate saving the user to a database
    newUser.id = Math.floor(Math.random() * 1000); // Assign a random ID for demonstration

    // Send the created user as a JSON response
    res.status(201).json(newUser);
}

const updateUser = (req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }
    const updatedUser = req.body;

    // Simulate updating a user in a database
    updatedUser.id = userId; // Ensure the ID remains the same

    // Send the updated user as a JSON response
    res.status(200).json(updatedUser);
}

const deleteUser = (req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }

    // Simulate deleting a user from a database
    // In a real application, you would check if the user exists and perform the deletion

    res.status(204).send(); // No content to send back
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};