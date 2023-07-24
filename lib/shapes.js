class Shape{
// Creates a Shape class which sets the color

    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}
// Creates a Circle class that extends the Shape Class and renders an SVG with the chosen color
class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}
// Creates a Square class that extends the Shape Class and renders an SVG with the chosen color
class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }
}
// Creates a Triangle class that extends the Shape Class and renders an SVG with the chosen color
class Triangle extends Shape{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    }
};

module.exports = {Circle, Square, Triangle}