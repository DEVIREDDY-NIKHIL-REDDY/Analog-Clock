const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

var cx = canvas.width / 2;
var cy = canvas.height / 2;



function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    var d = new Date();

    document.getElementById("time").innerHTML = d.toLocaleTimeString();

    console.log(d);

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    // set line stroke and line width



    //id = setInterval(seconds, 1000);

    var x2, y2;

    


    seconds();
    minutes();
    hours();



    function seconds() {
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 1;

        angle=((Math.PI * 2) * (s / 60)) - ((Math.PI * 2) / 4)

        ctx.beginPath();
        ctx.moveTo(cx, cy);

        x2 = cx + 200 * Math.cos(angle);
        y2 = cy + 200 * Math.sin(angle);
        ctx.lineTo(x2, y2);
        ctx.stroke();


    }

    function minutes() {
        
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;

        angle = ((Math.PI * 2) * (m / 60)) - ((Math.PI * 2) / 4);

        ctx.beginPath();
        ctx.moveTo(cx, cy);

        x2 = cx + 150 * Math.cos(angle);
        y2 = cy + 150 * Math.sin(angle);
        ctx.lineTo(x2, y2);
        ctx.stroke();


    }

    function hours() {


        angle = ((Math.PI * 2) * ((h * 5 + (m / 60) * 5) / 60)) - ((Math.PI * 2) / 4);

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.moveTo(cx, cy);

        x2 = cx + 100 * Math.cos(angle);
        y2 = cy + 100 * Math.sin(angle);
        ctx.lineTo(x2, y2);
        ctx.stroke();


    }


}
function main() {

    setInterval(draw, 1000)
}
main();
		//draw();
