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
    users: [User]
    user(username: String!): User
    moods(username: String): [ Mood ]
    mood(moodId: ID!): Mood
    me: User
  }


  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMood(moodColor: String!, dsecription: String): Mood
  }
`;

module.exports = typeDefs;
