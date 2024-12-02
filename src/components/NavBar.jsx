import CartWidget from "./CartWidget"
function NavBar() {
    const style = {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      width: "100 %",
      color: "white",
      padding: "20px",
        }
    return (
      <>
        <header style={style}>
        <h1>Logo</h1>
        <ul>
          <li><a href="">Servicios</a></li>
          <li><a href="">Nosotros</a></li>
          <li><a href="">Galería</a></li>
          <li><a href="">Contacto</a></li>
        </ul>
        <CartWidget/>
        </header>
      </>
    )
  }
  
  export default NavBar