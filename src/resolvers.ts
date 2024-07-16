import { authors, books } from "./_db";

export const resolvers = {
    Query: {
        books: () => books,
        book: (_, args) => {
            const bookId = Number(args.id)
            return books.find(b => b.id === bookId)
        },
        booksByYear: (_, args) => {
            const _year = Number(args.year)
            return books.filter(b => b.year === _year)
        },
        authors: () => authors,
        author: (_, args) => {
            const authorId = Number(args.id)
            return authors.find(a => a.id === authorId)
        },
    },
    Book: {
        author: (parent) => authors.find(a => a.id === parent.author_id)
    },
    Author: {
        books: (parent) => books.filter(b => b.author_id === parent.id)
    }
};