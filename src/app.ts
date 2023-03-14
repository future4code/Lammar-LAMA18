import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

export const app = express();

dotenv.config();

app.use(express.json());
app.use(cors())

const server = app.listen(process.env.PORT ||3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`🚀 Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });
  