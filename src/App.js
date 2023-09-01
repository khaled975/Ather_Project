import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainApp from './MainApp';
import AuthRoutes from './AuthRoutes';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Routes for the authentication pages */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* Routes for the main app */}
        <Route path="/" element={<MainApp />} />
      </Routes>
    </div>
  );
}
export default App;
