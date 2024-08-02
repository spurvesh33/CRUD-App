const Navbar = () => {
    return ( 
    <>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <a href="/" class="navbar-brand ms-3">CRUDAPP</a>

       <ul class="navbar-nav navbar-item-right">
      <li class="nav-item">
         <a href="/" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
         <a href="/categories" class="nav-link">Categories</a>
      </li>
         <li class="nav-item">
            <a href="/about" class="nav-link">About</a>
         </li>
         <li class="nav-item">
            <a href="/contact" class="nav-link">Contact</a>
         </li>
    </ul>
    </nav>
    </>
    )
}

export default Navbar;