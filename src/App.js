import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="msg-container">
          <h1>Buscador CEP</h1>
        </div>
        <div>
        <input type="text" placeholder="Digite o CEP" className='text-input-container' />
        <button className='btn-container'>Buscar</button>

        </div>
      </header>
    </div>
  );
}

export default App;
