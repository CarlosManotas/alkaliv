$(function(){

	var viewPort = $(window).width();
	var viewport_width = window.innerWidth;
	var viewport_height = window.innerHeight;

	// detectar navegadores //
	var es_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	var es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	var es_opera = navigator.userAgent.toLowerCase().indexOf('opera');
	var es_ie = navigator.userAgent.indexOf("MSIE") > -1 ;
	// detectar navegadores fin //


	//detectar navegacion movil//

	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};
	//detectar navegacion movil fin//


	if (isMobile.any()) {
		$(".btn-llamar").append('<a href="tel:+541137231948"><button class="icon-telefono espacio btn-gracias">LLAMANOS!</button></a>');
		//$("#formValid").removeAttr("action");
		//$("#formValid").attr("action","formPhone.php");
	}

	var bajando = $(".chicos");
	var cambiar = $(".ruleta");
	var recuadros = $(".contenedor--pasos");
	if (es_firefox) {
		cambiar.css({
			background: "green",
			borderRadius: "50%",
			clip: "rect(0px, 220px, 220px, 0px)"
		});	
		recuadros.children().removeClass("contenedor--pasos--box");
		recuadros.children().addClass("contenedor--pasos--zilla");
		var viewport_width = window.innerWidth;
		if(viewport_width >= 1400) {
			bajando.css({
				backgroundSize: "23%"
			});
		}
			

	}


	$(window).on("scroll", function(){
		var pantalla = $(window).scrollTop();
		var productos = $(".contenedor--productos").offset().top - 200;
		var producto2 = $(".contenedor--productos").offset().top;
		if (pantalla >= productos || pantalla >= producto2) {
			$(".info--img").css({
				zIndex : 1,
				opacity : 1,
				border : "3px " + "solid " +"#f26522"
			});
		}
	});
	$(window).on("scroll", parallax(-.02));

	function parallax(multiplicador) {
		var bajando = $(".chicos");
		$(window).on("scroll", function(){
			var pantalla = $(window).scrollTop();
			bajando.css({
				backgroundPosition: "left " + (pantalla * multiplicador) + "%"
			});
		});
	}
	
	function recalcular () {
		var viewport_width = window.innerWidth;
		var viewport_height = window.innerHeight;
		$('.container--img').height((viewport_height)) ;
		$(window).resize(function() {
	  		var viewport_width = window.innerWidth;
	  		var viewport_height = window.innerHeight;
			$('.container--img').height((viewport_height));
		});
	}

	function recalculando () {
		var viewport_width = window.innerWidth;
		var viewport_height = window.innerHeight / 1.15;
		$('.container--img').height((viewport_height)) ;
		$(window).resize(function() {
	  		var viewport_width = window.innerWidth;
	  		var viewport_height = window.innerHeight / 1.15;
			$('.container--img').height((viewport_height));
		});
	}

			
	function contador() {

		$('.contador').each(function() {
	  		var $this = $(this),
	      	countTo = $this.attr('data-count');
	      	
	  		$({ countNum: $this.text()}).animate({
	    		countNum: countTo
	  			},
	  			{
	    		duration: 1000,
	    		easing:'linear',
	    		step: function() {
	      			$this.text(Math.floor(this.countNum));
	    		},
	    		complete: function() {
	      			$this.text(this.countNum);
	      			//alert('finished');
	    		}

	  		});
 
		});
	}

	


 $("#acordeon").on("click", "h2", function(){
      var t  = $(this);
      var tp = t.next();
      var p  = t.siblings("h2").next();
      var h  = t.siblings("h2");
      var tMas = t.children(".plus");
      var tMenos = t.siblings("h2").children(".plus");
      tp.slideToggle();
      t.css({background:"#f5f5f5", color: "#000"});
      tMas.toggleClass("plusMas");
      tMenos.removeClass("plusMas");
      h.css({background:"transparent", color:"#808284"});
      p.slideUp();
  });
	
});
