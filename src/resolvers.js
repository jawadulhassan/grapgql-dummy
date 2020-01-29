import { Dog } from "./models/dog";
import { Cat } from "./models/cat";

export const resolvers = {
  Query: {
    helloWorld: () => "Hello World!",
    dogs: () => Dog.find(),
    cats: () => Cat.find(),
  },

  Mutation: {
    createDog: async (_, { name }) => {
      const puppy = new Dog({ name });
      await puppy.save();
      return puppy;
    },
    createCat: async (_, { name, color }) => {
      const kitty = new Cat({ name, color });
      await kitty.save();
      return kitty;
    }
  }
};
