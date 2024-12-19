import ProductList from "./_components/ProductList";
import { _ } from "@evershop/evershop/src/lib/locale/translate";
import PropTypes from "prop-types";
import React from "react";
import { get } from '@evershop/evershop/src/lib/util/get';
import { Price } from "./_components/item/Price";
import { Name } from "./_components/item/Name";
import {Thumbnail} from "./_components/item/Thumbnail";
import {CategoryWheel} from "./_components/CategoryWheel";
import Button from '@components/common/form/Button';


export default function FeaturedProducts({ collection }) {
  if (!collection) {
    return null;
  }
  return (
    <div className="pt-3">


      <div className="page-width -translate-y-12">

      <CategoryWheel />
        <h2 className="mt-3 mb-3 text-center uppercase  tracking-widest">
          {collection.name}
        </h2>

        {/* <ProductList products={collection.products.items} countPerRow={1} /> */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">

      {collection.products.items.map((product) => (
         
            <div
              key={product.productId}
              className=" flex flex-col py-6 bg-white p-2 rounded  border border-slate-100
              bg-card text-card-foreground shadow size-full md:overflow-hidden rounded-lg hover:scale-105 transition-transform duration-200 ease-in-out
              md:justify-start justify-center items-center  md:space-y-2 md:p-4 md:rounded-lg md:border md:border-slate-100 md:shadow-md md:bg-white md:overflow-hidden 
      
              "
            >
                {/* <a href={product.url}>
                  <img
                    src={product.image.url}
                    alt={product.name}
                    className=" w-24 h-24 rounded md:w-full md:h-48 object-cover "
                  />
                </a> */}
                <Thumbnail url={product.url} imageUrl={get(product, 'image.url')} alt={product.name} />
                <div className="text-center md:ml-0">
                  <Name name={product.name} url={product.url} />
                  <span>已售:30283</span>
                  <Price  {...product.price} />
                </div>
                <div className="flex flex-col ">
                <Button
                className="rounded bg-transparent mx-4"
                  title={_('BUY NOW')}
                  outline
                  url={product.url}
                  onAction={() => {
                    console.log('buy now');
                  }}
                />
                
                </div>
               
              </div>
             
          ))}
      </div>
      </div>
      
    </div>
  );
}

FeaturedProducts.propTypes = {
  collection: PropTypes.shape({
    collectionId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    products: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          productId: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.shape({
            regular: PropTypes.shape({
              value: PropTypes.number.isRequired,
              text: PropTypes.string.isRequired,
            }).isRequired,
            special: PropTypes.shape({
              value: PropTypes.number.isRequired,
              text: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
          image: PropTypes.shape({
            alt: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
          }).isRequired,
          url: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

FeaturedProducts.defaultProps = {
  featuredProducts: [],
};

export const layout = {
  areaId: "content",
  sortOrder: 10,
};

export const query = `
  query query {
    collection (code: "homepage") {
      collectionId
      name
      products (filters: [{key: "limit", operation: eq, value: "6"}]) {
        items {
          productId
          name
          price {
            regular {
              value
              text
            }
            special {
              value
              text
            }
            }
          image {
            alt
            url: listing
          }
          url
        }
      }
    }
  }
`;
