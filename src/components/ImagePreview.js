import React, {useState} from 'react'

function ImagePreview({image, title, description}) {
    const [show, setShow] = useState(false);

    const handleClose = (e) => {
        if (e.target == e.currentTarget){
            setShow(false);
        }
    }

    return (
        <div>
            <div className="gallery" >
                <img src={image} alt='' onClick={() => setShow(true)}/>
                <div className="title">{title}</div>
            </div>

            <div className={show ? 'modal' : 'modal hide'} onClick={handleClose}>
                <div className='modal-content'>
                    <div>
                        <img src={image}/>
                        <div className="title">{title}</div>
                    </div>
                    <div className="desc">{description}</div>
                    <button onClick={() => setShow(false)}><i className="fas fa-times"></i></button>
                </div>
            </div>
        </div>
    )
}

export default ImagePreview
