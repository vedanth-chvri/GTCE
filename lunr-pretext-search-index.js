var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Author X. Lastname    This is the abstract.   "
},
{
  "id": "worksheet24",
  "level": "1",
  "url": "worksheet24.html",
  "type": "Section",
  "number": "1",
  "title": "24 Worksheet (LN 2.2, 2.3)",
  "body": " 24 Worksheet (LN 2.2, 2.3)    Poll Question   True or False: for all values of and    Hint: plot it in Desmos 3D! And: how does this exercise relate to symmetric matrices?      24.1 Expressing Quadratic Forms in Terms of Symmetric Matrices    Definition     A quadratic form is a function: given by,      Matrix A is x and symmetric, and is a variable vector in    Example: express in the form      24.2 The Principle Axes Theorem   If is a symmetric matrix then there exists an orthogonal change of variable that transforms to with no cross-product terms.    Proof in the lecture videos\/textbook    24.2.1 Example   Consider where     Make a change of variable that transforms the quadratic form into another quadratic that has no cross-product terms.  For what values of will satisfy for any and      Tip: it may help to plot the surfaces in Desmos 3D to see what the surface looks like as you change value of      Testing   "
},
{
  "id": "worksheet24-2-1",
  "level": "2",
  "url": "worksheet24.html#worksheet24-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Poll Question "
},
{
  "id": "worksheet24-3-1",
  "level": "2",
  "url": "worksheet24.html#worksheet24-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "24.1 Expressing Quadratic Forms in Terms of Symmetric Matrices "
},
{
  "id": "worksheet24-3-2",
  "level": "2",
  "url": "worksheet24.html#worksheet24-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition "
},
{
  "id": "worksheet24-4-1",
  "level": "2",
  "url": "worksheet24.html#worksheet24-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "24.2 The Principle Axes Theorem "
},
{
  "id": "worksheet24-4-4",
  "level": "2",
  "url": "worksheet24.html#worksheet24-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "24.2.1 Example "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "2",
  "title": "My First Section",
  "body": " My First Section   Some words    My First Subsection  Some more words  foo   A frog   A nice-looking frog with a longish description.    Bar:   "
},
{
  "id": "subsection-1-4",
  "level": "2",
  "url": "section-1.html#subsection-1-4",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " A frog   A nice-looking frog with a longish description.   "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "3",
  "title": "My Additional Section",
  "body": " My Additional Section  foo   The graph made by TikZ   A 5-cycle     bar  "
},
{
  "id": "figure-tikz-example-diagram",
  "level": "2",
  "url": "section-2.html#figure-tikz-example-diagram",
  "type": "Figure",
  "number": "3.1",
  "title": "",
  "body": " The graph made by TikZ   A 5-cycle    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
