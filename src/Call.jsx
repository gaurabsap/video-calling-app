import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
 import { useParams } from 'react-router-dom';
const Call = () => {
    const {roomId} = useParams()

    const myMeeting = async(element) =>{
        const appID = ID
        const serverSecret = "ITS'S SECRET";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomId,  
            Date.now().toString(),
            "gaurab",
            )
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: element,
                scenario: {
                    mode: ZegoUIKitPrebuilt.VideoConference,
                   },
            })
        }
  return (
    <>
    <div ref={myMeeting} style={{ width: '100vw', height: '100vh' }}/>
    </>
  )
}

export default Call
