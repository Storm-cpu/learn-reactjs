import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Lofi Hits",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/0/0/d/900d29d81f4ab570c451fec9ae384f55.jpg"
        },
        {
            id: 2,
            name: "Chill Hits",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/2/e/3/92e34e8a92ba589ba41c078bfbbf57f0.jpg"
        }
    ]
    return (
        <div>
            <h2>Album List</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;