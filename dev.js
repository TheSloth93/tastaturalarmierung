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

// - - - - - Submit - - - - -
if (localStorage.getItem("key_submit") === null) {
    setKeyStorage("key_submit", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':13});
}

// - - - - - Select All - - - - -
if (localStorage.getItem("key_select_all") === null) {
    setKeyStorage("key_submit", {'altKey':false,'ctrlKey':true,'metaKey':false,'key':13});
}

// - - - - - Delete - - - - -
if (localStorage.getItem("key_delete") === null) {
    setKeyStorage("key_delete", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':8});
}

// - - - - - FHZ 1 - - - - -
if (localStorage.getItem("key_fhz1") === null) {
    setKeyStorage("key_fhz1", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':49});
}

// - - - - - FHZ 2 - - - - -
if (localStorage.getItem("key_fhz2") === null) {
    setKeyStorage("key_fhz2", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':50});
}

// - - - - - FHZ 3 - - - - -
if (localStorage.getItem("key_fhz3") === null) {
    setKeyStorage("key_fhz3", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':51});
}

// - - - - - FHZ 4 - - - - -
if (localStorage.getItem("key_fhz4") === null) {
    setKeyStorage("key_fhz4", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':52});
}

// - - - - - FHZ 5 - - - - -
if (localStorage.getItem("key_fhz5") === null) {
    setKeyStorage("key_fhz5", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':53});
}

// - - - - - FHZ 6 - - - - -
if (localStorage.getItem("key_fhz6") === null) {
    setKeyStorage("key_fhz6", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':54});
}

// - - - - - FHZ 7 - - - - -
if (localStorage.getItem("key_fhz7") === null) {
    setKeyStorage("key_fhz7", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':55});
}

// - - - - - FHZ 8 - - - - -
if (localStorage.getItem("key_fhz8") === null) {
    setKeyStorage("key_fhz8", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':56});
}

// - - - - - FHZ 9 - - - - -
if (localStorage.getItem("key_fhz9") === null) {
    setKeyStorage("key_fhz9", {'altKey':false,'ctrlKey':false,'metaKey':false,'key':57});
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
html = html + '      <table id="key_settings_table" class="table table-striped tablesorter tablesorter-default">';
html = html + '         <tbody>';
html = html + '            <tr>';
html = html + '               <td style="text-align: left"><font style="font-weight: 700">Alarmieren</font></td>';
html = html + '               <td style="text-align: right">';
html = html + '                  <a href="#" class="btn btn-success navbar-btn btn-sm" style="margin: 0" onclick="setKey(' + "'submit'" + ')">Taste belegen</a>';
html = html + '                  <a href="#" class="btn btn-danger navbar-btn btn-sm" style="margin: 0" onclick="delKey(' + "'submit'" + ')">Belegung löschen</a>';
html = html + '               </td>';
html = html + '            </tr>';
html = html + '            <tr>';
html = html + '               <td style="text-align: left"><font style="font-weight: 700">Eingabe löschen</font></td>';
html = html + '               <td style="text-align: right">';
html = html + '                  <a href="#" class="btn btn-success navbar-btn btn-sm" style="margin: 0" onclick="setKey(' + "'delete'" + ')">Taste belegen</a>';
html = html + '                  <a href="#" class="btn btn-danger navbar-btn btn-sm" style="margin: 0" onclick="delKey(' + "'delete'" + ')">Belegung löschen</a>';
html = html + '               </td>';
html = html + '            </tr>';
html = html + '         </tbody>';
html = html + '      </table>';
html = html + '   </div>';
html = html + '   <div style="width: 100%; padding-bottom: 6px">';
html = html + '      <font style="font-size: 12px">by ChaosKai93 (build 2016-10-13-0148)</font><a href="https://github.com/ChaosKai/tastaturalarmierung" target="_blank" style="font-size: 12px; margin-left: 24px">GitHub Projekt</a>';
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
        if(!set_key_mode)
        {

            var table = $("#vehicle_show_table_body_all").length ? "#vehicle_show_table_body_all tr":"#vehicle_show_table_rett tr";

            // - - - - - Enter  - - - - -
            if(event.altKey == getKeyStorage("key_submit").altKey && event.ctrlKey == getKeyStorage("key_submit").ctrlKey && event.metaKey == getKeyStorage("key_submit").metaKey && event.which == getKeyStorage("key_submit").key)
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
        else
        {
            // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
            // -
            // -             Save pressed Key
            // -
            // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
            
            console.log(event.altKey,event.ctrlKey,event.metaKey,event.key)
            setKey(set_key_mode, {'altKey':event.altKey,'ctrlKey':event.ctrlKey,'metaKey':event.metaKey,'key':event.key});

            $( "#search_vehicle" ).val("Die Taste wurde gespeichert!");
            window.setTimeout(function() { $('#search_vehicle').val("") }, 1500);
           
            set_key_mode = false;
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

// - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// -
// -             Key Functions
// -
// - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

var set_key_mode = false;

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // -             set Key (call from button)
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function setKey(key)
    {
        set_key_mode = "key_" + key;
        $( "#search_vehicle" ).val("Drücke die Taste, die Du für diese Funktion belegen möchtest...");
        $( "#search_vehicle" ).focus();
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // -             delete Key (call from button)
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function delKey(key)
    {
        set_key_mode = false;
        setKeyStorage("key_" + key, {'altKey':false,'ctrlKey':false,'metaKey':false,'key':false});
        $( "#search_vehicle" ).val("Die Taste '" + key + "' wurde gelöscht!");
        window.setTimeout(function() { $('#search_vehicle').val("") }, 1500);
    }

    function setKeyStorage(key,value)
    {
        localStorage.setItem(key,JSON.stringify(value));
    }

    function getKeyStorage(key)
    {
        return JSON.parse(localStorage.getItem(key));
    }
