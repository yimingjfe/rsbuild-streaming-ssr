import './App.css';

const App = () => {
  if(typeof document === 'undefined'){
    // some errors occurred on the server side
    // but the project is still rendering correctly on the client side.
    throw new Error("server side error");
  }
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
