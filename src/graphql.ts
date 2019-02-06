import { GraphQLServerLambda } from "graphql-yoga";
import resolvers from "./resolvers/resolvers";
import typeDefs from "./schema/schema.graphql";

export const handler = (event, ctx, callback) => {
  try {
    const server = new GraphQLServerLambda({
      context: ctx => ({
        ...ctx,
      }),
      resolvers,
      typeDefs,
    });

    server.graphqlHandler(event, ctx, (error, output) => {
      callback(error, { ...output, statusCode: 200 });
    });
  } catch (exception) {
    console.log(exception);
  }
};
