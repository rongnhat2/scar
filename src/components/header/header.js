import React, { Component } from 'react';

class header extends Component{

    render(){
        return (
        	<header>
				<nav>
					<div className="component">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<ul>
									<li><a href="index">Trang chủ</a></li>
									<li><a href="">Giới thiệu</a></li>
									<li><a href="">Tin tức</a></li>
									<li><a href="">Khuyến mãi</a></li>
									<li><a href="">Liên hệ</a></li>
								</ul>
							</div>

							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<ul>
									<li><a><i className="fas fa-envelope"></i>otovietthanh1988@gmail.com</a></li>
									<li><a><i className="fas fa-phone"></i>0123456789</a></li>
									<li><a><i className="fas fa-clock"></i>Làm việc 24/7</a></li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
				<menu>
					<div className="open_menu">
						<i className="fas fa-bars"></i>
					</div>
					<div className="component">
						<div className="logo">
							<img src="images/logo-viet-thanh.png"/>
						</div>
						<div className="menu">
							<ul className="list-item">
								<li className="item sub-menu">
									<a href="sub-page" className="link-item">BỌC GHẾ DA Ô TÔ<i className="fas fa-sort-down"></i></a>
									<ul>
										<li><a href="sub-page">BỌC GHẾ DA Ô TÔ</a></li>
										<li><a href="sub-page">BỌC GHẾ DA Ô TÔ</a></li>
										<li><a href="sub-page">BỌC GHẾ DA Ô TÔ</a></li>
									</ul>
								</li>
								<li className="item"><a href="sub-page" className="link-item">Trần Xe Ô Tô</a></li>
								<li className="item sub-menu">
									<a href="sub-page" className="link-item">Trần Xe Ô Tô<i className="fas fa-sort-down"></i></a>
									<ul>
										<li><a href="sub-page">BỌC GHẾ DA Ô TÔ</a></li>
										<li><a href="sub-page">BỌC GHẾ DA Ô TÔ</a></li>
										<li><a href="sub-page">BỌC GHẾ DA Ô TÔ</a></li>
									</ul>
								</li>
								<li className="item sub-menu">
									<a href="sub-page" className="link-item">BỌC GHẾ DA Ô TÔ<i className="fas fa-sort-down"></i></a>
									<ul>
										<li><a href="sub-page">BỌC GHẾ DA Ô TÔ</a></li>
										<li><a href="sub-page">BỌC GHẾ DA Ô TÔ</a></li>
										<li><a href="sub-page">BỌC GHẾ DA Ô TÔ</a></li>
									</ul>
								</li>
							</ul>
						</div>
						
					</div>
				</menu>
			</header>
        );
    }
}

export default header;
