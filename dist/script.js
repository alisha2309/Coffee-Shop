function dochange()
{
  alert("Added Successfully !!!!");
}

function change()
{
  var divEle1=document.getElementById("div1");
  var divEle2=document.getElementById("div2");
  divEle1.className="but1";
  divEle2.className="but2";
}

function change1()
{
  var canvas1=document.getElementById("d1");
  canvas1.style.backgroundColor="lime";
  
}
function change2()
{
  var canvas2=document.getElementById("d1");
  canvas2.style.backgroundColor="yellow";
  var context=canvas2.getContext("2d");
   context.fillStyle="red";
  context.fillRect(10,20,70,40);
    context.fillRect(90,20,70,40);
context.fillStyle="black";
  context.font="40px Arial";
  context.fillText("See You", 10,50);
}
function change3()
{
  var canvas3=document.getElementById("d1");
  var colorinput=document.getElementById("clr");

  var color=colorinput.value;
  canvas3.style.backgroundColor=color;
}

function dosquare(){
  var canvas4=document.getElementById("d1");
  var sizeinput=document.getElementById("sldr");
  var size=sizeinput.value;
  var context=canvas4.getContext("2d");
 context.clearRect(0,0,d1.width,d1.height);
  context.fillStyle="blue";
  context.fillRect(10,10,size,size);
}
// function upload()
// {
//   var imgcan=document.getElementById("can");
//   var fileinput=document.getElementById("up");

//   var image=new SimpleImage(fileinput);
//   image.drawTo(imgcan);
// }
// function save()
// {
//   alert("saved!!");
// }