import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

//@desc Auth user/set token
//route POST /api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPasswords(password))) {
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new Error('Invalid Login Data');
    }
  });
  
//@desc Register user/create token
//route POST /api/users/register
//@access Public
const registerUser = asyncHandler(async (req,res) => {
    const { name, email, password } = req.body;
    console.log(name);

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })

    }else{
        res.status(400);
        throw new Error('Invalid Login Data')
    }


    
});



//@desc logout user/delete token
//route POST /api/users/logout
//@access Private



const logoutUser = asyncHandler(async (req,res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({ message : 'Logged Out'})
});



//@desc fetch weekly news
//route GET /api/users/weekly
//@access Private
const weeklyUpdater = asyncHandler(async (req,res) => {
    res.status(200).json({ message : 'Weekly News'})
});
//@desc fetch International news
//route GET /api/users/international
//@access Private
const internationalUpdater = asyncHandler(async (req,res) => {
    res.status(200).json({ message : 'International News'})
});
//@desc fetch User Profile
//route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req,res) => {

    


    res.status(200).json({ message : 'Get User'})
});
//@desc fetch User Profile
//route GET /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id);

    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        
        if(req.body.password) {
            user.password = req.body.password;
        }

       const updatedUser =  await user.save();
        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email
        })
    }else{
        res.status(404);
        throw new Error('User not found');
    }
});



export {
    authUser,
    registerUser,
    logoutUser,
    weeklyUpdater,
    internationalUpdater,
    getUserProfile,
    updateUserProfile,
};