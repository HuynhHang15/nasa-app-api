import React, {useState} from 'react'
import VideoPreview from './VideoPreview';

function VideoPage() {
    const [search, setSearch] = useState('');
    const [videos, setVideos] = useState([]);
    const [loadMore, setLoadMore] = useState(false);
    const [visible, setVisible] = useState(12);

    const showMoreItems = () => {
        setVisible((prev) => prev + 12);
    }

    const handleSearch = (e) => {
        e.preventDefault();

        const url = `https://images-api.nasa.gov/search?q=${search}&page=1&media_type=video`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setVideos(data.collection.items);
            setLoadMore(true);
            setVisible(12);
        })

    }

    return (
        <div>
        <h1>Search a video</h1>
        <form className='form-search' onSubmit={handleSearch}>
            <input
            className="search"
            type='text'
            placeholder="Search for an video"
            onChange={(e) => setSearch(e.target.value)}
            />
            <button
            className="btnSearch"
            type='submit'
            >
            Search
            </button>
        </form>

        <div className="list-item">
            {videos && videos.slice(0, visible).map((preview, index) => (
                <VideoPreview
                    key={index}
                    videoPreview={preview.links[0].href}
                    videoPlay={preview.href[0]}
                    title={preview.data[0].title}
                    description={preview.data[0].description}
                />
            ))}
        </div>
        <button className={loadMore ? 'loadMore' : 'loadMore hide'} onClick={showMoreItems}>Load More</button>

        </div>
    );
}

export default VideoPage
