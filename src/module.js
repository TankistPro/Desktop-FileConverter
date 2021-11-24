import { ipcMain, shell } from 'electron'
import { covertFile } from '../public/extraResources/FileConvertor/index'
import path from "path";
import fs from "fs";

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

ipcMain.on('getConfigFile', async (event) => {
    try {
        let existConfigFilePath = path.resolve(__dirname + '/configApp.json');

        if(!fs.existsSync(existConfigFilePath)) {
            const initConfigFile = {
                settings: {
                    saveFilePath: 'C:\\MyWorkSpace\\Node'
                }
            }
            fs.writeFileSync(existConfigFilePath, JSON.stringify(initConfigFile), 'utf8')
        }

        const payload = fs.readFileSync(existConfigFilePath, "utf-8")

        event.sender.send('configFile',{
            status: true,
            data: JSON.parse(payload)
        })
    } catch (e) {
        event.sender.send( 'configFile',{
            status: false,
            data: e
        })
    }
})
