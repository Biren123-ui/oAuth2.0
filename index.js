const app = require("./server/app.server");
const port = process.env.PORT;

try {
  app.listen(port, () => {
    console.log(`server listen in the port ${port}`);
  });
} catch (error) {
  console.log("error while connecting the server=>", error);
}
