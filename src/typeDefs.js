import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    helloWorld: String!
    dogs: [Dog!]!
    cats: [Cat!]!
  } 

  type Dog {
    id: ID!
    name: String!
  }

  type Cat {
    id: ID!
    name: String!
    color: String!
  }

  type Mutation {
    createDog(name: String!): Dog!
    createCat(name: String! color: String!): Cat!
  }
`;
