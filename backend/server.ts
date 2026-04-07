import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on  http://localhost:${PORT}`);
})

app.use("/health", (req, res) => {
    res.status(200).send("Server is good!");
})