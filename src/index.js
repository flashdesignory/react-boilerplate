import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Main from './Main';
import 'sanitize.css';
import './index.scss';

ReactDOM.render((
		/* <BrowserRouter>
			<Main/>
		</BrowserRouter> */
		<MemoryRouter>
			<Main/>
		</MemoryRouter>
	), document.getElementById('root')
)
