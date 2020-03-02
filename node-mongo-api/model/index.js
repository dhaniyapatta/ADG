const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Edureka",{ useNewUrlParser: true },(error)
    if(!error)
    {
        console.log("Success");
    }
    else
    {
        console.log("Error connecting to database");
    }

});

const Course = require("./courses.model");
