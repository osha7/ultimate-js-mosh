
function Stopwatch() { 
    let startTime, endTime, duration = 0; 
    let running = false; 
    
    this.start = function() { 
        if (running) throw new Error('Stopwatch has already started');
        running = true; 
        startTime = new Date();  
    }

    this.stop = function() {
        if (!running) throw new Error('Stopwatch had already stopped');
        running = false;
        endTime = new Date();
        duration = (endTime - startTime) / 1000;
    }  
    
    this.reset = function() {
        startTime = 0;
        endTime = 0;
        duration = 0;
        running = false;
    }

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
};


// --------Change above to Prototype Members----------------------------------
// --------The below is not valid, PREMATURE OPTIMIZATION
// --------breaks the rules of abstraction trying to optimize, should just use the above


let startTime2, endTime2, duration2 = 0; 
let running2 = false; 

function Stopwatch2() { 
    Object.defineProperty(this, 'duration', {
        get: function() { return duration2; }
    })
}

Stopwatch2.prototype.start = function() { 
    if (running2) throw new Error('Stopwatch has already started');
    running2 = true; 
    startTime2 = new Date();  
}

Stopwatch2.prototype.stop = function() {
    if (!running2) throw new Error('Stopwatch had already stopped');
    running2 = false;
    endTime2 = new Date();
    duration2 = (endTime2 - startTime2) / 1000;
}  

Stopwatch2.prototype.reset = function() {
    startTime2 = 0;
    endTime2 = 0;
    duration2 = 0;
    running2 = false;
}