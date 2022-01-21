import React, {useState} from 'react'
import ImagePreview from "./ImagePreview";


function HomePage() {
    const [search, setSearch] = useState('');
    const [photos, setPhotos] = useState([]);
    const [loadMore, setLoadMore] = useState(false);
    const [visible, setVisible] = useState(12);

    const showMoreItems = () => {
        setVisible((prev) => prev + 12);
    }

    const handleSearch = (e) => {
        e.preventDefault();

        const url = `https://images-api.nasa.gov/search?media_type=image&q=${search}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPhotos(data.collection.items);
            setLoadMore(true);
            setVisible(12);
        })

    }

    return (
        <div>
        <h1>Hello, earthlings!</h1>
        <p className="content">
            Here you can find photos of our planet, the other planets and galaxies too!
        </p>
        <form className='form-search' onSubmit={handleSearch}>
            <input
            className="search"
            type='text'
            placeholder="Search for an image"
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
            {photos && photos.slice(0, visible).map((preview, index) => (
                <ImagePreview
                    key={index}
                    image={preview.links[0].href}
                    title={preview.data[0].title}
                    description={preview.data[0].description}
                />
            ))}
        </div>
        <button className={loadMore ? 'loadMore' : 'loadMore hide'} onClick={showMoreItems}>Load More</button>

        </div>
    );
}

export default HomePage
