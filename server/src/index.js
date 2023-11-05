import express from 'express';
import cors from 'cors';
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

// Accept only certain origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/antiques', antiqueRouter);
app.use('/users', userRouter);
app.use('/', bidRouter);
app.use('/tokens', tokenRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})