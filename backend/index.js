const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const express = require("express");
const cors = require("cors");
const ShortUniqueId = require("short-unique-id");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/shorturl", async (req, res) => {
  try {
    const { longurl, backurl } = req.body;
    const shortID = new ShortUniqueId({ length: 6 });
    var shorturl = "";
    if (backurl === null) {
      shorturl = shortID.rnd();
    } else {
      shorturl = backurl;
    }

    const newUrl = await prisma.ShortenedUrl.create({
      data: {
        short: shorturl,
        original: decodeURIComponent(longurl),
      },
    });
    res.json(newUrl);
  } catch (error) {
    console.error("Error creating short URL:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/url/:id", async (req, res) => {
  const { id } = req.params;
  const url = await prisma.ShortenedUrl.findUnique({
    where: {
      short: id,
    },
  });
  res.redirect(url.original);
});

app.listen(3030, () => {
  console.log("Server up at 3030");
});
