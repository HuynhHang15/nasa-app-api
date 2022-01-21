import React, {useState} from 'react'

function VideoPreview({videoPreview, videoPlay, title, description}) {
    const [show, setShow] = useState(false);
    const videoPrueba = "https://images-assets.nasa.gov/video/GSFC_20110617_LRO_m10794_Eclipse_Librating_Moon/GSFC_20110617_LRO_m10794_Eclipse_Librating_Moon~orig.mp4"

    const handleClose = (e) => {
        if (e.target == e.currentTarget){
            setShow(false);
        }
    }

    return (
        <div>
            <div className="gallery" >
                <img src={videoPreview} alt='' onClick={() => setShow(true)}/>
                <div className="title">{title}</div>
                {/* <div>{vid}</div> */}
            </div>

            <div className={show ? 'modal' : 'modal hide'} onClick={handleClose}>
                <div className='modal-content'>
                    <div>
                        <video src={videoPlay}>
                            video video
                        </video>
                        <div className="title">{title}</div>
                    </div>
                    <div className="desc">{description}</div>
                    <button onClick={() => setShow(false)}><i className="fas fa-times"></i></button>
                </div>
            </div>
        </div>
    )
}

export default VideoPreview
