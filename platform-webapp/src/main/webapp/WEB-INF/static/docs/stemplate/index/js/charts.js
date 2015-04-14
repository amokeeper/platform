// JavaScript Document
        $(function() {  
		   $(".knob").knob({
                    /*change : function (value) {
                     //console.log("change : " + value);
                     },
                     release : function (value) {
                     console.log("release : " + value);
                     },
                     cancel : function () {
                     console.log("cancel : " + this.value);
                     },*/
                    draw: function() {

                        // "tron" case
                        if (this.$.data('skin') == 'tron') {

                            var a = this.angle(this.cv)  // Angle
                                    , sa = this.startAngle          // Previous start angle
                                    , sat = this.startAngle         // Start angle
                                    , ea                            // Previous end angle
                                    , eat = sat + a                 // End angle
                                    , r = true;

                            this.g.lineWidth = this.lineWidth;

                            this.o.cursor
                                    && (sat = eat - 0.3)
                                    && (eat = eat + 0.3);

                            if (this.o.displayPrevious) {
                                ea = this.startAngle + this.angle(this.value);
                                this.o.cursor
                                        && (sa = ea - 0.3)
                                        && (ea = ea + 0.3);
                                this.g.beginPath();
                                this.g.strokeStyle = this.previousColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });
                /* END JQUERY KNOB */

                //INITIALIZE SPARKLINE CHARTS
               
$(".sparkline1").sparkline([5,6,7,9,9,5,3,2,2,4,6,7], {
    type: 'line',
    width: '100%',
    height: '50',
    lineColor: '#fdfdfd',
    fillColor: 'rgba(255,255,255,.6)',
    spotColor: '#ffffff',
    minSpotColor: '#ffffff',
    maxSpotColor: '#ffffff',
    highlightSpotColor: '#ffffff',
    highlightLineColor: '#ffffff'});
                /* SPARKLINE DOCUMENTAION EXAMPLES http://omnipotent.net/jquery.sparkline/#s-about */
              
          
$(".sparkline2").sparkline('html', {
    type: 'bar',
    height: '50',
    barWidth: '5',
	barSpacing:'2',
    barColor: 'rgba(255,255,255,.6)',
    negBarColor: 'rgba(255,255,255,.6)'});
	
	$(".sparkline3").sparkline('html', {
    type: 'discrete',
    height: '50',
    lineColor: 'rgba(255,255,255,.6)'});
	
$(".sparkline4").sparkline('html', {
    type: 'bar',
    height: '50',
    barWidth: '5',
	barSpacing:'2',
    barColor: 'rgba(255,255,255,.6)',
    negBarColor: 'rgba(255,255,255,.6)'});
	
$(".sparkline5").sparkline('html', {
    type: 'line',
    width: '100%',
    height: '50',
    lineColor: '#fdfdfd',
    fillColor: 'rgba(255,255,255,0)',
    spotColor: '#ffffff',
    minSpotColor: '#ffffff',
    maxSpotColor: '#ffffff',
    highlightSpotColor: '#ffffff',
    highlightLineColor: '#ffffff'});
	
	
	  });