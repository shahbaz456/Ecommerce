import React, { useEffect, useState } from "react";
import {
  NavbarText,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
function Categories() {
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categories, setCategories] = useState();
  const getDetails = async () => {
    let response = await fetch(`https://fakestoreapi.com/products/categories`, {
      method: "GET",
    });
    const searchresult = await response.json();
    console.log("Get Details ", searchresult);
    setCategories(searchresult);
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div class="dropdown">
      <NavbarText>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret className="d-d-butn">
            Categories
          </DropdownToggle>
          <DropdownMenu class="menu">
            <DropdownItem header className="opt"></DropdownItem>

            <DropdownItem className="opt"></DropdownItem>
            <DropdownItem className="opt" divider />
            <DropdownItem className="opt"></DropdownItem>
            <DropdownItem className="opt"></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarText>
    </div>
  );
}

export default Categories;
