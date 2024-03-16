import BtnFreeTrial from "./BtnFreeTrial";
import BtnLearnMore from "./BtnLearnMore";
import ProductCard from "./ProductCard";


function ProductPage() {
  return (
    <div>
      <h1>Product Page</h1>
      <ProductCard img={""} altImg={""} title={""} paragraph={""} link={""} />
      <BtnFreeTrial link={""} text={""} />
      <BtnLearnMore link={""} text={""} />
    </div>
  );
};

export default ProductPage;
