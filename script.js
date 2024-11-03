(function() {

    var scene = document.getElementsByClassName('scene')[0];
    var canvas = document.getElementsByClassName('canvas')[0];
    var glass = document.getElementsByClassName('glass')[0];
  
    try {
      document.createEvent("TouchEvent");
      scene.addEventListener('touchmove', onTouchMove);
    } catch (e) {
      scene.addEventListener('mousemove', onMouseMove);
    }
  
    function onTouchMove(event) {
      event.preventDefault();
  
      var x = event.touches[0].pageX;
      var y = event.touches[0].pageY;
  
      updateRotation(x, y);
    }
  
    function onMouseMove(event) {
      var x = event.x;
      var y = event.y;
  
      updateRotation(x, y);
    }
  
    function updateRotation(x, y) {
      var yAxisRotation = (x - (window.innerWidth / 2)) * (80 / window.innerWidth);
      var xAxisRotation = (y - (window.innerHeight / 2)) * (-80 / window.innerHeight);
  
      var transformations = [
        'translate(-50%, -50%)',
        'rotateY(' + yAxisRotation + 'deg)',
        'rotateX(' + xAxisRotation + 'deg)'
      ];
  
      glass.style.backgroundPosition = (500 - yAxisRotation * 5 + 'px ') + (xAxisRotation * 5 + 'px');
      canvas.style.transform = transformations.join(' ');
    };
  
  })();