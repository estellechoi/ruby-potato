import React from "react";
import axios from "axios";
import "./Home.css";
import Movie from "./../components/Movie";
import ColorSystem from "./../components/ColorSystem";

class Home extends React.Component {
	state = {
		isLoading: true,
	};

	fetchMovies = async () => {
		const {
			data: {
				data: { movies },
			},
		} = await axios.get(
			"https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
		);

		console.log(movies);

		// setState() changes the state and then refreshs DOM with new state applied.
		// This means it calls render() and componentDidUpdate() methods.
		// Do not mutate the state directly as mutating doesn't call render() method so nothing happens.
		// "current" lets us refer the state, not relying on the external state.
		this.setState({ movies, isLoading: false });
	};

	componentDidMount() {
		this.fetchMovies();
	}

	componentDidUpdate() {}

	render() {
		const { isLoading, movies } = this.state;
		return (
			// Why "className" instead of "class" attribute?
			// Because we are using JSX not pure Html. Just to let React identify it is Html class, not Javascript class.
			// likewise, use "htmlFor" instead of "for" for <label> tag.
			<section className="container">
				<ColorSystem />
				{isLoading ? (
					<div className="loader">
						<span className="loader__text">Loading...</span>
					</div>
				) : (
					<div className="movies">
						{movies.map((movie) => (
							<Movie
								key={movie.id}
								id={movie.id}
								title={movie.title}
								summary={movie.summary}
								poster={movie.medium_cover_image}
								year={movie.year}
								genres={movie.genres}
							/>
						))}
					</div>
				)}
			</section>
		);
	}
}

export default Home;
