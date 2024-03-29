import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// react router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mobileSlice from './Features/mobileSlice';
import tableSlice from './Projects/Sudoko/features/tableSlice';
import messageSlice from './Projects/Sudoko/features/messageSlice';
import scoreboardSlice from './Projects/Sudoko/features/scoreboardSlice';
import stopwatchSlice from './Projects/Sudoko/features/stopwatchSlice';
import styleSlice from './Features/styleSlice';
import SubSites from './SubSites';
import Main from './Main';
import dataSlice from './FamTree/Features/dataSlice';
import Error from './Pages/Error';
// import ThreeTesting from './Pages/ThreeTesting';
// import SkillsSphere from './Three/SkillsSphere';
// import Mike from './Projects/Mike/Landing';
import Thanks from './Components/Thanks';
// import Privacy from './Privacy/Privacy.html';

const store = configureStore({
  reducer: {
    mobile: mobileSlice,
    table: tableSlice,
    messages: messageSlice,
    score: scoreboardSlice,
    stopwatch: stopwatchSlice,
    style: styleSlice,
    famData: dataSlice
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App /> } errorElement={ <Error />}>
      <Route path='/' element={ <Main /> } />
      <Route path='future' element={ <SubSites /> } />
      {/* <Route path='three' element={ <ThreeTesting /> } />
      <Route path='sphere' element={ <SkillsSphere /> } /> */}
      <Route path='thanks' element={ <Thanks /> } />
      {/* <Route path='privacyNotice' element={ <Privacy /> } /> */}
      {/* <Route path='landingpage' element={ <Mike /> } /> */}
      {/* <Route path='landing' element={ <Mike /> } /> */}
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <Provider store={ store}>
      <RouterProvider router={ router } />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
