const CANVAS = document.getElementById('myCanvas')
const CTX = CANVAS.getContext('2d')
let radius = CANVAS.height / 2
CTX.translate(radius, radius)
radius = radius * .9
let grad

function startClock() {
	drawClock()
	setTime()
}

function drawClock() {
	
	//CIRCLE
	CTX.beginPath()
	CTX.arc(0, 0, radius, 0, 2 * Math.PI)
	CTX.fillStyle = '#daf6ff'
	CTX.fill()
	
	//OUTER
	grad = CTX.createRadialGradient(0, 0 ,radius * 0.97, 0, 0, radius * 1.03)
  grad.addColorStop(0, '#333')
  grad.addColorStop(0.5, 'white')
  grad.addColorStop(1, '#333')
  CTX.strokeStyle = grad
  CTX.lineWidth = radius*0.05
  CTX.stroke()
	
	//MIDDLE
	CTX.beginPath();
	CTX.arc(0, 0, radius * .05, 0, 2 * Math.PI)
	CTX.fillStyle = '#0a2e38'
	CTX.fill()
	
	//NUMBERS
	CTX.font = "26px 'ZCOOL QingKe HuangYou'"
	CTX.fillStyle = '#0a2e38'
	CTX.fillText('12', -7, -185)
	CTX.fillText('6', -7, 200)
	CTX.fillText('3', 185, 7)
	CTX.fillText('9', -200, 7)
	CTX.fillText('QUARTZ', -38, 140)
	
	CTX.font = "16px 'ZCOOL QingKe HuangYou'"
	CTX.fillStyle = '#0a2e38'
	CTX.fillText('1', 95, -160)
	CTX.fillText('2', 165, -90)
	CTX.fillText('4', 170, 95)
	CTX.fillText('5', 100, 170)
	CTX.fillText('7', -100, 170)
	CTX.fillText('8', -175, 100)
	CTX.fillText('10', -175, -90)
	CTX.fillText('11', -100, -160)
	
}

function setTime() {
	
	let timeNow = new Date();
	let hour = timeNow.getHours()
	let min = timeNow.getMinutes()
	let sec = timeNow.getSeconds()
	let day = timeNow.getDay();
	
	let weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday', 
		'Sunday']
	
	day = weekDays[day-1]
	showDay(day)
	
	//HOUR
	hour = hour % 12;
	hour = (hour * Math.PI / 6) + (min * Math.PI / (6*60)) + (sec * Math.PI / (360*60))
	drawHands(CTX, hour, radius * .5, radius * .07)
	
	//MIN
	min = (min * Math.PI/30) + (sec * Math.PI / (30*60))
	drawHands(CTX, min, radius * .8, radius * .05)
	
	//SEC
	sec = (sec * Math.PI / 30)
	drawHands(CTX, sec, radius * .9, radius * .02)
}

function drawHands(CTX, time, length, width) {
	
	CTX.beginPath()
  CTX.lineWidth = width
  CTX.lineCap = "round"
  CTX.moveTo(0,0)
  CTX.rotate(time)
  CTX.lineTo(0, -length)
  CTX.stroke()
	CTX.rotate(-time)
}

function showDay(day){
	//DAY
	CTX.font = "20px 'ZCOOL QingKe HuangYou'"
	CTX.fillStyle = 'red'
	CTX.fillText(day, 90, 3)
}
	
startClock()
setInterval(startClock, 1000)