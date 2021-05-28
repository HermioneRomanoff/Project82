var mouseEvent="empty";
canvas=document.getElementById("myCanvas");
ctx=cavas.getContext("2d");
canvas.addEventListner("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}
canvas.addEventListner("mousedown",my_mousedown);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown")
    {
        console.log("Current position of x and y =");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc=(current_position_of_mouse_x , current_position_of_mouse_y , radius , 0 , 2*Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListner("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";
}
canvas.addEventListner("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
function  ClearArea();
{
    ctx.clearRect(0 , 0 , ctx.canvas.width , ctx.canvas.height);
}