const db = require('../models/userModel');

exports.createUser = (req, res) => {
    const user = {
        username: req.body.username,
        phone: req.body.phone,
        email: req.body.email
    };

    const query = 'INSERT INTO users SET ?'; 
    db.query(query, user, (err, result) => {
        if (err) throw err;
        res.json({ message: 'User added successfully!' });
    });
};

exports.getUsers = (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [userId], (err, result) => {
        if (err) throw err;
        res.json({ message: 'User deleted successfully!' });
    });
};

exports.getAllUsers = (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: "Internal Server Error" });
            throw err;
        }
        res.json(results);
    });
};