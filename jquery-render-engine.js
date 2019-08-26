//  jquery-render-engine.js (v2)

//  jQuery rendering.

//  Every object that needs render has a coresponding "render dom element".
//  When the "render dom element" has class "render", it trigger the object 
//  "render" function.

    var bodySelector = "body";
    var rendersSelector = "#renders";
    $("body").append('<div class="hidden" id="renders"></div>');


//  Scene.

    var rendererSelector = "#renderer";
    $("#renders").append('<input type="hidden" id="renderer">');
    var $rendererElement = $(rendererSelector).get(0);

    $rendererElement.render = function(){ 
        renderer.render( scene, camera ); 
    };

    $(rendererSelector).addClass("render");


//  Water.

    var waterSelector = "#water";
    $(rendersSelector).append('<input type="hidden" id="water">');
    var $waterRenderElement = $(waterSelector).get(0);

    $waterRenderElement.render = function(){ 
        water.render(); 
    };

    $waterRenderElement.update = function(delta){ 
        water.material.uniforms.time.value += 2.0 / 60.0;
    };

//  $(waterSelector).addClass("render", "update");

