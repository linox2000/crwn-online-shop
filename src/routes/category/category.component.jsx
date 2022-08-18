import {CategoryContainer,CategoryTitle} from  "./category.styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {Fragment, useEffect,useState } from "react";

import { selectCategoriesMap } from "../../store/categories/category/category.selector";

import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  
  console.log('render/re-rendering category component')

  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log('effect fired calling setProduct')
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle >{category.toUpperCase()} </CategoryTitle>
      <CategoryContainer >
        {
        products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
