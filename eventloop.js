// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// new timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // check 1: any pending setTimeout, setInterval, setImmediate?
  // check 2: any pending OS tasks? e.g. server listening to a port
  // check 3: any pending long running operations? e.g. `fs` module
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

// entire body executes in one `tick`
while(shouldContinue()) {
  // 1. Node looks at pendingTimers & see if any functions are ready to be called. setTimeout, setInterval
  
  // 2. Node looks at pendingOSTasks & pendingOperations & calls relevant callbacks

  // 3. Pause execution. Continue when...
  //   - a new pendingOSTask is done
  //   - a new pendingOperation is done
  //   - a timer is about to complete

  // 4. Look at pendingTimers. Call any setImmediate

  // 5. Handly any 'close' event
}


// exit back to terminal
