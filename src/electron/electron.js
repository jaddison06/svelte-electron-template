const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('isdev')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        icon: path.join(__dirname, '../../public/favicon.png'),
        show: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    mainWindow.loadURL(
        isDev
        ? 'http://localhost:5000'
        : `file://${path.join(__dirname, "../../public/index.html")}`
    )

    mainWindow.on('ready-to-show', mainWindow.show)
}

app.on('ready', () => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})