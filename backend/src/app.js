const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.services');
const postModel = require("./models/post.model")
const cors=require("cors")


const app = express();

// app.use(express.json());
//express.json is a middleware only for raw json data. It will not work for form data. For form data we have to use express.urlencoded
//for form data we have to install multer package and use it as a middleware
app.use(cors())
const upload = multer({storage: multer.memoryStorage()});

//image is the key that was used in postman form data

//buffer is the actual file
app.post('/create-post', upload.single('image'), async (req, res) => 
{
    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer);
    
    const post=await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "Post created successfully",
        post
    });
});

app.get('/posts', async (req, res)=>{
    
    const posts=await postModel.find();

    return res.status(200).json({
        message: "posts fetched successfully",
        posts
    })
})


module.exports = app;