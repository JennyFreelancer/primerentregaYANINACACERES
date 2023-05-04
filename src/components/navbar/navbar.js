import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h3>Bikecommerce</h3>
            <div>
                <button>Bicicletas</button>
                <button>Componentes</button>
                <button>Acessorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar