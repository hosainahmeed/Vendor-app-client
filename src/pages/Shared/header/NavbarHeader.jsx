
import SearchBar from "../../../components/form/input/SearchBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuBarItem from "../../../components/MenuBarItem";
function NavbarHeader() {
  return (
    <div className="pt-3 bg-white">
      <div className="area flex-bet gap-4 px-2">
        <h3 className="text-lg font-bold text-green-700 text-nowrap">খাঁটি দানা</h3>
        <SearchBar />
        <div className="flex-center gap-2">
          <ShoppingCartIcon />
        </div>
      </div>
      <MenuBarItem />
    </div>
  );
}

export default NavbarHeader;
