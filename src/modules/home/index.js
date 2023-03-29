import { lazy } from 'react';
import Module from 'asab-webui/abc/Module';
const HomeContainer = lazy(() => import("./containers/HomeContainer"));

import "./containers/home.scss";

export default class HomeModule extends Module {
	constructor(app, name){
		super(app, "HomeModule");

		app.Router.addRoute({ path: '/home', exact: true, name: 'Home', component: HomeContainer });

		app.Navigation.addItem({
			name: 'Home',
			icon: 'cil-home',
			url: '/home'
		});

	}
}