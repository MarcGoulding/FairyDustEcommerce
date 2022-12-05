

function App() {

  const apiURL = import.meta.env.VITE_API_URL
  
  return (
    <h1>Hola {apiURL}</h1>
  );
}

export default App
