import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Main from './Main';
import 'sanitize.css';
import './index.scss';
import { isMobile } from './utils/utils';

if(isMobile()){
	document.body.classList.add('mobile');
}else{
	document.body.classList.add('desktop');
}

ReactDOM.render((
		/* <BrowserRouter>
			<Main/>
		</BrowserRouter> */
		<MemoryRouter>
			<Main/>
		</MemoryRouter>
	), document.getElementById('root')
)
