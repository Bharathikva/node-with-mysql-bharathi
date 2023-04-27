
const User = require('../model/usermodel')

exports.newuser = async (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    try {

        var Value = req.body.password;
        const salt = await bcrypt.genSalt(5);
        Value = await bcrypt.hash(Value, salt);
    }
    catch {
        console.log("error");
    }

    var user = new User({
        username: req.body.username,
        password: Value,
        role: req.body.role
    })


    User.newuser(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the users."
            });
        else res.send(data);
    });
}



 
