import "./style.css"

function TopingMenu() {
  return <>
  <div class="header">
    <nav class="nav">
        <button class="btn-mobile">Menu</button>
        <a href="">Funcionários</a>
        <ul class="menu">
            <li><a href="">Dashboard</a></li>
            <li><a href="">Funcionários</a></li>
            <li><a href="">Welcome Kit</a></li>
            <li><a href="">Feedbacks</a></li>
        </ul>
    </nav>
  </div>
  </>;
}

export default TopingMenu;
