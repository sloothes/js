//  AW3D.db.js

(function(){

    const VERSION = 1;
    const DB_NAME = "AW3D";

    db = new zango.Db( DB_NAME, VERSION, {

        male:       true,
        female:     true,
        skeleton:   true,
        materials:  true,
        textures:   true,
        animations: true,

    });

    db.open(function(err, database){
        if (err) console.error(err);
    }).then( function(){
        debugMode && console.log( 
        "Database "+db.name+" (v"+db.version+") ready for use.");
    }).catch(function(err){
        console.error(err);
    });

})();

//  indexedDB helpers.js

function exportCollection( name ){

//  throws error if collection not exist!
    db.collection( name );  // important!

    db.collection(name).find()
    .toArray(function(err, docs){
        if (err) throw err;
        if ( !docs.length ) throw "collection " + name + " is empty";
    }).then(function(docs){ 
        return JSON.stringify(docs);
    }).then(function(data){ 
        debugMode && console.log( data );

    //  Save to desktop.
        var a = document.createElement("a");
        var file = new Blob([data], {type: "text/json"});
        a.href = URL.createObjectURL(file);
        a.download = name + "-" + db.name + "v" + db.version + ".json";
        a.click();

        return a.href;

    }).then(function(objectURL){

        URL.revokeObjectURL(objectURL);.

    }).catch(function(err){
        console.error(err);
    });

}

function exportDatabase(db){

    new Promise(function(resolve, reject){

        if ( !db._open ) throw "Database "+db.version+" is not open.";

        var json = {};

        var promises = [];

        for ( var name in db._cols ){

            promise.push( 
                db.collection(name).find()
                .toArray(function(err, docs){
                    if (err) throw err;
                }).then(function(docs){ 
                    if ( !docs.length ) return;
                    json[ name ] = docs;
                    debugMode && console.log(name+":", json[name] );
                }).catch(function(err){
                    console.error(err);
                })
            )

        }
        
        Promise.all(promises).then(function(){
            debugMode && console.log( "json:", json );
            resolve( JSON.stringify( json ) );
        });

    }).then(function(data){

        debugMode && console.log(data);

    //  Save to file.
        var a = document.createElement("a");
        var file = new Blob([data], {type: "text/json"});
        a.href = URL.createObjectURL(file);
        a.download = db.name + "v" + db.version + "-export.json";
        a.click();

        return a.href;

    }).then(function(objectURL){

        URL.revokeObjectURL(objectURL);

    }).catch(function(err){
        console.error(err);
    });

}


//  USER.db.js

/*
(function(){

    const VERSION = 4;
    const DB_NAME = "USER";

    UserDB = new zango.Db( DB_NAME, VERSION, {

        animations: true,
        outfits   : true,
        materials : true,
        textures  : true,
        products  : true,

    });

    UserDB.open(function(err, database){
        if (err) console.error(err);
    }).then( function(){
        debugMode && console.log(UserDB.name+" (v"+UserDB.version+") ready for use.");
    }).catch(function(err){
        console.error(err);
    });

})();

function exportUSERCollection( name ){

    UserDB.open(function(err, database){
        if (err) console.error(err);
    }).then( function(db){

        debugMode && console.log( 
        "Database "+db.name+" (v"+db.version+") ready for export.");

    //  throws error if collection not exist!
        db.collection( name );  // important!

        db.collection(name).find()
        .toArray(function(err, docs){
            if (err) throw err;
            if ( !docs.length ) throw "collection "+name+" is empty";
        }).then(function(docs){ 
            return JSON.stringify(docs);
        }).then(function(data){ 
            debugMode && console.log( data );

        //  Save to desktop.
            var a = document.createElement("a");
            var file = new Blob([data], {type: "text/json"});
            a.href = URL.createObjectURL(file);
            a.download = name + "-" + db.name + "v" + db.version + ".json";
            a.click();

            return a.href; // OK.

        }).then(function(objectURL){
            URL.revokeObjectURL(objectURL); // OK.

        }).catch(function(err){
            console.error(err);
        });

    }).catch(function(err){
        console.error(err);
    });

}
*/
