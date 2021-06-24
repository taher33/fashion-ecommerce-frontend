import React, { useState } from "react";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import FaceIcon from "@material-ui/icons/Face";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Link from "next/link";

function PhoneMenu({ userIsLogedIn }) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CssBaseline />

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <Drawer variant="persistent" anchor="right" open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link href="/listings?type=new">
            <ListItem button>
              <ListItemIcon>
                <NewReleasesIcon />
              </ListItemIcon>
              <ListItemText primary={"New"} />
            </ListItem>
          </Link>

          <Link href="/listings">
            <ListItem button>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary={"Men"} />
            </ListItem>
          </Link>

          <Link href="/listings">
            <ListItem button>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary={"Women"} />
            </ListItem>
          </Link>

          <Link href="/listings">
            <ListItem button>
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <ListItemText primary={"Kids"} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        {/* ///////----------////// */}

        {userIsLogedIn ? (
          <List>
            <ListItem button>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary={"Cart"} />
            </ListItem>
          </List>
        ) : (
          <List>
            <Link href="/login">
              <ListItem button>
                <ListItemIcon>
                  <LockOpenIcon />
                </ListItemIcon>
                <ListItemText primary={"Login"} />
              </ListItem>
            </Link>

            <Link href="/signup">
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary={"SignUp"} />
              </ListItem>
            </Link>
          </List>
        )}
      </Drawer>
    </div>
  );
}

export default PhoneMenu;
