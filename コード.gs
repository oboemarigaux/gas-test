function doGet() {
  var htmlOutput = HtmlService.createTemplateFromFile("index.html").evaluate();
  return htmlOutput;
}
