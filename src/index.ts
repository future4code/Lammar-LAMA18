import { app } from "./app";
import { userRouter } from "./routes/userRouter";
import { bandRouter } from "./routes/bandRouter";

app.use("/user", userRouter);
app.use("/band", bandRouter);
app.use("/show", bandRouter);
