import express from "express";
import mongoose from "mongoose";

import { ApolloServer, gql } from "apollo-server-express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const server = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  server.applyMiddleware({ app });

  try {
    await mongoose.connect("mongodb://127.0.0.1/testdb");
  } catch (err) {
    console.log("err:", err);
  }

  app.get("/", (req, res) => res.send("demo app!"));

  app.listen({ port: 4001 }, () => {
    console.log("Connected!");
  });
};

server();
