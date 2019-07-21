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
        `Database ${db.name} (v${db.version}) ready for use.`);
    }).catch(function(err){
        console.error(err);
    });

})();

//  USER.db.js

(function(){

    const VERSION = 3;
    const DB_NAME = "USER";

    UserDB = new zango.Db( DB_NAME, VERSION, {

        outfits   : true,
        textures  : true,
        materials : true,
        animations: true,
        products:   true,

    });

    UserDB.open(function(err, database){
        if (err) console.error(err);
    }).then( function(){
        debugMode && console.log( 
        `Database ${UserDB.name} (v${UserDB.version}) ready for use.`);
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
        if ( !docs.length )  
            throw `collection ${name} is empty`;
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

}

function exportDatabase(db){

    (async function(db){

        if ( !db._open ) {
            throw `Database ${db.name} is not open.`;
        }

        var json = {};

        for ( var name in db._cols ){

            await db.collection(name).find()
            .toArray(function(err, docs){
                if (err) throw err;
            }).then(function(docs){ 
                if ( !docs.length ) return;
                json[ name ] = docs;
                debugMode && console.log( `${name}:`, json[name] );
            }).catch(function(err){
                console.error(err);
            });

        }

        debugMode && console.log( "json:", json );

        return JSON.stringify( json );

    })(db).then(function(data){

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

function exportUSERCollection( name ){

//  throws error if collection not exist!
    UserDB.collection( name );  // important!

    UserDB.collection(name).find()
    .toArray(function(err, docs){
        if (err) throw err;
        if ( !docs.length )  
            throw `collection ${name} is empty`;
    }).then(function(docs){ 
        return JSON.stringify(docs);
    }).then(function(data){ 
        debugMode && console.log( data );

    //  Save to desktop.
        var a = document.createElement("a");
        var file = new Blob([data], {type: "text/json"});
        a.href = URL.createObjectURL(file);
        a.download = name + "-" + UserDB.name + "v" + UserDB.version + ".json";
        a.click();

        return a.href; // OK.

    }).then(function(objectURL){
        URL.revokeObjectURL(objectURL); // OK.

    }).catch(function(err){
        console.error(err);
    });

}

