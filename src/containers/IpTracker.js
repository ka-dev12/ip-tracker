import { useCallback, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Maps from "../components/Maps";
import SearchBar from "../components/SearchBar";

const IpTracker = () => {
	const [ipInfo, setIpInfo] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const inputIp = useRef();

	const fetchIpAddress = useCallback((ip = "") => {
		inputIp.current.value = "Loading...";
		setIsLoading(true);
		fetch(`https://json.geoiplookup.io/${ip}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					throw new Error();
				}
				setIpInfo(data);
				setIsLoading(false);
				setError(null);
				inputIp.current.value = data.ip;
			})
			.catch((err) => {
				setIsLoading(false);
				setError(err);
				setIpInfo(null);
				inputIp.current.value = "";
			});
		// eslint-disable-next-line
	}, []);

	const ipSubmit = (e) => {
		e.preventDefault();
		const ip = inputIp.current.value;
		if (!ip.match(/(\d\.\d)/g)) {
			setError("Wrong format");
			inputIp.current.value = "";
		} else {
			fetchIpAddress(ip);
		}
	};

	useEffect(() => {
		fetchIpAddress();
	}, [fetchIpAddress]);

	return (
		<Layout>
			<Header />
			<SearchBar
				isLoading={isLoading}
				error={error}
				inputRef={inputIp}
				ipSubmit={ipSubmit}
			/>
			{ipInfo ? (
				<Maps
					ipInfo={ipInfo}
					lon={ipInfo.longitude}
					lat={ipInfo.latitude}
				/>
			) : (
				<Maps />
			)}
		</Layout>
	);
};

export default IpTracker;
