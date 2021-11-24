import { PythonShell } from 'python-shell';

export let covertFile = async function (filename, inputFilePath, convertTo) {
    let options = {
        args: [filename, inputFilePath, convertTo]
    };
    console.log(__dirname)
    return new Promise((resolve => {
        PythonShell.run('./public/extraResources/FileConvertor/main.py', options, function (err,results) {
            if (err) throw err;
            resolve(results)
        });
    })).then((response) => {
            return JSON.parse(response[0])
        })
        .catch(err => {
            return err
        })
}
