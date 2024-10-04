window.Main = function () {
    window.location.href = 'Main.html'
}
const games = document.querySelector("#games")

function loadGame(name) {
    let link = 'games/' + name + '/game.html'
    window.location.href = link
}

for (const game of Array.from(games.children)) {
    game.addEventListener("click", function () {
        loadGame(game.getAttribute("data-name"))
    })
}