import PropTypes from 'prop-types';
import React from 'react';
import '@components/frontStore/catalog/product/list/item/Thumbnail.scss';
import ProductNoThumbnail from '@components/common/ProductNoThumbnail';

function Thumbnail({ url, imageUrl, alt }) {
  return (
    <div className=" ">
      {imageUrl && (
        <a href={url} className=''>
          <img src={imageUrl} alt={alt}    className=' w-24 h-24 rounded md:w-full md:h-48 object-cover ' />
        </a>
      )}
      {!imageUrl && (
        <a href={url}>
          <ProductNoThumbnail width={100} height={100} />
        </a>
      )}
    </div>
  );
}



Thumbnail.propTypes = {
  alt: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string
};

Thumbnail.defaultProps = {
  alt: '',
  imageUrl: '',
  url: ''
};

export { Thumbnail };
