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
