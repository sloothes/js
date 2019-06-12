//  skinnedMeshLoader.js

    var bones, 
        skeleton;

    var male = {
        body:null,
        eyes:null,
        hairs:null,
        underwears:null,
        costume:null,
        tshirt:null,
        trousers:null,
        shoes:null,
    };

    var female = {
        body:null,
        eyes:null,
        hairs:null,
        stockings:null,
        underwears:null,
        dress:null,
        costume:null,
        tshirt:null,
        trousers:null,
        shoes:null,
    };


    function loadSkinnedFrom(json){

        var loader = new THREE.JSONLoader();
        var object = loader.parse( json );

        var geometry = object.geometry;
        var material = new THREE.MeshStandardMaterial({skinning:true});

        geometry.computeFaceNormals();
        geometry.computeVertexNormals();
        geometry.computeBoundingBox();
        geometry.computeBoundingSphere();

        var skinned =  new THREE.SkinnedMesh( geometry, material );

        skinned.renderDepth = 1;
        skinned.frustumCulled = false; // important!
        skinned.scale.set( 1, 1, 1 );
        skinned.position.set( 0, 0, 0 );
        skinned.rotation.set( 0, 0, 0 ); 

        return skinned;
    }


//  Cache skinned meshes (from indexedDB).

    Promise.all([

    //  BONES.

        db.collection("skeleton")
        .findOne({_id:"bones"}, function(err, doc){
            if (err) throw err;
        }).then(function(json){
            bones = json;
            debugMode && console.log({"bones": bones})
        }).catch(function(err){
            console.error(err);
        }),

    //  MALE.

        db.collection("male").find()
        .toArray(function(err, docs){
            if (err) throw err;
        }).then(function(docs){
            docs.forEach(function(json){
                male[json._id] = loadSkinnedFrom(json);
            });
            debugMode && console.log({"male": male})
        }).catch(function(err){
            console.error(err);
        }),

    //  FEMALE.

        db.collection("female").find()
        .toArray(function(err, docs){
            if (err) throw err;
        }).then(function(docs){
            docs.forEach(function(json){
                female[json._id] = loadSkinnedFrom(json);
            });
            debugMode && console.log({"female": female})
        }).catch(function(err){
            console.error(err);
        }),

    //  SKELETON.

        db.collection("skeleton")
        .findOne({_id:"skeleton"}, function(err, doc){
            if (err) throw err;
        }).then(function(json){
            skeleton = loadSkinnedFrom(json);
            debugMode && console.log({"skeleton": skeleton})
        }).catch(function(err){
            console.error(err);
        }),

    ]).then(function(){

    //  Start up.
        localPlayerHandler( "/turn/back" );
        localPlayerHandler( store("Sex") || "/gender/male" );

    }).catch(function(err){
        console.error(err);
    });
