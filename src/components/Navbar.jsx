import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import logo from "../assets/HamroPhotos/logo.png";

import {
  Bars4Icon,
  UserGroupIcon,
  HeartIcon,
  ShoppingCartIcon,
  HomeIcon,
  UserIcon,
  TvIcon,
  CakeIcon,
  ClockIcon,
  ComputerDesktopIcon,
  GiftIcon,
} from "@heroicons/react/24/solid";
import { KeyIcon, StarIcon } from "@heroicons/react/16/solid";
import CartMenu from "./CartMenu";

const navListMenuItems = [
  {
    title: "Women's Fashion",
    description: "Explore the latest trends in women's fashion.",
    icon: UserIcon,
  },
  {
    title: "Health & Beauty",
    description: "Find beauty products and health essentials.",
    icon: HeartIcon,
  },
  {
    title: "Men's Fashion",
    description: "Discover stylish men's clothing and accessories.",
    icon: UserGroupIcon,
  },

  {
    title: "Watches & Accessories",
    description: "Shop for watches and fashion accessories.",
    icon: ClockIcon,
  },
  {
    title: "Electronic Devices",
    description: "Browse the latest in electronic gadgets.",
    icon: ComputerDesktopIcon,
  },
  {
    title: "TV & Home Appliances",
    description: "Upgrade your home with new appliances.",
    icon: TvIcon,
  },
  {
    title: "Electronic Accessories",
    description: "Get accessories for all your electronic devices.",
    icon: KeyIcon,
  },
  {
    title: "Groceries & Pets",
    description: "Shop for groceries and pet supplies.",
    icon: ShoppingCartIcon,
  },
  {
    title: "Babies & Toys",
    description: "Find products for babies and fun toys.",
    icon: CakeIcon,
  },
  {
    title: "Home & Lifestyle",
    description: "Enhance your home and lifestyle.",
    icon: HomeIcon,
  },
  {
    title: "Sports & Outdoor",
    description: "Gear up for sports and outdoor activities.",
    icon: GiftIcon,
  },
  {
    title: "Motors, Tools & DIY",
    description: "Tools and equipment for all your DIY projects.",
    icon: StarIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <Link to="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Categories
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link to="/">Home</Link>
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/about"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link to="/about">About</Link>
        </ListItem>
      </Typography>
      <NavListMenu />

      <Typography
        as="a"
        href="/contact"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link to="/contact"> Contact Us</Link>
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <div className=" grid grid-cols-2 gap-2 justify-content-center">
            <span>Cart</span>
            <CartMenu />
          </div>
        </ListItem>
      </Typography>
    </List>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <nav className="mx-auto py-2 px-10 shadow-sm  w-full ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <img
          src={logo}
          alt="logo"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 w-[10rem] "
        />

        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </nav>
  );
}
