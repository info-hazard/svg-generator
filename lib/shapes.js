class Shape{
// Creates a Shape class which sets the color, text, textcolor
    constructor(color,text,textcolor){
        this.color = color
        this.text = text
        this.textcolor = textcolor
    }
}

// Creates a Circle class that extends the Shape Class and renders an SVG with the chosen color
class Circle extends Shape{
    render(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
}

// Creates a Square class that extends the Shape Class and renders an SVG with the chosen color
class Square extends Shape{
    render(){
        return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" x="15" y="15" fill="${this.color}"/><text x="150" y="175" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
}

// Creates a Triangle class that extends the Shape Class and renders an SVG with the chosen color
class Triangle extends Shape{
    render(){
        return `<svg width="500" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="250,60 100,400 400,400" class"triangle" fill="${this.color}"/><text x="250" y="300" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
};

module.exports = {Circle, Square, Triangle}