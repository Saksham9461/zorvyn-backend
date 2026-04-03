const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/records", require("./routes/recordRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));
app.get("/", (req, res) => {
  res.send("Finance Backend API is running...");
});

module.exports = app;