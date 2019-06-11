//  alerts.js (v2.1)

    function bootboxSuccessAlert( msg, callback ){
        var title   = [ '<h3 style="margin:0;display:inline;">Success!</h3>', '<div class="alert-icon icon-success"></div>' ].join("") ;
        var message = [ '<label class="alert-small">', msg, '</label>' ].join("") ;
        bootbox.alert({size:"small", title:title, message:message, className:"middle", backdrop:true, callback:callback});
    }

    function bootboxCancelAlert( msg, callback ){
        var title   = [ '<h3 style="margin:0;display:inline;">Alert!</h3>', '<div class="alert-icon icon-cancel"></div>' ].join("") ;
        var message = [ '<label class="alert-small">', msg, '</label>' ].join("") ;
        bootbox.alert({size:"small", title:title, message:message, className:"middle", callback:callback});
    }

    function bootboxWarningAlert( msg, callback ){
        var title   = [ '<h3 style="margin:0;display:inline;">Warning!</h3>', '<div class="alert-icon icon-warning"></div>' ].join("") ;
        var message = [ '<label class="alert-small">', msg, '</label>' ].join("") ;
        bootbox.alert({size:"small", title:title, message:message, className:"middle", callback:callback});
    }

    function bootboxErrorAlert( msg, callback ){
        var title   = [ '<h3 style="margin:0;display:inline;">Error!</h3>', '<div class="alert-icon icon-error"></div>' ].join("") ;
        var message = [ '<label class="alert-small">', msg, '</label>' ].join("") ;
        bootbox.alert({size:"small", title:title, message:message, className:"middle", callback:callback});
    }

    function bootboxInfoAlert( msg, callback ){
        var title   = [ '<h3 style="margin:0;display:inline;">Info!</h3>', '<div class="alert-icon icon-logo"></div>' ].join("") ;
        var message = [ '<label class="alert-small">', msg, '</label>' ].join("") ;
        bootbox.alert({size:"small", title:title, message:message, className:"middle", backdrop:true, callback:callback});
    }

    function bootboxBugAlert( msg, callback ){
        var title   = [ '<h3 style="margin:0;display:inline;">Bug!</h3>', '<div class="alert-icon icon-bug"></div>' ].join("") ;
        var message = [ '<label class="alert-small">', msg, '</label>' ].join("") ;
        bootbox.alert({size:"small", title:title, message:message, className:"middle", callback:callback});
    }

    function bootboxCountdownAlert( msg, callback ){
        var title   = [ '<h3 style="margin:0;display:inline;">Countdown!</h3>', '<div class="alert-icon icon-countdown"></div>' ].join("") ;
        var message = [ '<label class="alert-small">', msg, '</label>' ].join("") ;
        bootbox.alert({size:"small", title:title, message:message, className:"middle", callback:callback});
    }



//  alerts.js (v2.0)
/*
    function bootboxSuccessAlert( msg, callback ){
        var message = [ '<div class="alert-icon icon-success"></div>', '<label class="alert-small">', msg, '</label>' ].join("") ;
        bootbox.alert({size:"small", message:message, className:"middle", backdrop:true, callback:callback});
    }

    function bootboxCancelAlert( msg, callback ){
        var message = [ '<div class="alert-icon icon-cancel"></div>', '<label class="alert-small">', msg, '</label>' ].join("") ;
        bootbox.alert({size:"small", message:message, className:"middle", callback:callback});
    }

    function bootboxWarningAlert( msg, callback ){
        var message = [ '<div class="alert-icon icon-warning"></div>', '<label class="alert-small">', msg, '</label>' ].join("") ;
        bootbox.alert({size:"small", message:message, className:"middle", callback:callback});
    }

    function bootboxErrorAlert( msg, callback ){
        var message = [ '<div class="alert-icon icon-error"></div>', '<label class="alert-small">', msg, '</label>' ].join("") ;
        bootbox.alert({size:"small", message:message, className:"middle", callback:callback});
    }

    function bootboxInfoAlert( msg, callback ){
        var message = [ '<div class="alert-icon icon-logo"></div>', '<label class="alert-small">', msg, '</label>' ].join("") ;
        bootbox.alert({size:"small", message:message, className:"middle", backdrop:true, callback:callback});
    }

    function bootboxBugAlert( msg, callback ){
        var message = [ '<div class="alert-icon icon-bug"></div>', '<label class="alert-small">', msg, '</label>' ].join("") ;
        bootbox.alert({size:"small", message:message, className:"middle", callback:callback});
    }

    function bootboxCountdownAlert( msg, callback ){
        var message = [ '<div class="alert-icon icon-countdown"></div>', '<label class="alert-small">', msg, '</label>' ].join("") ;
        bootbox.alert({size:"small", message:message, className:"middle", callback:callback});
    }
*/
//  alerts.js (v1.0)
/*
    function bootboxSuccessAlert( msg ){
        var prefix = '<div class="alert-icon icon-success"></div><label class="alert-small">';
        var postfix = '</label>';
        var message =  [prefix, msg, postfix].join("") ;
        if (!bootbox) alert( msg );
        else bootbox.alert({size:"small", message: message});
    }

    function bootboxCancelAlert( msg ){
        var prefix = '<div class="alert-icon icon-cancel"></div><label class="alert-small">';
        var postfix = '</label>';
        var message =  [prefix, msg, postfix].join("") ;
        if (!bootbox) alert( msg );
        else bootbox.alert({size:"small", message: message});
    }

    function bootboxWarningAlert( msg ){
        var prefix = '<div class="alert-icon icon-warning"></div><label class="alert-small">';
        var postfix = '</label>';
        var message =  [prefix, msg, postfix].join("") ;
        if (!bootbox) alert( msg );
        else bootbox.alert({size:"small", message: message});
    }

    function bootboxErrorAlert( msg ){
        var prefix = '<div class="alert-icon icon-error"></div><label class="alert-small">';
        var postfix = '</label>';
        var message =  [prefix, msg, postfix].join("") ;
        if (!bootbox) alert( msg );
        else bootbox.alert({size:"small", message: message});
    }

    function bootboxInfoAlert( msg ){
        var prefix = '<div class="alert-icon icon-logo"></div><label class="alert-small">';
        var postfix = '</label>';
        var message =  [prefix, msg, postfix].join("") ;
        //if (!bootbox) alert( msg );
        else bootbox.alert({size:"small", message: message});
    }

    function bootboxBugAlert( msg ){
        var prefix = '<div class="alert-icon icon-bug"></div><label class="alert-small">';
        var postfix = '</label>';
        var message =  [prefix, msg, postfix].join("") ;
        if (!bootbox) alert( msg );
        else bootbox.alert({size:"small", message: message});
    }
*/
