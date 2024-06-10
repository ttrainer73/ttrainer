const express = require("express");
const app = express(); //our express server app
const jwt = require("jsonwebtoken"); //for creating temporary tokens
const nodemailer = require("nodemailer"); //for sending mails
const session = require("express-session"); //for maintaining session in apis
const mongoose = require("mongoose"); //our database
const bodyParser = require("body-parser");
const passportLocalMongoose = require("passport-local-mongoose"); //passportjs in local stratagy for mongoose
const passport = require("passport");
const LocalStrategy = require("passport-local");
const path=require("path")

app.use(bodyParser.json());
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
//our jwt secret
const JWT_SECRET = "Moin-JWT";


//configuring the transporter for sending mails
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "ttrainer62@gmail.com",//add your gmail here
        pass: "khkb ghkc nzgb ibua",//add your app password here
    },
});

//configuring our mail like the details of mail
const mailoptions = {
    from: {
        name: "Testing",
        address: "ttrainer62@gmail.com",//add your gmail here
    },
    to: "",
    subject: "",
    text: "",
};

//function for sending mails
const send = async (transporter, mailoptions) => {
    try {
        await transporter.sendMail(mailoptions);
        console.log("email sent");
    } catch (err) {
        console.log(err);
    }
};

//connecting to database
main()
    .then((res) => {
        console.log("connection success");
    })
    .catch((err) => {
        console.log(err);
    });
async function main() {
    await mongoose.connect(
        "mongodb+srv://ttrainer:trainer7396@cluster0.2ohvnno.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"//add ur mongodb url here
    );
}

//our schema of db
const loginschema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    courseplan:{
        type:Boolean
    }
});

const feedbackschema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    phone:{
        type:String
    },
    message:{
        type:String
    }
});

//making our loginschema to make username as the main field for userName
loginschema.plugin(passportLocalMongoose, { usernameField: "email" }); //=-

//creating our database instance
const data = mongoose.model("data", loginschema);
const feed=mongoose.model("feedback",feedbackschema)
//configuring session options
const sessionoption = {
    secret: "Moin-Session",
    resave: false,
    saveUninitialized: true,
};

//using passport locatstrategy for authenticating
passport.use(
    new LocalStrategy({ usernameField: "email" }, data.authenticate())
);

//serializing user
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

//deserializing user
passport.deserializeUser(function (id, done) {
    data
        .findById(id)
        .exec()
        .then((user) => {
            return done(null, user);
        })
        .catch((err) => {
            return done(err, null);
        });
});

//using our session
app.use(session(sessionoption)); //-------------------

//initializing passport and session for it
app.use(passport.initialize()); //--------------
app.use(passport.session());

//function for checking whether user is authenticated or not
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        // console.log(req.user)
        return next(); // If user is authenticated, continue with the next middleware
    }
    res.status(406).json({ Authenication: false, message: "auth failed" }); // If not authenticated, redirect to login page
}

app.get("/",(req,res)=>{
    res.render("index.ejs")
})
app.get("/course",(req,res)=>{
    res.render("course.ejs")
})
app.get("/news",(req,res)=>{
    res.render("home.ejs")
})
app.get("/contactus",(req,res)=>{

    res.render("contact-us.ejs")
})
app.get("/about",(req,res)=>{
    res.render("about.ejs")
})
app.post("/feedback",(req,res)=>{
    console.log(req.body)
    let fd=new feed(req.body)
    fd.save()
    .then((re)=>{
        console.log(re)
        res.status(200).json({message:"message sent successfully"})
    })
    .catch((err)=>{
        console.log(err)
        res.status(406).json({message:err.message})
    
    })
   
})
app.get("/dashboard", isLoggedIn, (req, res) => {
    // res.status(200).json({ Authenication: true, message: "Auth success" });
    l=req.user._doc
    let {_id,__v,...c}=l
    console.log(c)
    res.render("home.ejs")
});

app.get('/signup',(req,res)=>{
    res.render("sig-up.ejs")
})
app.post("/signup", async (req, res) => {
    try {
        console.log(req.body);

        let { email, username, password } = req.body;



        let inf = {
            username: username,
            email: email,
            courseplan:false
        };
        let u1 = new data(inf);
        if (password.length < 6) {
            res
                .status(406)
                .json({ message: "password must contain more than 6 letters" });
        } else {
            let reguser = await data.register(u1, password);

            req.login(u1, (err) => {
                if (err) {
                    console.log(err);
                } else {

                    passport.authenticate("local", { failureRedirect: "/login" })(
                        req,
                        res,
                        function () {
                            //passing the token in response
                            // res.status(200).json({
                            //     Authenication: true,
                            //     message: "signup success"
                            // });
                            res.redirect("/dashboard")
                        }
                    );
                }
            });
        }
    } catch (err) {
        res.status(406).json({ message: err.message });
    }
});


app.get("/login",(req,res)=>{
    res.render("login.ejs")
})
app.post("/login", (req, res) => {
    let { username, password } = req.body;

    const user = new data({
        username: username,
        password: password,
    });
    try {
        req.login(user, (err) => {
            if (err) {
                console.log(err);
                res.status(406).json({ message: err.message });
            } else {
                

                passport.authenticate("local", { failureRedirect: "/login" })(
                    req,
                    res,
                    function () {
                        // res.status(200).json({
                        //     Authenication: true,
                        //     message: "Login success" 
                        // });
                        res.redirect("/dashboard")
                    }
                );
            }
        });
    } catch (err) {
        res.status(406).json({ message: err.message });
    }
});

app.get("/logout", async (req, res, next) => {
    //logout method
    await req.logout((err) => {
        if (err) {
            return next(err);
        } else {
            // res.status(200).json({ message: "Logout success" });
            res.render("login.ejs")
        }
    });
});

app.post("/forgetpass", async (req, res) => {
    try {
        let { email } = req.body;
        
        console.log(email);
        let user = await data.findOne({ email: email });

        if (user) {
            const secret = JWT_SECRET + "Moin-7093";
            const payload = {
                email: user.email,
                id: user.id,
            };
            console.log(payload);
            const token = jwt.sign(payload, secret, { expiresIn: "2m" });
            const link = `http://localhost:9000/reset-pass/${user.id}/${token}`;
            console.log(link);
            mailoptions.to = email;
            mailoptions.subject = "Password Reset Request";
            mailoptions.text = `use this link for updating password,link expires in 2 min,${link}`;
            send(transporter, mailoptions).then((re) => {
                res.status(200).json({ message: "mail sent to given email" });
            });
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(406).json({ message: error.message });
    }
});

app.post("/reset-pass/:id/:token", async (req, res) => {
    let { token, id } = req.params;

    let { password } = req.body;

    const secret = JWT_SECRET + "Moin-7093";
    try {
        if (password.length < 6) {
            res.status(406).json({ message: "pass must be greater than 6 chars" });
        } else {
            const payload = jwt.verify(token, secret);
            let u = await data.findOne({ email: payload.email });

            let {_id,__v,...cp} = u._doc;
            console.log(cp)
            await data
                .deleteOne({ email: u.email })
                .then(async (re) => {
                    console.log(u);
                    let d = new data(cp);
                    let ruser = await data.register(d, password);
                    res.status(200).json({ message: "password changed successfully" });
                })
                .catch((err) => {
                    console.log(err);
                    res.status(406).json({ message: err.message });
                });
        }
    } catch (err) {
        console.log(err);
        res.status(406).json({ message: err.message });
    }
});



app.listen("9000", () => {
    console.log("listening");
});
