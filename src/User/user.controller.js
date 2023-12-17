const { Users } = require("./user.model")

const createUser = async(req,res)=> {
    try {
        const newUser = new Users(req.body)
        const result = await newUser.save()
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}


const getAllUsers = async(req,res)=> {
    try {
        const result = await Users.find()
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

    const getSingleUser = async(req,res)=> {
        try {
            const id = req.params.id 
            const singleUser = await Users.find({_id : id})
            res.status(200).json({
                singleUser
            })
            
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    }

module.exports = {
    createUser,
    getAllUsers,
    getSingleUser
}