import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => (
	<div>
		<div className="container-fluid">{children}</div>
		<Footer />
	</div>
);

export default Layout;
