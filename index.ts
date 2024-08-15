import express, { Application } from "express";
import { fetchContent } from "./helpers/fetchContent";
import { fetchContentAndTranslate } from "./helpers/fetchContentAndTranslate";

const app: Application = express();
const port = process.env.PORT || 8000;
app.use(express.json());

// Language-specific content API URLs and their ISO 639-2 language codes

const contentApis = [
  { url: "https://www.trtfrancais.com/api/homepage", lang: "fra" },
  { url: "https://www.trtarabi.com/api/homepage", lang: "ara" },
  { url: "https://bhsc.trtbalkan.com/api/homepage", lang: "hrv" },
  { url: "https://albanian.trtbalkan.com/api/homepage", lang: "alb" },
  { url: "https://macedonian.trtbalkan.com/api/homepage", lang: "mac" },
  { url: "https://www.trtrussian.com/api/homepage", lang: "rus" },
  { url: "https://www.trtdeutsch.com/api/homepage", lang: "deu" },
];

app.get("/unified-content", async (req, res) => {
  try {
    const unifiedContent = await fetchContent(contentApis);
    res.json(unifiedContent);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch unified content." });
  }
});

app.get("/lang/:lang", async (req, res) => {
  const lang = req.params.lang;
  const selectedUrl = contentApis.find(x => x.lang === lang);
  if (!selectedUrl) {
    res.status(404).json({ message: "Content not found for the selected language." });
    return;
  }
  try {
    const unifiedContent = await fetchContent([selectedUrl]);
    res.json(unifiedContent);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch unified content." });
  }
});

app.get("/translate/:lang", async (req, res) => {
  const lang = req.params.lang;
  const selectedUrl = contentApis.find(x => x.lang === lang);
  if (!selectedUrl) {
    res.status(404).json({ message: "Content not found for the selected language." });
    return;
  }
  try {
    const unifiedContent = await fetchContentAndTranslate([selectedUrl]);
    res.json(unifiedContent);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch unified content." });
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
