import BtnFreeTrial from "./BtnFreeTrial";
import ProductCard from "./ProductCard";


function ProductPage() {
  return (
    <div>
      <h1>Product Page</h1>
      <ProductCard img={""} altImg={""} title={""} paragraph={""} link={""} />
      <BtnFreeTrial link={""} text={""} />
    </div>
  );
};

export default ProductPage;
