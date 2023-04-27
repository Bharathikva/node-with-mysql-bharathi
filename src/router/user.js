
module.exports = app => {
    const User = require("../controller/usercontroller")

 

    app.post('/api/user',User.newuser)     // create the User

   
}


// completed