//-----------------------VALUES-------------------------
var size = 51;











//-------------------------CODE------------------------
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

class henk
{
  constructor()
  {
    this.bool = false;
    this.x = arguments[0];
    this.y = arguments[1];
    this.scale = arguments[2];
  }
  checkHenk()
  {
    let temp = 0;
    let grid = arguments[0];
    for(var x = this.x - 1; x < this.x + 2; x++)
    {
      for(var y = this.y - 1; y < this.y + 2; y++)
      {
        if(grid.array[(x+grid.size)%grid.size][(y+grid.size)%grid.size].bool && (x != this.x || y != this.y))
        {
          temp++;
        }
      }
    }
    return temp;
  }
  draw()
  {
    if(this.bool)
    {
      context.fillStyle = "#00ff00";
    }
    else
    {
      context.fillStyle = "#ff0000";
    }
    context.beginPath();
    context.lineWidth = 1;
    context.moveTo(this.x*canvas.width/this.scale,this.y*canvas.height/this.scale);
    context.lineTo((this.x+1)*canvas.width/this.scale-1,this.y*canvas.height/this.scale);
    context.lineTo((this.x+1)*canvas.width/this.scale-1,(this.y+1)*canvas.height/this.scale-1);
    context.lineTo(this.x*canvas.width/this.scale,(this.y+1)*canvas.height/this.scale-1);
    context.lineTo(this.x*canvas.width/this.scale,this.y*canvas.height/this.scale);
    context.stroke();
    context.fill();
    context.fillStyle = "#000000";
    context.font = "10px Arial";
    this.neighbors = this.checkHenk(jan)
    context.fillText(this.neighbors,this.x*canvas.width/this.scale,(this.y+1)*canvas.height/this.scale-1);
    context.closePath();
  }
  click()
  {

  }
}

class henkTown
{
  constructor()
  {
    this.size = arguments[0];
    this.array = new Array(this.size);
    for (var x = 0; x < this.array.length; x++)
    {
      this.array[x] = new Array(this.size);
      for (var y = 0; y < this.array.length; y++)
      {
        this.array[x][y] = new henk(x,y,this.size);
        if(arguments[1])
        {
          let temp = arguments[1].array[x][y].checkHenk(dirk);
          if((temp == 2 && arguments[1].array[x][y].bool == true) || temp == 3)
          {
            this.array[x][y].bool = true;
          }
        }
      }
    }
  }
  draw()
  {
    for (var x = 0; x < this.array.length; x++)
    {
      for(var y = 0; y < this.array[x].length; y++)
      {
        this.array[x][y].draw();
      }
    }

  }
}




var dirk = new henkTown(size);
var jan = new henkTown(size, dirk);
//dirk.array[6][6].bool = true;
jan.draw();

console.log(dirk);


function click(event)
{
  var mousx = event.clientX-canvas.getBoundingClientRect().left;
  var mousy = event.clientY-canvas.getBoundingClientRect().top;
  if(jan.array[Math.floor(mousx/canvas.width*jan.size)][Math.floor(mousy/canvas.width*jan.size)].bool)
  {
    jan.array[Math.floor(mousx/canvas.width*jan.size)][Math.floor(mousy/canvas.width*jan.size)].bool = false;
  }
  else
  {
    jan.array[Math.floor(mousx/canvas.width*jan.size)][Math.floor(mousy/canvas.width*jan.size)].bool = true;
  }
  jan.draw();
}

canvas.onmousedown = click;


function update()
{
  dirk = jan;
  jan = new henkTown(size, dirk);
  jan.draw();
}

var button = document.getElementById("button");

  var started = false;

function start()
{
  if(started)
  {
    button.innerHTML = "start";
    clearInterval(interval);
    started = false;
  }
  else
  {
    button.innerHTML = "stop";
    started = true;
    interval = setInterval(update, 300);
  }
}

var interval;
button.onmousedown = start;
