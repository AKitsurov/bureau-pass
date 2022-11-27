import React from "react";
import { Nav, NavLink, NavMenu } 
from "./NavbarElements";
const Navbar = () => {
return (
<>
<Nav>
<NavMenu>
<NavLink to="/request" activeStyle>
Просмотр заявки
</NavLink>
<NavLink to="/reqlist" activeStyle>
Список заявок
</NavLink>
<NavLink to="/creation" activeStyle>
Создать заявку
</NavLink>
<NavLink to="/sign-up" activeStyle>
Вход
</NavLink>
</NavMenu>
</Nav>
</>
);
};
export default Navbar;