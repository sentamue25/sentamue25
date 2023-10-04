var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var eyes = rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255));
var mouth = rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(255, 10));
var eyeSize = randomNumber(20, 75);
var antenna = randomNumber(10, 30);
var nose = rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255));
var ears = rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255));
background("cyan");
fill("gray");
rect(100, 100, 270, 200);
fill("lightblue");
line(126, 37, 152, 101);
line(210, 37, 200, 101);
line(300, 37, 252, 101);
line(390, 37, 280, 101);
ellipse(128, 40, antenna, antenna);
ellipse(213, 40, antenna, antenna);
ellipse(300, 40, antenna, antenna);
ellipse(385, 40, antenna, antenna);
fill(rgb(eyes, eyes, eyes));
arc(150, 150, eyeSize, eyeSize, randomNumber(1, 70), randomNumber(300, 370));
arc(250, 150, eyeSize, eyeSize, randomNumber(1, 70), randomNumber(300, 370));
arc(350, 150, eyeSize, eyeSize, randomNumber(1, 70), randomNumber(280, 370));
fill(rgb(mouth, mouth, mouth));
rect(125, 238, 150, 30);
fill(rgb(nose, nose, nose));
regularPolygon(200, 200, 5, 25);
fill(rgb(ears, ears, ears));
regularPolygon(370, 100, 7, 20);
regularPolygon(100, 100, 7, 20);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
