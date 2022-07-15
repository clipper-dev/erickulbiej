import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'
import '../index.js'
import { SideBarData } from './SideBarData'
import { NavBarData } from './NavBarData'

function Navbar() {

	const [sideBar, setSideBar] = useState(false);
	const showSideBar = () => setSideBar(!sideBar);
	const [button] = useState(true);

	return (
		<>
			<div className='navbar'>
				<div className='title-container'>
					<Link to={'/'} onClick={() => { setSideBar(false) }}>
						<span className='app-title'>eric kulbiej</span>
					</Link>
				</div>
				<div className='navBar-menu'>
					<ul className='navBar-menu-items'>
						{NavBarData.map((item, index) => {
							return (
								<li key={index} className={item._className}>
									<Link to={item.path} onClick={() => { setSideBar(false) }}>
										<span className='navBar-menu-item-title p--display'>{item.title}</span>
									</Link>
								</li>
							)
						})}
					</ul>

				</div>

			</div>
		</>
	)
}

export default Navbar