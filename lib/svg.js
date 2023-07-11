class SVG {
    constructor() {
       this.shape = '';
       this.text = '';
    }
    setShape(shape) {
        this.shape = shape.render()
    }
}