let base = document.getElementById('neat');

class Manager {
    box = {x: 10, y: 10, w: 200, h: 200};
    window = {x: 110, y: 110, r: 60};
    dial = {x: 180, y: 40, r: 10};
    color = [100, 100, 100];
    chaos = 20;
}

class Machine extends Manager {
    //box = {x: 10, y: 10, w: 200, h: 200};
    //window = {x: 110, y: 110, r: 60};
    //dial = {x: 180, y: 40, r: 10};
    //color = [100, 100, 100];
    //chaos = 20;

    constructor(mainX, box, window, dial, color, chaos) {
        super(box, window, dial, color, chaos);
        this.mainX = mainX;
        
        //Randomize variables
        this.box.w = this.box.w + (Math.random() * this.chaos) - (this.chaos/2);
        this.box.h = this.box.h + (Math.random() * this.chaos) - (this.chaos/2);
        this.window.x = this.window.x + (Math.random() * this.chaos) - (this.chaos/2) + this.mainX;
        this.window.y = this.window.y + (Math.random() * this.chaos) - (this.chaos/2);
        this.window.r = this.window.r + (Math.random() * this.chaos) - (this.chaos/2);
        this.dial.x = this.dial.x + (Math.random() * this.chaos) - (this.chaos/2) + this.mainX;
        this.dial.y = this.dial.y + (Math.random() * this.chaos) - (this.chaos/2);
        this.dial.r = this.dial.r + (Math.random() * this.chaos) - (this.chaos/2);

        //Generate Shapes
        let machineEl = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        machineEl.setAttribute("fill", `rgb(${this.color[0]},${this.color[1]},${this.color[2]})`);
        console.log(`rgb(${this.color[0]},${this.color[1]},${this.color[2]})`);
        machineEl.setAttribute("x", this.box.x + this.mainX);
        machineEl.setAttribute("y", this.box.y);
        machineEl.setAttribute("width", this.box.w);
        machineEl.setAttribute("height", this.box.h);
        base.appendChild(machineEl);

        let windowEl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        windowEl.setAttribute("cx", this.window.x);
        windowEl.setAttribute("cy", this.window.y);
        windowEl.setAttribute("r", this.window.r);
        base.appendChild(windowEl);

        let dialEl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dialEl.setAttribute("cx", this.dial.x);
        dialEl.setAttribute("cy", this.dial.y);
        dialEl.setAttribute("r", this.dial.r);
        base.appendChild(dialEl);
    }
}

let machines = [];

for (let i = 0; i < 10; i++){
    machines[i] = new Machine(i*250);
}

