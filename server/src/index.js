import express from 'express';
import cors from 'cors';
import auth from './routes/auth.js';
import antiqueRouter from "./routes/antique-router.js";
import userRouter from "./routes/user-router.js";
import bidRouter  from "./routes/bid-router.js";
import tokenRouter from "./routes/token-router.js";
const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended: true
}));

app.use("/auth", auth);

// TODO: configure cors to accept only certain urls

// Prevent cors errors by accepting all requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/antiques', antiqueRouter);
app.use('/users', userRouter);
app.use('/', bidRouter);
app.use('/tokens', tokenRouter);

// Logging in:
// You are CREATING a new token
// REST: POST /tokens

// app.get('/', (req, res) => {
//   console.log(req);
//   // res.send('Hello World!')
//   res.json({ msg: "hello world"});
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})