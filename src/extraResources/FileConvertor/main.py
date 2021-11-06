import sys
import os
import comtypes.client

def convertToDocx(inputFilePath):
    pass

def convertToPDF(inputFilePath):
    try:
        wdFormatPDF = 17
        outputFilePath = "C:\\MyWorkSpace\\output.pdf"

        word = comtypes.client.CreateObject('Word.Application')
        doc = word.Documents.Open(inputFilePath)
        doc.SaveAs(outputFilePath, FileFormat=wdFormatPDF)

        doc.Close()
        word.Quit()

        return outputFilePath
    except Exception as e:
        return e

# inputFilePath, convertTo
def convertFile(argv):
    inputFilePath = argv[1]
    convertTo = argv[2]

    convertOdj = {
        'pdf': convertToPDF,
        'docx': convertToDocx,
    }

    outputFilePath = convertOdj[convertTo](inputFilePath)

    return {
        'status': 'success',
        'message': outputFilePath
    }

# python .\main.py C:\\MyWorkSpace\\Конспект.docx pdf

print(convertFile(sys.argv))
