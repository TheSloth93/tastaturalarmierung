// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -             Check for jQuery
// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

if(typeof(jQuery) == 'undefined')
{
   throw new Error("LSS Tastaturalarmierung: missing jQuery");
}

// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -             Create local Storage
// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// - - - - - Enter - - - - -
if (localStorage.getItem("key_submit") === null) {
    setKey("key_submit", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':13});
}

// - - - - - Delete - - - - -
if (localStorage.getItem("key_delete") === null) {
    setKey("key_delete", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':8});
}

// - - - - - FHZ 1 - - - - -
if (localStorage.getItem("key_fhz1") === null) {
    setKey("key_fhz1", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':49});
}

// - - - - - FHZ 2 - - - - -
if (localStorage.getItem("key_fhz2") === null) {
    setKey("key_fhz2", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':50});
}

// - - - - - FHZ 3 - - - - -
if (localStorage.getItem("key_fhz3") === null) {
    setKey("key_fhz3", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':51});
}

// - - - - - FHZ 4 - - - - -
if (localStorage.getItem("key_fhz4") === null) {
    setKey("key_fhz4", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':52});
}

// - - - - - FHZ 5 - - - - -
if (localStorage.getItem("key_fhz5") === null) {
    setKey("key_fhz5", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':53});
}

// - - - - - FHZ 6 - - - - -
if (localStorage.getItem("key_fhz6") === null) {
    setKey("key_fhz6", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':54});
}

// - - - - - FHZ 7 - - - - -
if (localStorage.getItem("key_fhz7") === null) {
    setKey("key_fhz7", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':55});
}

// - - - - - FHZ 8 - - - - -
if (localStorage.getItem("key_fhz8") === null) {
    setKey("key_fhz8", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':56});
}

// - - - - - FHZ 9 - - - - -
if (localStorage.getItem("key_fhz9") === null) {
    setKey("key_fhz9", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':57});
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
html = html + '      <a id="key_set_submit" href="#" class="btn btn-success navbar-btn btn-sm" style="margin: 0; margin-left: 0px" title="Einstellungen">';
html = html + '         FHZ 1';
html = html + '      </a>';
html = html + '      <a id="key_set_fhz1" href="#" class="btn btn-success navbar-btn btn-sm" style="margin: 0; margin-left: 6px" title="Einstellungen">';
html = html + '         FHZ 1';
html = html + '      </a>';
html = html + '      <a id="key_set_fhz2" href="#" class="btn btn-success navbar-btn btn-sm" style="margin: 0; margin-left: 6px" title="Einstellungen">';
html = html + '         FHZ 2';
html = html + '      </a>';
html = html + '   </div>';
html = html + '   <div style="width: 100%; padding-bottom: 6px">';
html = html + '      <font style="font-size: 12px">by ChaosKai93 (build 2016-10-13-0040)</font><a href="https://github.com/ChaosKai/tastaturalarmierung" target="_blank" style="font-size: 12px; margin-left: 24px">GitHub Projekt</a>';
html = html + '   </div>';
html = html + '</div>';

$( "#mission-form" ).before(html);
$( "#search_vehicle" ).focus();

// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -             Main function
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
            $("#key_settings_button").removeClass("btn-success").addClass("btn-danger");
        }
        else
        {
            $("#key_settings").css("display", "none");
            $("#key_settings_button").removeClass("btn-danger").addClass("btn-success");
        }
    });
   
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             Set Keys
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
   
    var set_key_mode = false;
   
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // -             Key: Submit
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        $( "#key_set_submit" ).on( "click", function()
        {
            set_key_mode = "submit";
            $( "#search_vehicle" ).val("Drücke die Taste, die Du für diese Funktion belegen möchtest...");
            $( "#search_vehicle" ).focus();
        });
   
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // -             Update Table on Key Input
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    $( "#search_vehicle" ).on( "input", function() {
        updateTable();
    });
    
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             Key Action
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    
    $( "#search_vehicle" ).on( "keyup", function( event ) {
        
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // -             Key: Submit
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        if(!setKey_mode)
        {

            var table = $("#vehicle_show_table_body_all").length ? "#vehicle_show_table_body_all tr":"#vehicle_show_table_rett tr";

            // - - - - - Enter  - - - - -
            if(event.which == getKey("key_submit").key)
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
        }

    });
    
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             Key Action
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    $(document).on( "keyup", function( event )
    {
        if(set_key_mode != false)
        {
            console.log(event.altKey,event.ctrlKey,event.metaKey,event.key)
            setKey(set_key_mode, {'altKey':event.altKey,'ctrlKey':event.ctrlKey,'metaKey':event.metaKey,'key':event.key});

            $( "#search_vehicle" ).val("Die Taste wurde gespeichert!").delay(1500).val("");
           
            set_key_mode = false;
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

function setKey(key,value)
{
    localStorage.setItem(key,JSON.stringify(value));
}

function getKey(key)
{
    return JSON.parse(localStorage.getItem(key));
}
