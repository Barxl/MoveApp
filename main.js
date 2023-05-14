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
                label: "Map",
                click: async () => {
                    const win2 = new BrowserWindow({
                    height: 300,
                    width: 400
                    });

                    win2.loadURL("https://www.google.com/maps/@53.3450488,-6.2680012,14z");
                },
            },
            {
                type: "separator",
            },
            {
                label: "Help"
            },
            {
                type: "separator",
            },
            {
                label: "Learn more"
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
                label: "Open camera",
                click: async () => {
                    const win3 = new BrowserWindow({
                    height: 750,
                    width: 650
                    });
                    
                    win3.loadFile("camera.html");
                    win3.once("ready-to-show"), ()=> win3.show();
                },
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