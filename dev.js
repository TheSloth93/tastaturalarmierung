var shiftPressed = false;
var shiftTimeout = null;

if(typeof(jQuery) == 'undefined')
{
   throw new Error("LSS Tastaturalarmierung: missing jQuery");
}

// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -             Create HTML Code
// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

var html = '';
html = html + '<div style="width: 100%; padding-bottom: 24px">';
html = html + '   <div style="width: 100%; padding-bottom: 6px">';
html = html + '      <h4>Tastaturalarmierung</h4>';
html = html + '   </div>';
html = html + '   <div style="width: 100%; display: flex; padding-bottom: 6px">';
html = html + '      <input class="string form-control" id="search_vehicle" size="50" type="text">';
html = html + '      <a id="key_settings_button" href="#" class="btn btn-success navbar-btn btn-sm" style="width: 64px; margin: 0; margin-left: 6px" title="Einstellungen">';
html = html + '         <span class="glyphicon glyphicon-cog" style="font-size: 16px; margin-top: 2px"></span>';
html = html + '      </a>';
html = html + '   </div>';
html = html + '   <div id="key_settings" style="width: 100%; display: none; padding-top: 12px; padding-bottom: 12px">';
html = html + '      <a href="#" class="btn btn-success navbar-btn btn-sm" style="margin: 0; margin-right: 0px" title="Einstellungen">';
html = html + '         FHZ 1';
html = html + '      </a>';
html = html + '      <a href="#" class="btn btn-success navbar-btn btn-sm" style="margin: 0; margin-right: 6px" title="Einstellungen">';
html = html + '         FHZ 2';
html = html + '      </a>';
html = html + '   </div>';
html = html + '   <div style="width: 100%; padding-bottom: 6px">';
html = html + '      <font style="font-size: 12px">by ChaosKai93 (build 2016-10-12-2249)</font><a href="https://github.com/ChaosKai/tastaturalarmierung" target="_blank" style="font-size: 12px; margin-left: 24px">GitHub Projekt</a>';
html = html + '   </div>';
html = html + '</div>';

$( "#mission-form" ).before(html);
$( "#search_vehicle" ).focus();

// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -             Create HTML Code
// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

$(function(){
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // -             Key Buttons Show/Hide
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    $( "#key_settings_button" ).on( "click", function()
    {
        if( $("#key_settings").css("display") == "none" )
        {
            $("#key_settings").css("display", "flex");
            $("#key_settings_button").removeClass("btn-success").addClass("btn-error");
        }
        else
        {
            $("#key_settings").css("display", "none");
            $("#key_settings_button").removeClass("btn-error").addClass("btn-success");
        }
    });
   
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // -             Update Table on Key Input
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    $( "#search_vehicle" ).on( "input", function() {
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
