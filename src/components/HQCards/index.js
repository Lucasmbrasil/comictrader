const HQCard = ({comic}) => {
    return (
        <div>
            <div>{comic.image.thumb_url}</div>
            <div>
                <p>{comic.volume.name}</p>
                <p>{comic.cover_date}</p>
            </div>
        </div>
    )
}

export default HQCard;