// JavaScript Document

function buildgallery() {
captions = window["project_gallery_" + arraynumber];
imgtype = captions[0];
imagecount=1;
document.getElementById("imagegallery").innerHTML="<div id='project_img'><a style='cursor:e-resize;' onclick='next_image()'><img src='1."+imgtype+"' class='project_image'></a></div><div id='caption'></div><div id='numbering'></div><a style='cursor:pointer;' onclick='prev_image()'>&larr;</a>&nbsp;&nbsp;&nbsp; <a style='cursor:pointer;' onclick='next_image()'>&rarr;</a><br />";
document.getElementById("caption").innerHTML=captions[imagecount];
document.getElementById("numbering").innerHTML=imagecount+" / "+(captions.length-1);
}
function next_image() {
imagecount=imagecount+1;
if (imagecount > captions.length-1) {
imagecount=1;
}
document.getElementById("project_img").innerHTML="<a style='cursor:e-resize;' onclick='next_image()'><img src='"+imagecount+"."+imgtype+"' class='project_image'></a>";
document.getElementById("caption").innerHTML=captions[imagecount];
document.getElementById("numbering").innerHTML=imagecount+" / "+(captions.length-1);
}
function prev_image() {
imagecount=imagecount-1;
if (imagecount < 1) {
imagecount=captions.length-1;
}
document.getElementById("project_img").innerHTML="<a style='cursor:e-resize;' onclick='next_image()'><img src='"+imagecount+"."+imgtype+"' class='project_image'></a>";
document.getElementById("caption").innerHTML=captions[imagecount];
document.getElementById("numbering").innerHTML=imagecount+" / "+(captions.length-1);
}
function prev_work(p) {
if (p > projectdisplay) {
p = 0;
}
window.open("../"+projectdata[p]["path"]+"/index.html", "_self");
}
function next_work(p) {
if (p < 0) {
p = projectdisplay;
}
window.open("../"+projectdata[p]["path"]+"/index.html", "_self");
} 