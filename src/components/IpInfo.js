const className = "mb-2";

const IpInfo = ({ ipInfo = null }) => {
	if (ipInfo) {
		return (
			<div>
				<p className={className}>
					{ipInfo.district
						? `${ipInfo.district}, ${ipInfo.city}, ${ipInfo.country_name}`
						: `${ipInfo.city}, ${ipInfo.country_name}`}
				</p>
				<p className={className}>{ipInfo.ip}</p>
				<p className={className}>{ipInfo.isp}</p>
			</div>
		);
	} else if (ipInfo === null) {
		return null;
	}
};

export default IpInfo;
