import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/yelpTerm/:term/yelpLocation/:location", async function (req, res) {
  try {
    let { term, location } = req.params;
    let response = await axios.get(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.APIKEY}`,
          client_id: `${process.env.CLIENTID}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () =>
  console.log(`Express server application is running on port ${PORT}`)
);