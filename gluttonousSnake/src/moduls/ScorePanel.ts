class ScorePanel{
    score: number = 0
    level: number = 1

    scoreEle: HTMLElement
    levelEle: HTMLElement
    maxLevel: number
    upScore: number

    constructor(maxLevel: number = 10, upScore: number = 10){
        this.scoreEle = document.querySelector('.score')!
        this.levelEle = document.querySelector('.level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    //定义加分方法
    addScore(){
        this.scoreEle.innerText = ++this.score + ''
        if(this.score % this.upScore ===  0){
            this.levelUp()
        }
    }
    //定义提升等级的方法
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
} 

export default ScorePanel