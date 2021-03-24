import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AllBlogs from './components/allblogs';
import EditBlog from './components/editblog';
import NewBlog from './components/newblog';
import OneBlog from './components/oneblog';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path ='/' component={AllBlogs} />
				<Route exact path ='/:id?' component={OneBlog} />
				<Route exact path = '/create/newblog' component={NewBlog} />
				<Route exact path = '/api/blog/:id?/admin' component={EditBlog}/>
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps {}

/* CLASS REACT EXAMPLE */
// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

export default App;
