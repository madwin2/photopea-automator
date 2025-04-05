app.open("mockups/cuero.psd");

var so = app.activeDocument.layers.getByName("logo");

app.open("logos/logo.png");
app.activeDocument.selection.selectAll();
app.activeDocument.selection.copy();
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

app.activeDocument = app.documents[0];
so.smartObject.replaceContents(app.documents[1]);

app.activeDocument.exportDocument(new File("output/mockup.jpg"), ExportType.SAVEFORWEB);