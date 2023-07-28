const {Circle, Square, Triangle} = require("./shapes")

describe('Circle', () => {
    test('renders Circle', () => {
      const shape = new Circle("red","nft","black");
      expect(shape.render()).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`);
    });
  });

  describe('Square', () => {
    test('renders Square', () => {
      const shape = new Square("white","lol","blue");
      expect(shape.render()).toEqual(`<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" x="15" y="15" fill="${this.color}"/><text x="150" y="175" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`);
    });
  });

  describe('Triangle', () => {
    test('renders Triangle', () => {
      const shape = new Triangle("purple","trs","white");
      expect(shape.render()).toEqual(`<svg width="500" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="250,60 100,400 400,400" class"triangle" fill="${this.color}"/><text x="250" y="300" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`);
    });
  });