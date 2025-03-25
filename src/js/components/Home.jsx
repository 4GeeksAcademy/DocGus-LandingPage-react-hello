import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./footer.jsx";



//create your first component
const Home = () => {
	const cardProperties = [
		{ title: "Titulo1", parrafo: "Parrafo1", image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/16F45/production/_91912049_thinkstockphotos-527112921.jpg.webp" },
		{ title: "Titulo2", parrafo: "Parrafo2", image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/16F45/production/_91912049_thinkstockphotos-527112921.jpg.webp" },
		{ title: "Titulo3", parrafo: "Parrafo3", image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/16F45/production/_91912049_thinkstockphotos-527112921.jpg.webp" },
		{ title: "Titulo4", parrafo: "Parrafo4", image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/16F45/production/_91912049_thinkstockphotos-527112921.jpg.webp" }
	]
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="d-flex justify-content-center mt-5">
				{cardProperties.map((card, item) => {
					return (<Cards title={card.title} parrafo={card.parrafo} image={card.image} />)
				})}
			</div>
			<Footer/>
		</div>
	);
};

export default Home;