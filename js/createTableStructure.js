function createTableStructure(tableTitle) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const theadRow = document.createElement("tr");
  table.id = tableTitle;
  thead.id = tableTitle + "Head";
  tbody.id = tableTitle + "Body";
  theadRow.id = tableTitle + "HeadRow";

  table.appendChild(thead);
  table.appendChild(tbody);
  thead.appendChild(theadRow);

  return table;
}
