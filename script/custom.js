						//we'll use a window.onload for simplicity, but typically it is best to use either jQuery's $(document).ready() or $(window).load() or cross-browser event listeners so that you're not limited to one.
						//wobblefunktion fuer kreis und kreisteile einzeln
						window.onload = function() {
							TweenMax.to("#outline", 3, {scale:0.95, svgOrigin:"250 650", ease:Cubic.easeInOut, repeat:-1, yoyo:true});
							TweenMax.to("#firstthird", 1, {scale:1.05, delay:0.33, svgOrigin:"250 650", ease:Sine.easeInOut, repeat:-1, yoyo:true});
							TweenMax.to("#secondthird", 1, {scale:1.05, delay:0.66, svgOrigin:"250 650", ease:Sine.easeInOut, repeat:-1, yoyo:true});
							TweenMax.to("#thirdthird", 1, {scale:"+=0.05", svgOrigin:"250 650", ease:Sine.easeInOut, repeat:-1, yoyo:true});
						}
						//funktion um Kreis der Maus folgen zu lassen und link richtig zu gestalten
						window.onmousemove = function(event) {
								var wrapper = document.getElementById("menu");
								//variblen fuer Zentrum des svgs, einfach nur linke obere ecke auswgewaehlt weil das css translate nicht miteinbezogen wird
								let centerX = wrapper.offsetLeft;
								let centerY = wrapper.offsetTop;
								//a,b sind mausposition relativ zu wrappermitte; r berechnet daraus den winkel
								var a = event.pageX - centerX;
								var b = event.pageY - centerY;
								var r = Math.atan2(b, a) * 180 / Math.PI;
								//variable in log ausgeben
								document.getElementById("log").innerHTML = r;
								//funktion mit der die animation zur maus definiert wird
								TweenMax.to("#outline", 0.3, {rotation:r+"_short", svgOrigin:"250 650"});
								//link aendern der ausgeloest wird
								if (-90 < r && r < 30) {
										document.getElementById('background').setAttribute('href', 'sites/work/');
										document.getElementById("work").style.textDecoration = "underline";
										document.getElementById("blog").style.textDecoration = "none";
										document.getElementById("about").style.textDecoration = "none";
								}
								else if (r > 30 && r < 160) {
										document.getElementById('background').setAttribute('href', '#posts');
										document.getElementById("work").style.textDecoration = "none";
										document.getElementById("blog").style.textDecoration = "underline";
										document.getElementById("about").style.textDecoration = "none";
								}
								else {
										document.getElementById('background').setAttribute('href', 'sites/about/');
										document.getElementById("work").style.textDecoration = "none";
										document.getElementById("blog").style.textDecoration = "none";
										document.getElementById("about").style.textDecoration = "underline";
								}


					}