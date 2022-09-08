const bcrypt = require("bcrypt");

const User = require("../models/users");


// insert data
async function addUser(data, res) {

    const verifyuser = await User.findOne({"name": data.name});
            if(!verifyuser){
                try {
                    const salt = await bcrypt.genSalt(10)
                    const passhash = await bcrypt.hash(data.password, salt);
                    if (passhash){
                        const newUser = new User({name: data.name, password: passhash, usertype: data.type})
                        await newUser.save()
                        if(res){
                            res.status(200).json({
                                "message": "successful"
                            })
                        }
                    }
                } catch (err) {
                    console.log(err);
                    if(res){
                        res.status(500).json({
                            "message": "server error"
                        })
                    }
                }
            }else{
                if(res){
                    res.status(400).json({
                        "message": "user already exists"
                    })
                }
            }
}

module.exports = addUser;