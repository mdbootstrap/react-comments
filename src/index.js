import React from 'react';
import { createRoot } from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Basic from './basic/Basic';
import App from './App';
import Nested from './nested/Nested';
import CommentCard from './commentCard/CommentCard';
import RecentComments from './recentComments/RecentComments';
import Unread from './unread/Unread';
import Column from './column/Column';
import Add from './add/Add';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/nested" element={<Nested />} />
        <Route path="/comment-card" element={<CommentCard />} />
        <Route path="/recent-comments" element={<RecentComments />} />
        <Route path="/unread" element={<Unread />} />
        <Route path="/column" element={<Column />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
