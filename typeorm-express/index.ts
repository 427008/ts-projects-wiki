import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";

import routes from "./routes";

createConnection().then(async connection => {

    const app = express();
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use("/", routes);

    app.listen(3000);

    console.log("Express server has started on port 3000. Open http://localhost:3000/XYZ to see results");
}).catch(error => console.log(error));
