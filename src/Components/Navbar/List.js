import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PrintIcon from '@mui/icons-material/Print';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded';

import { useNavigate } from "react-router-dom";

export default function BasicList() {
    const navigate = useNavigate();
  
    return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding onClick={() => navigate('/stock')}>
          <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
              >
              <ListItemIcon>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary="Estoque" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => navigate('/machines')}>
            <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
              >
              <ListItemIcon>
                <DesktopWindowsIcon />
              </ListItemIcon>
              <ListItemText primary="Máquinas" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => navigate('/printers')}>
            <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
              >
              <ListItemIcon>
                <PrintIcon />
              </ListItemIcon>
              <ListItemText primary="Impressoras" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => navigate('/movements')}>
            <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
              >
              <ListItemIcon>
                <ImportExportRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Movimentos" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => navigate('/shop')}>
            <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
              >
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Lista de Compras" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
