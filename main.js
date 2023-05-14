'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

let mainWindow = null;

const menuItems = [
    {
        label: "File",
        submenu: [
           
            {
                label: "Learn more"
            },
            {
                label: "Help"
            },
            {
                type: "separator",
            },
            {
                label: "Exit",
                click: () => app.quit()
            }
        ]
    },

    {
        label: 'View',
        submenu: [
          { role: 'reload' },
          { type: 'separator' },
          { role: 'resetZoom' },
          { role: 'zoomIn' },
          { role: 'zoomOut' },
          { type: 'separator' },
          { role: 'togglefullscreen' }
        ]
      },

    {
        label: "MoveApp",
        submenu: [
            {
                label: "About moveApp"
            },
            { type: 'separator' },
            { role: 'services' },
        ]
    },

    {
        label: "Account",
        submenu: [
            {
                label: "User Account"
            },
            {
                type: "separator",
            },
            {
                label: "Log out"
            }
        ]
    },

];

const menu = Menu.buildFromTemplate(menuItems);
Menu.setApplicationMenu(menu);

app.on('window-all-closed', () => {
    if (Process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {
    mainWindow = new BrowserWindow ({
        useContentSize: true,
        width: 800,
        heigth: 600,
        resizable: false,
        fullscreen: false
    });
    mainWindow.loadURL (`file://${__dirname}/index.html`);
    mainWindow.on ('closed', () => {mainWindow = null;});
});