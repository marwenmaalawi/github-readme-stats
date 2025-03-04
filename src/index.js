export * from "./common/index.js";
export * from "./cards/index.js";
import express from "express";
const app = express();

import topLangsRoute from "../api/top-langs.js"; 
app.use("/api/top-langs", topLangsRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
