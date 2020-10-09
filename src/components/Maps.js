import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import IpInfo from "./IpInfo";

const styleMap = {
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	zIndex: 1,
	height: "75vh",
};
const styleInfo = {
	position: "absolute",
	top: 10,
	left: 10,
	backgroundColor: "rgb(0 0 0 / 67%)",
	color: "white",
	padding: 6,
	zIndex: 2,
	maxWidth: "90%",
};

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

class Maps extends Component {
	componentDidUpdate(prevProps, prevState) {
		if (this.props.lat !== prevProps.lat && this.props.lat !== undefined) {
			const map = new mapboxgl.Map({
				container: this.mapContainer,
				style: "mapbox://styles/mapbox/streets-v11",
				center: [this.props.lon, this.props.lat],
				zoom: 12,
			});

			// eslint-disable-next-line
			const marker = new mapboxgl.Marker()
				.setLngLat([this.props.lon, this.props.lat])
				.addTo(map);
		} else if (this.props.lat === undefined) {
			// Default location : Mountain View lon, lat = 37.386, -122.083
			const lat = 37.386;
			const lon = -122.083;
			// eslint-disable-next-line
			const map = new mapboxgl.Map({
				container: this.mapContainer,
				style: "mapbox://styles/mapbox/streets-v11",
				center: [lon, lat],
				zoom: 12,
			});
		}
	}

	render() {
		return (
			<div
				className="my-4"
				style={{ position: "relative", height: "75vh" }}
			>
				<div style={styleInfo}>
					<IpInfo ipInfo={this.props.ipInfo} />
				</div>
				<div
					ref={(el) => (this.mapContainer = el)}
					style={styleMap}
				></div>
			</div>
		);
	}
}

export default Maps;
