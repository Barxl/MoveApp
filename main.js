'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;



let mainWindow = null;

const menuItems = [
    {
        label: "Menu",
        submenu: [
            {
                label: "About moveApp"
            }
        ]
    },

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
                label: "Exit"
            }
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