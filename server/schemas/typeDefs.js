const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    moods: [ Mood ]
  }

  type Mood {
    _id: ID
    date: String
    moodColor: String
    description: String
    }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }


  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMood(moodColor: String!, description: String): Mood
  }
`;

module.exports = typeDefs;
