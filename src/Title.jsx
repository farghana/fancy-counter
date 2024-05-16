const Title = ({ locked }) => {
	return (
		<h1 className='title'>
			{locked ? <span>Limit Reached! Buy Pro!</span> : "Fancy Counter"}
		</h1>
	);
};

export default Title;
