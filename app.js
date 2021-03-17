import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import globabalRouter from "./routers/globalRouter";



const app = express();


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(helmet())
app.use(morgan("tiny"));


app.use("/",globalRouter)
app.use("/users",userRouter);
app.use("/videos",videoRouter);
app.use(routes.home,globabalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);



export default app;