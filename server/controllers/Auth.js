import userModel from "../models/User.js"


const register = async (req, res) => {
       try {
              const newUser = await userModel.create(req.body)
              res.status(201).json(newUser)
       } catch (error) {
              res.status(500).json(error)
       }
}

const login = async (req, res) => {
       try {
              const { username, password } = req.body
              const findUser = await userModel.findOne({ username })
              if (findUser.password === password) {
                     res.status(200).json(findUser)
              } else {
                     res.status(404).json("not Found")
              }
       } catch (error) {
              res.status(500).json(error)
       }
}

export {
       login,
       register
}