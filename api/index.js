 import express from "express";
 import userRoutes from "./routes/users.js" 
 import postRoutes from "./routes/posts.js" 
 import commentRoutes from "./routes/comments.js" 
 import likeRoutes from "./routes/likes.js" 
 import authRoutes from "./routes/auth.js" 
import cookieParser from "cookie-parser";
import relationshipRoutes from "./routes/relationships.js" 
import recommandationRoutes from "./routes/recommandations.js"
import cors from "cors"
import multer  from "multer";
 const app = express() ;


 //middlewares
 app.use((req,res,next)=>{
   res.header("Access-Control-Allow-Credentials" , true)
   next()
 })
 app.use(express.json());
 app.use(cors({
  //  origin: "http://localhost:3000",
  origin : "https://manit-sociofy.netlify.app" ,
   credentials : true 
 }));
 app.use(cookieParser());


 const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
}) 

const upload = multer({ storage: storage })
app.post("/api/upload" , upload.single("file") , (req,res)=>{
  const file = req.file ; 
  res.status(200).json(file.filename)
})

// const PORT = process.env.PORT || 8800;


app.use("/api/users" , userRoutes);
app.use("/api/posts" , postRoutes);
app.use("/api/comments" , commentRoutes);
app.use("/api/likes" , likeRoutes);
app.use("/api/auth" , authRoutes);
app.use("/api/relationships" , relationshipRoutes);
app.use("/api/recommendations" , recommandationRoutes);
 app.listen(8800 , ()=>{
    console.log("API working!") ; 
 })    