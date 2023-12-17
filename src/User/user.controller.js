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

    const deleteUser = async(req,res)=> {
        try {
            const id = req.params.id
            const deletedUser = await Users.findByIdAndDelete({_id : id})
            res.status(200).json({
                deletedUser
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    }


    const updateUser = async (req, res) => {
        try {
          const id = req.params.id;
        
          const updatedUser = await Users.findByIdAndUpdate(id, req.body, { new: true });
          res.status(200).json({
            updatedUser,
          });
        } catch (error) {
          res.status(500).json({
            error,
          });
        }
      };
      

module.exports = {
    createUser,
    getAllUsers,
    getSingleUser,
    deleteUser,
    updateUser
}