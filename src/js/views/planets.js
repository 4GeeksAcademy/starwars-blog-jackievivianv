import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PlanetsInfo } from "../component/PlanetsInfo.js";

export const Planets = () => {


	const { store, actions } = useContext(Context);

	

	const params = useParams();


	useEffect(() => {
		actions.getPlanetsInfo(params.theid);
	}, []);


	return (
		<div className="jumbotron">
			

			<PlanetsInfo
				key={params.theid}
				name={store.charactersInfo.name}
				eye_color={store.charactersInfo.eye_color}
				hair_color={store.charactersInfo.hair_color}
				mass={store.charactersInfo.mass}
				gender={store.charactersInfo.gender}
				skin_color={store.charactersInfo.skin_color}
				birth_year={store.charactersInfo.birth_year}
			/>

			<hr className="my-4" />

			<Link to="/" className="mx-3">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
