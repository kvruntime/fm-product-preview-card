import "./product-card.css"
import desktopProduct from "/public/images/image-product-desktop.jpg"
import mobileProduct from "/public/images/image-product-mobile.jpg"
import iconCard from "/public/images/icon-cart.svg"
function ProductCard() {
  return (
    <article className="product-card flex flex-col md:flex-row md:items-stretch rounded-xl overflow-hidden bg-white">
      <picture >
        <source media="(width < 375px)" srcSet={mobileProduct} />
        <source media="(width > 375px)" srcSet={desktopProduct} />
        <img className="w-full h-full" src={mobileProduct} alt="product" />
      </picture>

      <div className="py-2 px-5 md:p-6">
        <p className="tracking-wider text-[--dark-grayish-blue]">PERFUME</p>

        <h2 className="font-[700] text-3xl my-3">Gabrielle Essence Eau De Parfum</h2>

        <p className="my-2">A floral, solar and voluptuous interpretation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.</p>

        <div className="flex flex-row gap-3 py-5 items-center">
          <span className="font-[700] text-2xl text-[--dark-cyan] font-['Fraunces']">$149.99</span>
          <span className="text-[--dark-grayish-blue] line-through">$169.99</span>
        </div>

        <div className="w-full">
          <button className="w-full flex flex-row gap-x-2 items-center py-2 px-3 rounded-lg bg-[--dark-cyan]
          hover:bg-[--darker-cyan] text-white justify-center
          ">
            <img src={iconCard} alt="icon-card" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </article>);
}

export default ProductCard;