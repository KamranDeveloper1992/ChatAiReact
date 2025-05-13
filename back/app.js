import { GoogleGenAI } from "@google/genai";
import dotEnv from "dotenv";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());
dotEnv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

async function AiImage(promp) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: promp,
  });
  return response.text;
}

app.post("/chatAi", async (req, res) => {
  const { message } = req.body;

  const Data = await AiImage(message);

  res.status(200).json(Data);
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5000");
});
