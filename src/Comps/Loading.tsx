import './Loading.css'
export default function Loading() {
	return (
		<>
			<div className='loadingDiv'>
				<img className='loadingLogo' src={"https://static.vecteezy.com/system/resources/previews/022/636/388/non_2x/valorant-logo-valorant-icon-transparent-free-png.png"}></img>
				
				<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
				<span>
					Loading ...
				</span>
			</div>
		</> 

	)
}
