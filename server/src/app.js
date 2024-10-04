import express from "express";
import cors from "cors";
import dotenv from "dotenv"

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};
export { asyncHandler };


const app = express();

app.use(
    cors({
        origin: "*"||"https://shree-portfolio-xi.vercel.app",
        methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
    })
);


app.use(
    express.json({
        limit: "16kb",
    })
);

app.get("/",(req,res)=>{
    res.send("hii")
})

import routes from "./routes/email.routes.js"

app.use("/api/v1", routes)

export {app}