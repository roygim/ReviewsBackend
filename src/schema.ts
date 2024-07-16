export const typeDefs = `#graphql
    type Book {
        id: ID!
        title: String!
        year: Int
        author: Author!
    }

    type Author {
        id: ID!
        name: String
        books: [Book!]
    }

    type Query {
        books: [Book]
        book(id: ID!): Book
        booksByYear(year: Int): [Book]
        authors: [Author]
        author(id: ID!): Author
    }
`;