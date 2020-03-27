const express = require('express');
const app = express();
const path = require('path');
const middleware = require('./middleware/middleware.js');
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use('/build', (req, res) => )
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.get('/getUser', middleware.getUser, (req, res) => {
  return res.status(200).json(res.locals.users);
});


//adding to db
app.post('/addUserSymptoms', middleware.addUserSymptoms, (req, res) => {
  return res.status(200).send('Successful Post Request!'
});

//delete clearing of CV case // maybe delete acc??
// app.delete('/deleteUser', middleware.deleteUser, (req, res) => {
//   return res.status(200).send('Delete User Successful!');
// });

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use('*', (req, res) => {x
  return res.sendStatus(404);
});

app.use((err, req, res, next) => {
    let defaultErr = {
      log: 'A global error has occured',
      status: 404,
      err: {
        err: 'An error has occurred in the server'
      }
    };
    defaultErr = Object.assign(defaultErr, err)
    return res.status(defaultErr.status).json(defaultErr.err);
  });


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
module.exports = app;