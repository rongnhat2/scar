import React, { Component } from 'react';


class menu_item extends Component{

    render(){
        return (

			<div className="menu-item">
				<h3>
					Bọc nội thất
				</h3>
				<div className="more-item">
					<a href="">XEM TẤT CẢ</a>
				</div>         
				<div className="list-item">
					<ul>
						<li><a href="sub-page">BMW</a></li>
						<li><a href="sub-page">KIA</a></li>
						<li><a href="sub-page">HYUNDAI</a></li>
						<li><a href="sub-page">Chevrolet</a></li>
						<li><a href="sub-page">FORD</a></li>
						<li><a href="sub-page">Mazda</a></li>
						<li><a href="sub-page">Mercedes</a></li>
						<li><a href="sub-page">LAND ROVER</a></li>
					</ul>
				</div>
			</div>

		);
    }
}

export default menu_item;
