import { app } from "./app";
import { userRouter } from "./routes/userRouter";
import { bandRouter } from "./routes/bandRouter";
import { showRouter } from "./routes/showRouter";

app.use("/user", userRouter);
app.use("/band", bandRouter);
app.use("/show", showRouter);
