import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/db/index.js";
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`app listing on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MonGo Db connection error", err);
  });
