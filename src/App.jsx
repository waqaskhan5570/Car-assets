import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Layout>
        {" "}
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello world!
        </h1>
        <h2>This is h2</h2>
        <h3 className="h3">
          This is <h3></h3>
        </h3>
        <div className="bg-primary-dark text-primary-light">
          Primary Colors Example
        </div>
        <div className="bg-secondary-green text-secondary-yellow">
          Secondary Colors Example
        </div>
      </Layout>
    </>
  );
}

export default App;
