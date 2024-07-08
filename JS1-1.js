//랜덤번호 지정

let computernumber = 0
let playbutton = document.getElementById("play-button")
let userinput = document.getElementById("user-input")
let resultarea = document.getElementById("result-area")
let resetbutton = document.getElementById("reset-button")
let chances = 5
let gameover = false
let chancearea =  document.getElementById("chance-area")
let history = []

playbutton.addEventListener("click" ,play)
resetbutton.addEventListener("click" ,reset)
userinput.addEventListener("focus" ,function() {
    userinput.value=""
})

function pickrandomnum(){
    computernumber = Math.floor(Math.random() * 100)+1
    console.log("정답", computernumber)
}

function play() {
    let uservalue = userinput.value

    if(uservalue<1 || uservalue>100){
        resultarea.textContent="1과 100사이 숫자를 입력해 주세요"
        return
    }
    if(history.includes(uservalue)){
        resultarea.textContent="이미 입력한 숫자입니다 다른 숫자를 입력해 주세요"
        return
    }
    chances --
    chancearea.textContent = `남은기회:${chances}번`
    console.log("chance" ,chances)
    
    if(uservalue < computernumber){
        resultarea.textContent = "UP!!!!!"
    }
    else if(uservalue > computernumber){
        resultarea.textContent = "DOWN!!!!!"
    }else {
        resultarea.textContent = "맞혔습니다!!!"
        gameover=true
    }

    history.push(uservalue)
    console.log(history)

    if(chances < 1) {
        gameover=true
    }

    if (gameover == true) {
        playbutton.disabled = true
    }
}

function reset() {
    // user input창이 깨끗하게 정리되고
    userinput.value = ""
    //새로운 번호 생성
    pickrandomnum()

     // 초기화
     chances = 5
     gameover = false
     history = []
 
     // UI 초기화
     resultarea.textContent = "랜덤으로 나오는 숫자를 맞춰서 인생 대박을 노리세요!"
     chancearea.textContent = `남은기회:${chances}번`
     playbutton.disabled = false
}

pickrandomnum()