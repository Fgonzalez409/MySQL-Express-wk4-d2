const express = require("express");
const usersRouter = require('./routers/users');

const app = express();
const port = process.env.PORT || 4001;

app.use(express.json())
app.use('/api/users', usersRouter)


app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

// app.put("/users/:id", (req,res)=> {
  
// })

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
