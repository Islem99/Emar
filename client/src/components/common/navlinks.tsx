import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface NavLink {
  title: string;
  subMenu?: string[];
}

interface NavLinksProps {
  links: NavLink[];
}

const NavLinksContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  position: "relative",
});

const NavLinkItem = styled(Typography)({
  cursor: "pointer",
  "&:hover": {
    color: "#cccc",
  },
});

const SubMenuContainer = styled(Box)({
  position: "absolute",
  top: "100%",
  left: 0,
  zIndex: 999,
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
});
// const StyledLink = styled(Link)`
//   color: #fff;
//   text-decoration: none;
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 1.6;
//   letter-spacing: 0.0075em;

//   transition: color 0.3s ease; /* Add transition for hover effect */

//   &:hover {
//     color: #cccccc; /* Change color on hover */
//   }
// `;

export const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavLinksContainer>
      {links?.map((link, index) => (
        <React.Fragment key={index}>
          {link.subMenu ? (
            <Box
              onMouseEnter={toggleSubMenu}
              onMouseLeave={toggleSubMenu}
              position="relative"
            >
              <NavLinkItem>
                {link.title} <ArrowDropDownIcon />
              </NavLinkItem>
              {isOpen && (
                <SubMenuContainer>
                  {link.subMenu.map((subLink, subIndex) => (
                    <NavLinkItem key={subIndex}>{subLink}</NavLinkItem>
                  ))}
                </SubMenuContainer>
              )}
            </Box>
          ) : (
            <NavLinkItem>{link.title}</NavLinkItem>
          )}
        </React.Fragment>
      ))}
    </NavLinksContainer>
  );
};
