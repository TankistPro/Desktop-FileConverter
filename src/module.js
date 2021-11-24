import { ipcMain, shell } from 'electron'
import { covertFile } from '../public/extraResources/FileConvertor/index'

ipcMain.on('read-file', async (event, arg) => {
    arg[0] = JSON.parse(arg[0])

    const filename = arg[0].name.slice(0, arg[0].name.lastIndexOf('.'))
    const filePath = arg[0].path

    const fileConvertResponse = await covertFile(filename, filePath, arg[1])

    const responsePayload = {
        status: fileConvertResponse.status,
        inputData: {
          filename,
          filePath
        },
        convertTo: arg[1],
        outputData: fileConvertResponse.data,
    }

    event.sender.send('read-file-complete', responsePayload)
})

ipcMain.on('openFilePathDialog', async () => {
    await shell.openPath('C:\\MyWorkSpace')
})
