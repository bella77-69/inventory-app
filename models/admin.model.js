const dbConn = require('../config/db.config');

const Admin = function (user) {
    this.email = user.email;
    this.password = user.password;
    this.confirmPassword = user.confirmPassword;
}

Admin.getAllUsers  = function(result){
    dbConn.query('SELECT * FROM user', function (error, res, fields) {
    if(error){
      console.log("error ocurred",error);
        result.send({
        "code":400,
        "failed":"error ocurred"
        })  
    }
    else{
        console.log('The solution is: ', results);
        result.send({
        "code":200,
        "result":res
            });
    }
    });    
}

//get user by email
Admin.getUserByEmail = (email, result) => {
  dbConn.query(
    "SELECT * FROM user WHERE email = ?",
    email,
    (err, res) => {
      if (err) {
       console.log("Error while fetching data by email", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

  // create new user
  Admin.createNewUser = (userReqData, result) => {
    dbConn.query(
      "INSERT INTO user SET ?",
      userReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("user created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get user by ID for update
  Admin.getUserByID = (id, result) => {
    dbConn.query("SELECT * FROM user WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching user by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update user
  Admin.updateUser = (id, userReqData, result) => {
    dbConn.query(
      "UPDATE user SET color=?, quantity=? WHERE id = ?",
      [userReqData.color, userReqData.quantity, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating user");
          result(null, err);
        } else {
          console.log("user updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete user
  Admin.deleteUser = (id, result) => {
    dbConn.query("DELETE from user WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the user");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = Admin;
  