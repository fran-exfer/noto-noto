import { useContext } from 'react';
import NotoContext from '../utils/NotoContext';

export default function Navbar() {
  const [state, dispatch] = useContext(NotoContext);

  return (
    <nav className="navbar">
      <h1 className="navbar__app-title">NotoNoto</h1>
      <button
        className="navbar__theme-toggle"
        onClick={() => dispatch({ type: 'toggleTheme' })}
      >
        {state.theme === 'light' ? '🕶️' : '☀️'}
      </button>
    </nav>
  );
}
