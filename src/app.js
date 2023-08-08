const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
require("./db/conn");

const MenRanking = require("./models/men");
const MenRouter = require("./routers/men");

app.use(express.json());
app.use(MenRouter);

// app.post("/men", async (req, res) => {
//     try {
//         console.log("HI");
//         console.log(req.body);
//         console.log("HI 1");
//         const addMen = new MenRanking(req.body);
//         console.log("HI 2");
//         // addMen.save();
//         const createMen = await addMen.save();
//         console.log("HI 3");
//         res.status(200).send(createMen);
//         console.log("HI 4");
//         // res.end();
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

app.listen(port, () => {
    console.log(`Connection is live at port no. ${port}`);
});