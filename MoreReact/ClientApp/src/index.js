import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDom from 'react-dom';

import MyFirstComponent from './MyFirstComponent';
import ReverseDemo from './ReverseDemo';
import NumberLister from './NumberLister';

ReactDom.render(<NumberLister />, document.getElementById('root'));