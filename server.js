import "dotenv/config";
import connectDB from "./src/comman/config/db.js";
import app from "./src/app.js";

const PORT = process.env.PORT || 5000;

const start = async () => {
  connectDB();
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} in ${process.env.NODE_ENV}`);
  });
};

start().catch((err) => {
  console.error("Failed to listen the server", e);
  process.exit(1);
});
