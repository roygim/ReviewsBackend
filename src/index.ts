import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { authors, books } from "./_db.js";

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);