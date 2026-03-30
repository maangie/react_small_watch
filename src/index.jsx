import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import State from './State';

const root = createRoot(document.getElementById('root'));
root.render(<State />);
