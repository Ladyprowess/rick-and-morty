import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import PeopleData from "./PeopleData";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://rickandmortyapi.com/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <PeopleData />
      </div>
    </ApolloProvider>
  );
}

export default App;