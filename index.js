import express from "express";
import cors from "cors";
import livroRoutes from "./src/routes/livroRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", livroRoutes);

app.listen(3000, () => {
  console.log(`servidor rodando.`);
});
