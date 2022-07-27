// const express = require("express");
// const app = express();
// const port = 3000 || process.env.PORT;
// const ip_address = "0.0.0.0";
// const nodemailer = require("nodemailer");
// // const mongodb = require("mongodb").MongoClient;
// // const url = "mongodb://localhost:27017/";

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
//   );
//   next();
// });

// app.listen(port, ip_address, () => {
//   console.log(`server is running on port ${port}`);
// });

// app.get("/login", (req, res) => {
//   var username = req.query.username;
//   var password = req.query.password;
//   console.log(username);
//   console.log(password);

//   mongodb.connect(url, (err, db) => {
//     if (err) throw err;
//     var dba = db.db("Main_data");
//     console.log("Connected to database");
//     dba
//       .collection("testing")
//       .find({ username: username, password: password })
//       .toArray((err, result) => {
//         if (err) throw err;
//         if (result.length > 0) {
//           res.status(200).send(result);
//         } else {
//           res.status(200).send("User Not found");
//         }
//       });
//   });
// });

// app.post("/post", (req, res) => {
//   var username = req.body.username;
//   var password = req.body.password;
//   var city = req.body.city;
//   var pincode = req.body.pincode;
//   mongodb.connect(url, (err, db) => {
//     if (err) throw err;
//     var dba = db.db("Main_data");
//     console.log("Connected to database to post");
//     dba
//       .collection("testing")
//       .insertOne({
//         username: username,
//         password: password,
//         city: city,
//         pincode: pincode,
//       })
//       .then(() => {
//         res.status(200).send("Data inserted");
//       })
//       .catch(() => {
//         res.status(200).send("Data not inserted");
//       });
//   });
// });

// var adminData = {
//   skillLevel: "HIGH",
//   skillRate: 8,
//   response: true,
// };

// var userData = {
//   skillLevel: "MEDIUM",
//   skillRate: 5,
//   response: true,
// };

// var managerData = {
//   skillLevel: "LOW",
//   skillRate: 2,
//   response: true,
// };

// app.post("/restPam", (req, res) => {
//   var username = req.body.username;
//   var password = req.body.password;
//   // console.log(username);
//   // console.log(password);
//   if (username == "admin") {
//     res.status(200).send(adminData);
//   } else if (username == "user") {
//     res.status(200).send(userData);
//   } else if (username == "manager") {
//     res.status(200).send(managerData);
//   } else {
//     res.status(200).send(false);
//   }
// });

// app.post("/postPam", (req, res) => {
//   var response = req.body.response;
//   var skillLevel = req.body.skillLevel;
//   var skillRate = req.body.skillRate;
//   var stockSection = req.body.stockSection;

//   var responseData = {
//     response: response,
//     skillLevel: skillLevel,
//     skillRate: skillRate,
//     stockSection: stockSection,
//   };
//   if (
//     responseData.stockSection == "LOCALITY STOCK" ||
//     responseData.stockSection == "AVERAGE STOCK" ||
//     responseData.stockSection == "SUPER STOCK"
//   ) {
//     res.status(200).send(true);
//   } else {
//     res.status(200).send(false);
//   }
// });

// app.get("/getUrl", (req, res) => {
//   var url = "http://localhost:3000/postUrl";
//   res.send(url);
// });

// app.post("/postUrl", (req, res) => {
//   var url = req.body.url;
//   var data = {
//     username: "admin",
//     password: "admin",
//   };
//   res.send(data);
// });

// app.post("/restPam1", (req, res) => {
//   var id = req.body.id;
//   var applicantData = {
//     id: id,
//     name: "Pam",
//     address: "Pam Address",
//     city: "Pam City",
//   };
//   res.json(applicantData);
// });

// app.post("/sendMail", (req, res) => {
//   var transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "hariduke001@gmail.com",
//       pass: "hariharan212k",
//     },
//   });

//   var mailOptions = {
//     from: "hariduke001@gmail.com",
//     to: "hariharan212k@gmail.com",
//     subject: "Sending Email using Node.js",
//     text: "That was easy!",
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//       res.send(info.response);
//     }
//   });
// });

const http = require("http");
require("dotenv").config();

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(
    `<h1>Hi, This is My own Node JS Application! ${process.env.name}</h1>`
  );
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
