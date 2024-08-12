const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000
app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/api", authRoutes);

// protected routes
app.get("/api/admin", authenticateToken, (req, res) => {
    res.json({
        title: "välkommen " + req.username.username,
        message: "Detta är en skyddad undersida som du endast kommer åt som registrerad och inloggad."
    });
});

// validate token
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(token == null) res.status(401).json({ message: "Not authorized for this route - token missing" });

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, username) => {
        if(err) return res.status(403).json({ message: "Invalid JWT" });

        req.username = username;
        next();
    });
}

// start server
app.listen(port, () => {
    console.log("Server is running on port: " + port);
});