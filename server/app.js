import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
const app = express();
const PORT = 4500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    method: ["POST", "GET", "DELETE"],
  })
);

import Data from "./models/Data.js";
app.post("/addSkills", async (req, res, next) => {
  console.log("nmnm");
  const { name, id } = req.body;
  console.log(name, id);

  const newData = await Data.create({ name, id });

  res.status(201).json(newData);
});

app.get("/getSkills", async (req, res, next) => {
  const data = await Data.find();
  console.log(data);
  res.status(201).json(data);
});

app.delete("/delete/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    console.log(id);

    const data = await Data.deleteOne({ _id: id });

    if (data) {
      return res.status(201).json({
        message: "Data Remove Successfully",
        data,
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Data Not Remove Successfully",
    });
  }
});

app.post("/api/v1/auth/user", (req, res, next) => {
  const { name, username, email } = req.body;

  console.log(req.body);

  const token = jwt.sign({ user: req.body }, "786ggh", { expiresIn: "1hr" });

  const verify = jwt.verify(token, "786ggh", (error, user) => {
    if (error) {
      res.status(402).json({
        message: "Unotherize Access",
      });
    }

    res.status(200).json({
      message: "Token Verify",
      token,
    });
  });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/optimistic")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Error connecting to MongoDB");
  });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
