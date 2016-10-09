var shiftPressed = false;
var shiftTimeout = null;

if(typeof(jQuery) == 'undefined')
{
   throw new Error("LSS Tastaturalarmierung: missing jQuery");
}

$( "#mission-form" ).before('<div style="width: 100%; padding-bottom: 24px"><input class="string form-control" id="search_vehicle" size="50" type="text" style="margin-bottom: 6px"><br><font style="font-size: 12px">Tastaturalarmierung by ChaosKai93</font></div>');
$( "#search_vehicle" ).focus();

$(function(){
    $( "#search_vehicle" ).on("input", function() {
        updateTable();
    });
    
    $( "#search_vehicle" ).on( "keyup", function( event ) {
        
        var table = $("#vehicle_show_table_body_all").length ? "#vehicle_show_table_body_all tr":"#vehicle_show_table_rett tr";
        
        // - - - - - Enter  - - - - -
        if(event.which == 13)
        {
            if($( "#search_vehicle" ).val() != "")
            {
                $( table + ":visible" ).each(function() {
                    $( this ).find("input").attr('checked', true);
                });

                $( "#search_vehicle" ).val("");
            }
            else
            {
                $( "#mission-form" ).submit();
            }
        }
        
        // - - - - - Shift  - - - - -
        if(event.which == 16)
        {
            shiftPressed = true;
            clearTimeout(shiftTimeout);
            shiftTimeout = setTimeout(function(){ shiftPressed = false;; }, 2000);
        }

        // - - - - - Ergebnis 1  - - - - -
        if(event.which == 49)
        {
            $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
            
            updateTable();
            
            if($( table + ":visible" ).eq(0).find("input").attr('checked') == "checked")
            {
                $( table + ":visible" ).eq(0).find("input").attr('checked', false);
            }
            else
            {
                $( table + ":visible" ).eq(0).find("input").attr('checked', true);
            }
            
            $( "#search_vehicle" ).val("");
        }

        // - - - - - Ergebnis 2  - - - - -
        if(event.which == 50)
        {
            $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
            
            updateTable();
            
            if($( table + ":visible" ).eq(1).find("input").attr('checked') == "checked")
            {
                $( table + ":visible" ).eq(1).find("input").attr('checked', false);
            }
            else
            {
                $( table + ":visible" ).eq(1).find("input").attr('checked', true);
            }
            
            $( "#search_vehicle" ).val("");
        }

        // - - - - - Ergebnis 3  - - - - -
        if(event.which == 51)
        {
            $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
            
            updateTable();
            
            if($( table + ":visible" ).eq(2).find("input").attr('checked') == "checked")
            {
                $( table + ":visible" ).eq(2).find("input").attr('checked', false);
            }
            else
            {
                $( table + ":visible" ).eq(2).find("input").attr('checked', true);
            }
            
            $( "#search_vehicle" ).val("");
        }
        
    });
}());

function updateTable()
{
    var table = $("#vehicle_show_table_body_all").length ? "#vehicle_show_table_body_all tr":"#vehicle_show_table_rett tr";
        
    $( table ).each(function() {

        if( $( this ).find("label").text().toLowerCase().indexOf( $( "#search_vehicle" ).val().toLowerCase() ) >= 0 )
        {
            // Found it
            $( this ).css("display", "table-row");
        }
        else
        {
            // Not Found
            $( this ).css("display", "none");
        }

        if( $( "#search_vehicle" ).val().length == 0 )
        {
            $( this ).css("display", "table-row");
        }

    });
}
