const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./modal/url"); // Import URL from the correct file
const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/shor-url-project").then(() =>
  console.log("mongodb://localhost:27017 is connected")
);

app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(), // Corrected typo in timestamp
        },
      },
    }
  );
  res.redirect(entry.redirectURL); // Corrected typo in redirectURL
});

app.listen(PORT, () => console.log(`server started at Port ${PORT}`));
