const ss = SpreadsheetApp.getActiveSpreadsheet()

const formWS = ss.getSheetByName("Billing")
const settingsWS = ss.getSheetByName("Settings")
const dataWS = ss.getSheetByName("Data")

const idCell = formWS.getRange("C3")
const searchCell = formWS.getRange("J3")

const fieldRange = ["C5","C7","C9","F3","F5","F7","F9","C13","D13","E13","C14","D14","E14","C16","D16","E16","C17","D17","E17","C20"]


function saveRecord() {

  const id = idCell.getValue()

  if(id == ""){
    createNewRecord()
    return
  }

  const cellFound = dataWS.getRange("A:A")
                      .createTextFinder(id)
                      .matchCase(true)
                      .matchEntireCell(true)
                      .findNext()

  if(!cellFound) return                     
  const row =  cellFound.getRow() 
  const fieldValues = fieldRange.map(f => formWS.getRange(f).getValue())
  fieldValues.unshift(id)
  dataWS.getRange(row,1,1,fieldValues.length).setValues([fieldValues]) 
  searchCell.clearContent() 
  ss.toast("Record Updated")
} 



function createNewRecord()  {

  const fieldValues = fieldRange.map(f => formWS.getRange(f).getValue())

  const nextIDCell = settingsWS.getRange("A2")
  const nextID = nextIDCell.getValue()

  fieldValues.unshift(nextID)

  //console.log(fieldValues)
  dataWS.appendRow(fieldValues)
  idCell.setValue(nextID)
  nextIDCell.setValue(nextID+1)
  ss.toast("New Record Created")
}

function clearRecord()  {
  fieldRange.forEach(f => formWS.getRange(f).clearContent())
  idCell.clearContent()
  searchCell.clearContent()
}

function search() {

  const searchValue = searchCell.getValue()
  const data = dataWS.getRange("A2:V").getValues()
  const recordsFound = data.filter(r => r[21] == searchValue)
  if(recordsFound.length === 0) return

  idCell.setValue(recordsFound[0][0])

  fieldRange.forEach((f,i) => formWS.getRange(f).setValue(recordsFound[0][i+1]))
}

function deleteRecord() {
  const id = idCell.getValue()

  if(id == "") return

  const cellFound = dataWS.getRange("A:A")
                      .createTextFinder(id)
                      .matchCase(true)
                      .matchEntireCell(true)
                      .findNext()

  if(!cellFound) return                     
  const row =  cellFound.getRow()
  dataWS.deleteRow(row)   
  clearRecord()
  ss.toast("Record Deleted")
}
