function onEdit(e) {
  if(e.range.getA1Notation() !== "J3") return
  if(e.source.getSheetName() !== "Billing") return
  search()
}
