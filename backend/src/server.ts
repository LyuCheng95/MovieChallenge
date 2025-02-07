import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes";

const app = express();
const port = 3001;

app.use(cors());
app.use("/api", movieRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
