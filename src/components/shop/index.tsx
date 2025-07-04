import './index.scss'

export default function ShopPage() {
  return <div id="shop-page">
    <h1>Tienda Online</h1>
    <div className='images'>
        <img src="/assets/images/products/camisa.png" alt="Camisa" />
        <img src="/assets/images/products/taza.png" alt="Taza" />
    </div>

    <a className="go-to-shop" href="https://www.etsy.com/shop/Cheesyflystorehouse?ref=dashboard-header">
        Llevame ahi!
    </a>

    <div className="shop-description">
        Camisas, Tazas y mas
    </div>

    <div className="description">
        En esta tienda se venderan varios productos, cada uno con el
        estilo de los proyectos, canciones y albumes de cheesy fly
    </div>
  </div>
}