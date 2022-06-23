import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q0znyd2hcr01xxe9hr67i7/master',
  cache: new InMemoryCache(),
  
 })

