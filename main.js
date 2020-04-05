const { app, BrowserWindow, Menu } = require('electron')

app.allowRendererProcessReuse = true

const createWindow = () => {
  const window = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  const template = [
    {
      label: app.name,
      submenu: [
        {
          label: '退出',
          click: () => app.quit()
        }
      ]
    },
    {
      label: '编辑',
      submenu: [{
        label: '自定义项目',
        click: () => console.log(12)
      }]
    }
  ]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

  window.loadFile('index.html')
}

app.whenReady().then(createWindow)
