import express from "express";
import dotenv from "dotenv";
import mongoose_connection from "./connection/connection.js";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";

dotenv.config({ path: "./.env" });

const port_name = process.env.PORT_NAME || 5000;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// View Engine
app.set("view engine", "ejs");
app.set("views", "views");

// Routes
app.use("/", userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start server and connect to MongoDB
(async () => {
  try {
    const mongoose_connect = await mongoose_connection();
    console.log(mongoose_connect);

    app.listen(port_name, () => {
      console.log(`Express is connected on port ${port_name}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
})();
