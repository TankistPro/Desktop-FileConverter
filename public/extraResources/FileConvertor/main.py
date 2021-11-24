import sys
import json
import os
import comtypes.client

def convertToDocx(filename, inputFilePath):
    pass

def convertToPDF(filename, inputFilePath):
    wdFormatPDF = 17
    outputFilePath = f"C:\\MyWorkSpace\\{filename}.pdf"

    word = comtypes.client.CreateObject('Word.Application')
    doc = word.Documents.Open(inputFilePath)
    doc.SaveAs(outputFilePath, FileFormat=wdFormatPDF)

    doc.Close()
    word.Quit()

    return outputFilePath

def convertFile(argv):
    filename =  argv[1]
    inputFilePath = argv[2]
    convertTo = argv[3]

    convertOdj = {
        'pdf': convertToPDF,
        'docx': convertToDocx,
    }

    try:
        outputFilePath = convertOdj[convertTo](filename, inputFilePath)

        return json.dumps({
            'status': 'success',
            'data': outputFilePath
        })
    except Exception as error:
        return {
            'status': 'error',
            'data': error
        }

# python .\main.py C:\\MyWorkSpace\\Конспект.docx pdf

print(convertFile(sys.argv))
