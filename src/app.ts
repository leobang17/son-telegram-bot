import express, { Response, Request } from "express";
import dotenv from "dotenv";

dotenv.config();
interface ReqRes {
    req: Request;
    res: Response
}

const app = express();

app.get("/", (req: Request, res: Response): void => {
    res.send("Hi There !");
});

app.listen(process.env.PORT, (): void => {
    console.log(`Server app listening at port: ${process.env.PORT}`);
})
