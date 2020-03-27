const db = require('../database/database.js');
const controller = {};



// get/select
// if user was already created, get info
controller.getUser = (req, res, next) => {
    // console.log('getuser controller is working')
  const queryStr = 'SELECT * from users';
  db.query(queryStr, (err, data) => {
    if(err) {
      return next({
        log: 'An error has occured in getUser', // where error is
        status: 400,
        err: { err },
      });
    }
    res.locals.users = data.rows;
    return next();
  })
};

// create

// insert user controller and insert boolean
// infrontend put event listener for check box--> will update boolean
controller.addUserSymptoms = (req, res, next) => {
    console.log('req.body in adduser', req.body)
  const { name, sneezing, chest_pain, fever, sore_throat, shortness_of_breath, coughing } = req.body;
  const queryArr = [name, sneezing, chest_pain, fever, sore_throat, shortness_of_breath, coughing]
//   console.log(queryArr)
  const queryStr = 'INSERT INTO users (name, sneezing, chest_pain, fever, sore_throat, shortness_of_breath, coughing )VALUES($1, $2, $3, $4, $5, $6, $7)'; 
  db.query(queryStr, queryArr, (err, data) => {
    if (err){
      return next({
        log: 'An error has occured in addUserSymptoms', // where error is
        status: 400,
        err: { err },
        });
      }
    return next();
  });
};

// controller.deleteUser = (req, res, next) => {
 
// }



// controller.checkSymptoms = (req, res, next) => {
//   const queryStr = 
//   /// if user has more than 3 symptoms
// }

//CREATE TABLE if NOT EXISTS toDoList(ID serial PRIMARY KEY, tasks VARCHAR(255) NOT NULL)



module.exports = controller;