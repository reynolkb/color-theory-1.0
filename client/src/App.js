import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <>
      <header>
        <h1>Color Theory</h1>
        <nav>
          <ul>
            <li>User Page</li>
            <li>Search</li>
            <li>Login</li>
            <li>Signup</li>
          </ul>
        </nav>
      </header>

      <main>
        <Home />
      </main>

      <footer>
        Footer
        <ul>
          <li>An</li>
          <li>External</li>
          <li>Link</li>
        </ul>
      </footer>
    </>
  );
}

export default App;
