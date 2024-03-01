const shortid = require("shortid");
const URL = require("../modal/url");

async function handleGenerateNewShortURL(res, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: `url is required` });
  const shortId = shortid();
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortId });
}

module.exports = {
  handleGenerateNewShortURL,
};
