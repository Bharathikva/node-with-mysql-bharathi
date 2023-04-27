
const conn = require("./connection");

// const util = require("util");
// const query = util.promisify(sql.query).bind(sql);

var User = function (user) {
    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
    this.token = user.token;
    this.role = user.role;
  };


// new User added

User.newuser = (newuser, result) => {
    conn.query(
      `insert into Users (username,password) values('${newuser.username}','${newuser.password}')`,
      (err, res) => {
        if (err) {
          console.log(err);
          result(err, null);
          return;
        }
        console.log("SuccessFully Added the data");
        result(null, { id: res.insertId, ...newuser });
      }
    );
  };


module.exports = User;