const { contextBridge, shell } = require('electron')

contextBridge.exposeInMainWorld(
    'electron',
    {
        test: () => alert('Boo!'),
        openExternal: shell.openExternal
    }
)