var mouse_event="empty";
var last_position_of_x, last_position_of_y;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color="black";
width_of_line=1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("line-width").value;

    mouse_event="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
   current_position_of_x = e.clientX - canvas.offsetLeft;
   current_position_of_y = e.clientY - canvas.offsetTop;
   
   if(mouse_event="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width_of_line;

   console.log("Last position of x and y cordinates-");
   console.log("X- "+last_position_of_x+"Y- "+last_position_of_y);
   ctx.moveTo(last_position_of_x, last_position_of_y);

   console.log("Current position of x and y cordinates-");
   console.log("X- "+current_position_of_x+"Y- "+current_position_of_y);
   ctx.lineTo(current_position_of_x, current_position_of_y);
   ctx.stroke();
   }
   last_position_of_x=current_position_of_x;
   last_position_of_y=current_position_of_y;
   
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}

