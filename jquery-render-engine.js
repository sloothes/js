//  jquery-render-engine.js (v2.0.1)

//  jQuery rendering.

//  Every object that needs render has a coresponding "render dom element".
//  When the "render dom element" has class "render", it trigger the object 
//  "render" function.

    const bodySelector = "body";
    const waterSelector = "#water";
    const rendersSelector = "#renders";
    const rendererSelector = "#renderer";

    $("body").append('<div class="hidden" id="renders"></div>');
    $("#renders").append('<input type="hidden" id="water">');
    $("#renders").append('<input type="hidden" id="renderer">');

    const $rendererElement = $("#renderer").get(0);
    const $waterRenderElement = $("#water").get(0);

//  Scene.


    $rendererElement.render = function(){ 
        renderer.render( scene, camera ); 
    };

    $(rendererSelector).addClass("render");


//  Water.


    $waterRenderElement.render = function(){ 
        water.render(); 
    };

    $waterRenderElement.update = function(delta){ 
        water.material.uniforms.time.value += 2.0 / 60.0;
    };

//  $(waterSelector).addClass("render update");

