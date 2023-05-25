import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl{
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    moveDir: string = ''
    isLive: boolean = true

    constructor(){
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
    }

    //游戏初始化
    init(){
        //绑定键盘按键事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    //键盘事件
    keydownHandler(event: KeyboardEvent){
        this.moveDir = event.key
    }

    //蛇移动
    run(){
        let X: number = this.snake.X
        let Y: number = this.snake.Y
        switch(this.moveDir){
            case "ArrowUp":
            case "UP":
                Y -= 10
                break
            case "ArrowDown":
            case "Down":
                Y += 10
                break
            case "ArrowLeft":
            case "Left":
                X -= 10
                break
            case "ArrowRight":
            case "Right":
                X += 10
                break
        }

        //检查蛇是否吃到食物
        this.checkEat(X, Y)

        try {
            this.snake.X = X
            this.snake.Y = Y 
        } catch (err) {
            alert((err as Error).message + '! GAME OVER!')
            this.isLive = false
        }
        this.isLive && setTimeout(this.run.bind(this), 200 - (this.scorePanel.level - 1) * 30)
    }

    //检查吃到食物
    checkEat(X: number, Y: number){
        if(X === this.food.X && Y === this.food.Y){
            this.food.randomPos()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl