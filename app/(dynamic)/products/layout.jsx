import Menu from "./menu/menu";

const ProductsLayout = ({children}) => {
  return (
      <div className="container mx-auto">
        <Menu />
        {children} 
      </div>
  );
}

export default ProductsLayout;
