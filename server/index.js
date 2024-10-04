import dotenv from "dotenv"
import { app } from './src/app.js';

dotenv.config({
    path: './.env'
})

const port= 8000


app.listen(port || 5000, () => console.log(`Server is running at port : ${port}`))
