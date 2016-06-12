
// as of now, the rover does not fall out of the grid
// however, haven't used the grid to implement this..


/* this might be another way to create a two-dimensional array

function Create2DArray(rows) {
  var arr = [];
  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }
  return arr;
}

var array = Create2DArray(10)
*/

var array = [ [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
                                    ]; 

var myRover = {
  position: [0,0], 
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
    };
    if (rover.position[0] < 0) {
    rover.position[0] += 10 
    }
   if (rover.position[1] < 0) {
    rover.position[1] += 10 
    }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  };
   if (rover.position[0] < 0) {
    rover.position[0] += 10 
    }
   if (rover.position[1] < 0) {
    rover.position[1] += 10 
    }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'N'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'W':
      rover.direction = 'S'
      break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function command(string) {
  var arrayCommand = string.split("");

  for (var i = 0; i < arrayCommand.length; i++) {
    if (arrayCommand[i] == 'f') {
      goForward(myRover);
    }

    else if (arrayCommand[i] == 'b') {
      goBackward(myRover);
    }

    else if (arrayCommand[i] == 'l') {
      turnLeft(myRover);
    }

    else if (arrayCommand[i] == 'r') {
      turnRight(myRover);
    }
  }
}


console.log(myRover.direction)
console.log(myRover.position)
command('b')











