import React, {useState, useEffect} from 'react'

function AnyPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        const url = `https://api.nasa.gov/planetary/apod?api_key=hoFphzrnhsGNgoQIXlt21ieVDJX9CFbYvPlLbLQq`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPhotoData(data);
            console.log(data)
        })
    },[]);
    if (!photoData) return <div></div>;

    return (
        <div>
            <h1>{photoData.date}</h1>
            <div className='photo-day'>
                {photoData.media_type === 'image' ? (
                    <img
                        src={photoData.url}
                        alt={photoData.title}
                        className='photo'
                    />
                ) : (
                    <iframe
                        title='space-video'
                        src= {photoData.url}
                        frameBorder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowFullScreen
                        className='photo'
                    />
                )}
            </div>
            <div>
                <h1>{photoData.title}</h1>
                <br/> 
                <p className="explanation">{photoData.explanation}</p>
            </div>
        </div>
    )
}

export default AnyPhoto
