class Food{
    element: HTMLElement
    constructor(){
        this.element = document.getElementById('food')!
    }

    //定义获取食物x坐标的方法
    get X(){
        return this.element.offsetLeft
    }
    //定义获取食物y坐标的方法
    get Y(){
        return this.element.offsetTop 
    }
    //随机生成食物位置的方法
    randomPos(){
        let left: number = Math.round(Math.random() * 29) * 10
        let top: number = Math.round(Math.random() * 29) * 10
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

export default Food