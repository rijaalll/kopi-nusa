// REACT IMPORT
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// STYLE IMPORT
import './index.css';
import './font/MyFont.css';
import './style/animation.css';
import './style/custom.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';

// PAGE, COMPONENT IMPORT
import HomeApp from './page/HomeApp.jsx';
import OrderApp from './page/OrderApp.jsx';
import NotFound from './page/NotFound.jsx';

function App() {
  const [isopenList, setopenList] = useState(false);
  const openList = () => {
    setopenList(!isopenList);
  };

  return (
    <div className={`w-full h-auto min-h-[100dvh] bg-slate-100 transition-colors duration-300`}>

      <Router>
        <Routes>
          <Route path='/' element={<HomeApp />} />
          <Route path='/order' element={<OrderApp />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;