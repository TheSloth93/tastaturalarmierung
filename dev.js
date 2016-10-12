var shiftPressed = false;
var shiftTimeout = null;

if(typeof(jQuery) == 'undefined')
{
   throw new Error("LSS Tastaturalarmierung: missing jQuery");
}

$( "#mission-form" ).before('
    <div style="width: 100%; padding-bottom: 24px">
      <div style="width: 100%; padding-bottom: 6px">
         <h4>Tastaturalarmierung</h4>
      </div>
      <div style="width: 100%; padding-bottom: 6px">
         <input class="string form-control" id="search_vehicle" size="50" type="text" style="margin-bottom: 6px">
         <a href="#" class="btn btn-success navbar-btn btn-sm" title="Einstellungen">
            <span class="glyphicon glyphicon-settings"></span>
         </a>
      </div>
      <div style="width: 100%; padding-bottom: 6px">
         <font style="font-size: 12px">by ChaosKai93 (build 2016-10-12-2140)</font><a href="https://github.com/ChaosKai/tastaturalarmierung" target="_blank" style="font-size: 12px; margin-left: 24px">GitHub Projekt</a>
      </div>
    </div>');
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
        
        // - - - - - Delete  - - - - -
        if(event.which == 8)
        {
            $( "#search_vehicle" ).val(""); updateTable();
        }

        // - - - - - Ergebnis 1  - - - - -
        if(event.which == 49)
        {
            $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
            
            updateTable();
            
            if($( table + ":visible" ).eq(0).find("input").prop('checked') == "checked")
            {
                $( table + ":visible" ).eq(0).find("input").prop('checked', false);
            }
            else
            {
                $( table + ":visible" ).eq(0).find("input").prop('checked', true);
            }
            
            $( "#search_vehicle" ).val(""); updateTable();
        }

        // - - - - - Ergebnis 2  - - - - -
        if(event.which == 50)
        {
            $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
            
            updateTable();
            
            if($( table + ":visible" ).eq(1).find("input").prop('checked') == "checked")
            {
                $( table + ":visible" ).eq(1).find("input").prop('checked', false);
            }
            else
            {
                $( table + ":visible" ).eq(1).find("input").prop('checked', true);
            }
            
            $( "#search_vehicle" ).val(""); updateTable();
        }

        // - - - - - Ergebnis 3  - - - - -
        if(event.which == 51)
        {
            $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
            
            updateTable();
            
            if($( table + ":visible" ).eq(2).find("input").prop('checked') == "checked")
            {
                $( table + ":visible" ).eq(2).find("input").prop('checked', false);
            }
            else
            {
                $( table + ":visible" ).eq(2).find("input").prop('checked', true);
            }
            
            $( "#search_vehicle" ).val(""); updateTable();
        }

        // - - - - - Ergebnis 4  - - - - -
        if(event.which == 52)
        {
            $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
            
            updateTable();
            
            if($( table + ":visible" ).eq(3).find("input").prop('checked') == "checked")
            {
                $( table + ":visible" ).eq(3).find("input").prop('checked', false);
            }
            else
            {
                $( table + ":visible" ).eq(3).find("input").prop('checked', true);
            }
            
            $( "#search_vehicle" ).val(""); updateTable();
        }

        // - - - - - Ergebnis 5  - - - - -
        if(event.which == 53)
        {
            $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
            
            updateTable();
            
            if($( table + ":visible" ).eq(4).find("input").prop('checked') == "checked")
            {
                $( table + ":visible" ).eq(4).find("input").prop('checked', false);
            }
            else
            {
                $( table + ":visible" ).eq(4).find("input").prop('checked', true);
            }
            
            $( "#search_vehicle" ).val(""); updateTable();
        }

        // - - - - - Ergebnis 6  - - - - -
        if(event.which == 54)
        {
            $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
            
            updateTable();
            
            if($( table + ":visible" ).eq(5).find("input").prop('checked') == "checked")
            {
                $( table + ":visible" ).eq(5).find("input").prop('checked', false);
            }
            else
            {
                $( table + ":visible" ).eq(5).find("input").prop('checked', true);
            }
            
            $( "#search_vehicle" ).val(""); updateTable();
        }

        // - - - - - Ergebnis 7  - - - - -
        if(event.which == 55)
        {
            $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
            
            updateTable();
            
            if($( table + ":visible" ).eq(6).find("input").prop('checked') == "checked")
            {
                $( table + ":visible" ).eq(6).find("input").prop('checked', false);
            }
            else
            {
                $( table + ":visible" ).eq(6).find("input").prop('checked', true);
            }
            
            $( "#search_vehicle" ).val(""); updateTable();
        }

        // - - - - - Ergebnis 8  - - - - -
        if(event.which == 56)
        {
            $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
            
            updateTable();
            
            if($( table + ":visible" ).eq(7).find("input").prop('checked') == "checked")
            {
                $( table + ":visible" ).eq(7).find("input").prop('checked', false);
            }
            else
            {
                $( table + ":visible" ).eq(7).find("input").prop('checked', true);
            }
            
            $( "#search_vehicle" ).val(""); updateTable();
        }

        // - - - - - Ergebnis 9  - - - - -
        if(event.which == 57)
        {
            $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
            
            updateTable();
            
            if($( table + ":visible" ).eq(8).find("input").prop('checked') == "checked")
            {
                $( table + ":visible" ).eq(8).find("input").prop('checked', false);
            }
            else
            {
                $( table + ":visible" ).eq(8).find("input").prop('checked', true);
            }
            
            $( "#search_vehicle" ).val(""); updateTable();
        }
        
    });
}());

function updateTable()
{
    var table = $("#vehicle_show_table_body_all").length ? "#vehicle_show_table_body_all tr":"#vehicle_show_table_rett tr";
        
    $( table ).each(function() {

        if( $( this ).find("label").text().toLowerCase().indexOf( $( "#search_vehicle" ).val().toLowerCase() ) >= 0 )
        {
            // Found vehicle name
            $( this ).css("display", "table-row");
        }
        else if( $( this ).find("a").text().toLowerCase().indexOf( $( "#search_vehicle" ).val().toLowerCase() ) >= 0 )
        {
            // Found station name
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
