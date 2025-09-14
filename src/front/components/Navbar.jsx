import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				{store.user ?
					<div className="ml-auto">

						<Link to="/favorites">
							<button className="btn btn-primary">Favorites</button>
						</Link>
						<Link to="/profile">
							<button className="btn btn-primary">Profile</button>
						</Link>
						<button className="btn btn-primary" onClick={() => { dispatch({ type: "set_user", payload: null }) }}>Sign Out</button>
					</div> :
					<div className="ml-auto">
						<Link to="/signup">
							<button className="btn btn-primary">Sign Up</button>
						</Link>
						<Link to="/login">
							<button className="btn btn-primary">Log In</button>
						</Link>
					</div>
				}
			</div>
		</nav>
	);
};