import React from 'react';
import ReactDOM from 'react-dom/client';
import { GetGifApp } from './GetGifApp';
import './styles/main.scss';
import { SavedGifs } from './components/SavedGifs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GetGifApp />
)
