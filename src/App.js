import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRouters';

function App() {
  return (
    <Router> 
      <CustomerRoutes />
    </Router>
  );
}

export default App;
