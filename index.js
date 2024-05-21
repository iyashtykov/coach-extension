codioIDE.coachBot.register("name|id", showLevel1)
function showLevel1(data) {
  if (data === undefined)
     var data = await codioIDE.coachBot.input()
   }
   if (data == "lalala") {
    codioIDE.coachBot.showButton("Yay", onYay)
    codioIDE.coachBot.showButton("No", onNo)
   }
    codioIDE.coachBot.showButton("Help", () =>onHelp(data))   
}

function onHelp(data) {
    codioIDE.coachBot.showButton("react Help", onHelpReact)
    codioIDE.coachBot.showButton("js help", onHelpJs)
    codioIDE.coachBot.showButton("Back", () => {showLevel1 (data)})
}
