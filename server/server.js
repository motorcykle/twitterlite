require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;


app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

mongoose
.connect(mongoURI, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
}, () => {
  console.log('*** CONNECTED TO DATABASE ***')
})