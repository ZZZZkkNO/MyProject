class Snake{
    head: HTMLElement
    bodies: HTMLCollection
    element: HTMLElement

    constructor(){
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement
        this.bodies = this.element.getElementsByTagName('div')
        
    }
    //获取X坐标
    get X(){
        return this.head.offsetLeft
    }
    //获取Y坐标
    get Y(){
        return this.head.offsetTop
    }
    //设置X坐标
    set X (value: number){
        if(this.X === value){
            return
        }
        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了')
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            if(value > this.X){
                value = this.X - 10
            }else{
                value = this.X + 10
            }
        }
        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkHeadBody()
    }
    //设置Y坐标
    set Y (value: number){
        if(this.Y === value){
            return
        }
        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了')
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(value > this.Y){
                value = this.Y - 10
            }else{
                value = this.Y + 10
            }
        }

        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkHeadBody()
    }

    //增长蛇身
    addBody(){
        let div = document.createElement('div')
        this.element.append(div)
    }

    //移动身体
    moveBody(){
        for(let i = this.bodies.length - 1; i > 0; i--){
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }   
    }

    //头和身体接触
    checkHeadBody(){
        for(let i = 1; i < this.bodies.length; i++){
            if(this.X === (this.bodies[i] as HTMLElement).offsetLeft && this.Y === (this.bodies[i] as HTMLElement).offsetTop){
                throw new Error('与蛇身相撞！')
            }
        }
    }
}

export default Snake