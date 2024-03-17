let block = document.querySelectorAll('span')
let btn = document.querySelector('button')

let possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let count = 0
function giveValue() {
    block.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if (cell.innerHTML == "" && count % 2 == 0) {
                cell.innerHTML = "×"
                count++
                cell.style.color = "rgb(226, 223, 12)"
                cell.style.fontSize = "4.8em"
            } else if (cell.innerHTML == "" && count % 2 != 0) {
                cell.innerHTML = "〇"
                count++
                cell.style.color = "rgb(1, 212, 167)"
            } else {
                alert("This field is already occupied")
            }
            checkWinner(index, cell.innerHTML)
            // console.log(count);
        })
    });
}
giveValue()

btn.addEventListener('click', () => {
    reset()
})
function reset() {
    count = 0
    possibilities = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    block.forEach(e => {
        e.innerHTML = ""
    })
}

function checkWinner(index, content) {
    possibilities.forEach(arr => {
        arr.forEach((val, position) => {
            if (val == index) {
                arr[position] = content
                console.log("index : " + arr[position])
            }
        })

        let x = 0
        let o = 0

        for (let i = 0; i < arr.length; i++) {
            arr[i] == "×" ? x++ : arr[i] == "〇" ? o++ : ""
        }
        if (x == 3) {
            setTimeout(() => {
                alert('X wins')
                reset()
            }, 300)
        } else if (o == 3) {
            setTimeout(() => {
                alert('O wins')
                reset()
            }, 300)
        } else {
            console.log(arr)
        }
        // console.log("x : " + x + ", " + "o : " + o)
    })
    if(count == 9){
        setTimeout(() => {
            alert('Match Tie')
            reset()
            // console.log(count);
        }, 300)
    }
}

