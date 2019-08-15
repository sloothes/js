//  animationsLoader.js

    var Animations       = {}; // object.
    var MaleAnimations   = {}; // object.
    var FemaleAnimations = {}; // object.

//  Load animations (from indexedDB).

    Promise.all([

        db.collection("animations")
        .findOne({_id:"basic"}, function(err){
            if (err) throw err;
        }).then(function(json){

            delete json._id; // important!

            for (var name in json){
                Animations[name] = json[name];
            }

            if ( !!localPlayer && !!localPlayer.outfit ) {
                localPlayer.outfit.AnimationsHandler.refresh();
            }

            debugMode && console.log({"Animations":Animations});

        }).catch(function(err){
            console.error(err);
        }),

        db.collection("animations")
        .findOne({_id:"male"}, function(err){
            if (err) throw err;
        }).then(function(json){

            delete json._id; // important!

            for (var name in json){
                MaleAnimations[name] = json[name];
            }

            if ( !!localPlayer && !!localPlayer.outfit ) {
                localPlayer.outfit.AnimationsHandler.refresh();
            }

            debugMode && console.log({"MaleAnimations":MaleAnimations});

        }).catch(function(err){
            console.error(err);
        }),

        db.collection("animations")
        .findOne({_id:"female"}, function(err){
            if (err) throw err;
        }).then(function(json){

            delete json._id; // important!

            for (var name in json){
                FemaleAnimations[name] = json[name];
            }

            if ( !!localPlayer && !!localPlayer.outfit ) {
                localPlayer.outfit.AnimationsHandler.refresh();
            }

            debugMode && console.log({"FemaleAnimations":FemaleAnimations});

        }).catch(function(err){
            console.error(err);
        }),

    ]);


    function fetchAnimation(options){

        var url = options.url;
        var key = options.key;
        var name = options.name;
        var object = options.obj;

        fetch(url).then(function(response){
            return response.json();
        }).then(function(json){

            object[ name ] = json;

            if ( !!localPlayer && !!localPlayer.outfit ) {
                localPlayer.outfit.AnimationsHandler.refresh();
            }

        });

    }
