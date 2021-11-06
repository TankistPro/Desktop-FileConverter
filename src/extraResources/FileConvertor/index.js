// import path from 'path'

// import { execFile } from 'child_process'
import {PythonShell} from 'python-shell';

export let covertFile = async function (inputFilePath, convertTo) {
    // const payload = await execFile('python', ['./dist_electron/extraResources/FileConvertor/main.py', inputFilePath, convertTo])
    // console.log(payload);

    let options = {
        args: [inputFilePath, convertTo]
    };

    return new Promise((resolve => {
        PythonShell.run('./dist_electron/extraResources/FileConvertor/main.py', options, function (err,results) {
            if (err) throw err;
            resolve(results)
        });
    })).then((response) => {
            return response[0]
        })
        .catch(err => {
            return err
        })
}
