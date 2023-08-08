const express = require("express");
const router = new express.Router();

const MenRanking = require("../models/men");

//handle POST request
router.post("/men", async (req, res) => {
    try {
        // console.log(req.body);
        const addMen = new MenRanking(req.body);
        const createMen = await addMen.save();
        res.status(201).send(createMen);
    } catch (e) {
        res.status(400).send(e);
    }
});

//handle GET request
router.get("/men", async (req, res) => {
    try {
        const getMen = await MenRanking.find({}).sort({"ranking":1});
        res.send(getMen);
    } catch (e) {
        res.status(400).send(e);
    }
});

//handle GET request of individual
router.get("/men/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMan = await MenRanking.findById(_id);
        res.send(getMan);
    } catch (e) {
        res.status(400).send(e);
    }
});

//handle PATCH request of individual
router.patch("/men/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMan = await MenRanking.findByIdAndUpdate(_id, req.body,{
            new: true
        });
        res.send(getMan);
    } catch (e) {
        res.status(500).send(e);
    }
});

//handle DELETE request of individual
router.delete("/men/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMan = await MenRanking.findByIdAndDelete(_id);
        res.send(getMan);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;