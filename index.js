require("dotenv").config();
const express = require ("express");
const sequelize = require("./config/database");
const jobRoutes = require("./routes/api/jobs");
const cors = require("cors");

const app =  express();
app.use(cors());

app.use(express.json());

app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;
 sequelize.sync()
    .then(result => {
        app.listen(PORT,()=> console.log("start at port" + PORT));
    })
    .catch(err => console.log(err));



