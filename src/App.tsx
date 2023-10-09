import { useState, useEffect } from 'react';
import BgVideo from './assets/HomeScreen_E7A2_706.mp4';
import TopBar from './TopBar';
import LeftButtonMenu from './LeftButtonMenu';
import FriendList from './Pages/Friendlist/FriendList';
import Chat from './Chat';
import './App.css'
import Loading from './Comps/Loading';
import FeaturesSkin from './Pages/FeaturedSkin/FeaturesSkin';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <div className='bgVideo'>
            <video disablePictureInPicture src={BgVideo} loop autoPlay />
          </div>

          <div style={{ zIndex: 1 }}>
            <TopBar />
            <LeftButtonMenu />

            <FeaturesSkin></FeaturesSkin>
            <Chat></Chat>
            <FriendList />
          </div>



        </>
      )}

    </>

  )
}

export default App


{/* <span style={{ zIndex: 1, position: 'relative', width: "100vw", height: "100vh" }}>

</span>

<div className='bgVideo'>
  <video disablePictureInPicture src={BgVideo} loop autoPlay />
</div> */}