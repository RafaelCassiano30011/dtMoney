import axios from "axios";
import { create } from "domain";
import { createServer, Model } from "miragejs";
createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        { id: 1, title: `teste`, type: "deposity", category: `teste`, amount: 20, createdAt: new Date(`2021-02-12`) },
        { id: 2, title: `teste`, type: "withdraw", category: `teste`, amount: 300, createdAt: new Date(`2021-02-12`) },
      ],
    });
  },
  routes() {
    this.namespace = `api`;

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});
