const router= require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt")


//update user
router.put("/:id", async(req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        if(req.body.passWord) {
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.passWord = await bcrypt.hash(req.body.passWord, salt);
            } catch(err) {
                return res.status(500).json(err)
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,

            });
            res.sendStatus(200).json("Account has been updated");
        } catch(err) {
            return res.status(500).json(err)
        }
    } else {
        return res.status(403).json("you can update only your account")
    }
});
//delete user
router.delete("/:id", async(req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        
        try{
            const user = await User.findByIdAndDelete(req.params.id, {
                $set: req.body,

            });
            res.status(200).json("Account has been deleted");
        } catch(err) {
            return res.status(500).json(err)
        }
    } else {
        return res.status(403).json("you can delete only your account")
    }
});
//get a user
router.get("/", async(req, res) => {
    const userId = req.query.userId;
    const userName = req.query.userName;
    console.log(userId);
    try {
        const user = userId 
        ? await User.findById(userId) 
        : await User.findOne({userName:userName});
        const {passWord, updatedAt, ...other} = user._doc
        res.status(200).json(other);
    }catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router