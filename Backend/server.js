const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const User = require("./models/User");
const bcrypt = require("bcrypt");

dotenv.config();

const seedAdmin = async () => {
  try {
    const adminExists = await User.findOne({ role: "admin" });
    if (!adminExists) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash("admin123", salt);
      await User.create({
        name: "Admin User",
        email: "admin@swtech.com",
        password: hashedPassword,
        role: "admin",
      });
      console.log("✅ Production Admin Seeded: admin@swtech.com / admin123");
    }
  } catch (error) {
    console.error("Seeding error:", error);
  }
};

connectDB().then(() => {
  seedAdmin();
});

const app = express();

app.use(
  cors({
    origin: true, // Allows any origin to connect
    credentials: true, // Allows cookies to be sent
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/newsletter", require("./routes/newsletterRoutes"));
app.use("/api/quote", require("./routes/quoteRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
