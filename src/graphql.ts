import { GraphQLServerLambda } from "graphql-yoga";
import resolvers from "./resolvers/resolvers";
import typeDefs from "./schema/schema.graphql";

export const handler = (event: any, ctx: any, callback: any) => {
  try {
    const server = new GraphQLServerLambda({
      resolvers,
      typeDefs,
      context: (context: any) => ({
        ...context,
      }),
    });

    server.graphqlHandler(event, ctx, (error: any, output: any) => {
      callback(error, { ...output, statusCode: 200 });
    });
  } catch (exception) {
    console.log(exception);
  }
};
