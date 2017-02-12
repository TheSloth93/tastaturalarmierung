
// # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// #
// #
// #             set variables
// #
// #
// # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##

    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             setKey helper
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

        var set_key_mode  =  false;
        var set_key_name  =  "";

        var ctrl_pressed  =  false;
        var alt_pressed   =  false;
        var shift_pressed =  false;

    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             keyCode translation
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

        keyCodeToChar = {  
            8:"Backspace",
            9:"Tab",
            13:"Enter",
            16:"Shift",
            17:"Ctrl",
            18:"Alt",
            19:"Pause/Break",
            20:"Caps Lock",
            27:"Esc",
            32:"Space",
            33:"Page Up",
            34:"Page Down",
            35:"End",
            36:"Home",
            37:"Left",
            38:"Up",
            39:"Right",
            40:"Down",
            45:"Insert",
            46:"Delete",
            48:"0",
            49:"1",
            50:"2",
            51:"3",
            52:"4",
            53:"5",
            54:"6",
            55:"7",
            56:"8",
            57:"9",
            65:"A",
            66:"B",
            67:"C",
            68:"D",
            69:"E",
            70:"F",
            71:"G",
            72:"H",
            73:"I",
            74:"J",
            75:"K",
            76:"L",
            77:"M",
            78:"N",
            79:"O",
            80:"P",
            81:"Q",
            82:"R",
            83:"S",
            84:"T",
            85:"U",
            86:"V",
            87:"W",
            88:"X",
            89:"Y",
            90:"Z",
            91:"Windows",
            93:"Right Click",
            96:"Numpad 0",
            97:"Numpad 1",
            98:"Numpad 2",
            99:"Numpad 3",
            100:"Numpad 4",
            101:"Numpad 5",
            102:"Numpad 6",
            103:"Numpad 7",
            104:"Numpad 8",
            105:"Numpad 9",
            106:"Numpad *",
            107:"Numpad +",
            109:"Numpad -",
            110:"Numpad .",
            111:"Numpad /",
            112:"F1",
            113:"F2",
            114:"F3",
            115:"F4",
            116:"F5",
            117:"F6",
            118:"F7",
            119:"F8",
            120:"F9",
            121:"F10",
            122:"F11",
            123:"F12",
            144:"Num Lock",
            145:"Scroll Lock",
            182:"My Computer",
            183:"My Calculator",
            186:";",
            187:"=",
            188:",",
            189:"-",
            190:".",
            191:"/",
            192:"`",
            219:"[",
            220:"\\",
            221:"]",
            222:"'"
        };

    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             default key settings
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    
        var key_settings = {
            "submit":
            {
                "name":         "Alarmieren",
                "description":  "Alarmiert die ausgewählten Fahrzeuge",
                "key":          13,
                "ctrl":         false,
                "alt":          false,
                "shift":        false
            },
            "delete":
            {
                "name":         "Suchfeld leeren",
                "description":  "Das Eingabefeld zur Suche leeren",
                "key":          8,
                "ctrl":         false,
                "alt":          false,
                "shift":        false
            },
            "select_more":
            {
                "name":         "Nächstes Fahrzeug markieren",
                "description":  "Das nächste freie Fahrzeuzg markieren",
                "key":          107,
                "ctrl":         false,
                "alt":          false,
                "shift":        false
            },
            "select_less":
            {
                "name":         "Letztes Fahrzeug demarkieren",
                "description":  "Entfernt das letzte markierte Fahrzeug in der Liste",
                "key":          109,
                "ctrl":         false,
                "alt":          false,
                "shift":        false
            },
            "select_all":
            {
                "name":         "Alle markieren",
                "description":  "Alle sichtbaren Fahrzeuge markieren",
                "key":          106,
                "ctrl":         false,
                "alt":          false,
                "shift":        false
            },
            "vehicle_1":
            {
                "name":         "Fahrzeug 1 markieren",
                "description":  "Das 1. sichtbare Fahrzeug markieren",
                "key":          49,
                "ctrl":         true,
                "alt":          false,
                "shift":        false
            },
            "vehicle_2":
            {
                "name":         "Fahrzeug 2 markieren",
                "description":  "Das 2. sichtbare Fahrzeug markieren",
                "key":          50,
                "ctrl":         true,
                "alt":          false,
                "shift":        false
            },
            "vehicle_3":
            {
                "name":         "Fahrzeug 3 markieren",
                "description":  "Das 3. sichtbare Fahrzeug markieren",
                "key":          51,
                "ctrl":         true,
                "alt":          false,
                "shift":        false
            },
            "vehicle_4":
            {
                "name":         "Fahrzeug 4 markieren",
                "description":  "Das 4. sichtbare Fahrzeug markieren",
                "key":          52,
                "ctrl":         true,
                "alt":          false,
                "shift":        false
            },
            "vehicle_5":
            {
                "name":         "Fahrzeug 5 markieren",
                "description":  "Das 5. sichtbare Fahrzeug markieren",
                "key":          53,
                "ctrl":         true,
                "alt":          false,
                "shift":        false
            },
            "vehicle_6":
            {
                "name":         "Fahrzeug 6 markieren",
                "description":  "Das 6. sichtbare Fahrzeug markieren",
                "key":          54,
                "ctrl":         true,
                "alt":          false,
                "shift":        false
            },
            "vehicle_7":
            {
                "name":         "Fahrzeug 7 markieren",
                "description":  "Das 7. sichtbare Fahrzeug markieren",
                "key":          55,
                "ctrl":         true,
                "alt":          false,
                "shift":        false
            },
            "vehicle_8":
            {
                "name":         "Fahrzeug 8 markieren",
                "description":  "Das 8. sichtbare Fahrzeug markieren",
                "key":          56,
                "ctrl":         true,
                "alt":          false,
                "shift":        false
            },
            "vehicle_9":
            {
                "name":         "Fahrzeug 9 markieren",
                "description":  "Das 9. sichtbare Fahrzeug markieren",
                "key":          57,
                "ctrl":         true,
                "alt":          false,
                "shift":        false
            }
        };

    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             Check jQuery
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

        if(typeof(jQuery) == 'undefined')
        {
           throw new Error("LSS Tastaturalarmierung: missing jQuery");
        }



// # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// #
// #
// #             Create HTML Code
// #
// #
// # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##

    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             Build Modal
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

        function buildModal()
        {
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            // -             Generate HTML
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            var modal = '';
            modal = modal + '<section id="keyboard_alert_modal" style="width: 100%; height: 100%; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 50; background: rgba(255,255,255,0.8); display: none">';
            modal = modal + '   <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column">';
            modal = modal + '   </div>';
            modal = modal + '<section>';

            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            // -             Write HTML to Browser
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            $( "body" ).prepend(modal);
        }


    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             Build Main Container
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

        function buildMainContainer()
        {
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            // -             Generate HTML
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            var main = '';
            main = main + '<div id="keyboard_alert_main" style="width: 100%; padding-bottom: 16px">';
            main = main + '   <div style="width: 100%; padding-bottom: 6px">';
            main = main + '      <h4>Tastaturalarmierung</h4>';
            main = main + '   </div>';
            main = main + '   <div style="width: 100%; display: flex; padding-bottom: 6px">';
            main = main + '      <input class="string form-control" id="search_vehicle" size="50" type="text">';
            main = main + '      <a id="key_settings_button" href="#" class="btn btn-success navbar-btn btn-sm" style="width: 64px; margin: 0; margin-left: 6px" title="Einstellungen">';
            main = main + '         <span class="glyphicon glyphicon-cog" style="font-size: 16px; margin-top: 2px"></span>';
            main = main + '      </a>';
            main = main + '   </div>';
            main = main + '   <div id="keyboard_alert_key_settings" style="width: 100%; display: none; flex-direction: column; padding-top: 12px; padding-bottom: 12px">';
            main = main + '      <div id="keyboard_alert_key_settings_console" style="width: 100%; min-height: 20px; margin-top: 12px; margin-bottom: 12px">';
            main = main + '         <font></font>';
            main = main + '      </div>';
            main = main + '      <table id="key_settings_table" class="table table-striped tablesorter tablesorter-default">';
            main = main + '         <div style="width: 100%; padding-bottom: 6px">';
            main = main + '             <h4>Tastaturbelegung</h4>';
            main = main + '         </div>';
            main = main + '         <tbody>';

            main = main + '         </tbody>';
            main = main + '      </table>';
            main = main + '   </div>';
            main = main + '   <div style="width: 100%; padding-bottom: 6px">';
            main = main + '      <font style="font-size: 12px">by ChaosKai93 (build 2017-02-12-0025)</font><a href="https://github.com/ChaosKai/tastaturalarmierung" target="_blank" style="font-size: 12px; margin-left: 24px">GitHub Projekt</a>';
            main = main + '   </div>';
            main = main + '</div>';

            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            // -             Write HTML to Browser
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            $( "#mission-form" ).before(main);
            
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            // -             key_settings_button function 
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            $( "#key_settings_button" ).on( "click", function()
            {
                if( $("#keyboard_alert_key_settings").css("display") == "none" )
                {
                    $("#keyboard_alert_key_settings").slideDown(200).delay(200).css("display", "flex");
                    $("#key_settings_button").removeClass("btn-success").addClass("btn-danger");
                }
                else
                {
                    //$("#key_settings").css("display", "none");
                    $("#keyboard_alert_key_settings").slideUp(150);
                    $("#key_settings_button").removeClass("btn-danger").addClass("btn-success");
                }
            });

            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            // -             Start Build Key-Settings
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            buildKeySettings();
        }


    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             Build Key-Settings
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

        function buildKeySettings()
        {
            $.each(key_settings, function(key, value)
            {
                // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                // -             Generate HTML
                // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                html = '';
                html = html + '<tr>';
                html = html + '  <td style="text-align: left"><font style="font-weight: 700" title="' + value.description + '">' + value.name + '</font></td>';
                html = html + '  <td style="text-align: left"><font id="' + key + '_key_code"></font></td>';
                html = html + '  <td style="text-align: right">';
                html = html + '    <a id="keyboard_alert_set_key_' + key + '" class="btn btn-success navbar-btn btn-sm" style="margin: 0" onclick="setKey(' + "'" + key + "'" + ')">Taste belegen</a>';
                html = html + '    <a id="keyboard_alert_del_key_' + key + '" href="#" class="btn btn-danger navbar-btn btn-sm" style="margin: 0">Belegung löschen</a>';
                html = html + '  </td>';
                html = html + '</tr>';

                // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                // -             Write HTML to Browser
                // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                $( "#key_settings_table" ).find("tbody").append(html);
            });
        }

// # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// #
// #
// #             Main Function
// #
// #
// # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##

$(function(){
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // -             Key Buttons Show/Hide
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    $( "#key_settings_button" ).on( "click", function()
    {
        if( $("#keyboard_alert_key_settings").css("display") == "none" )
        {
            $("#keyboard_alert_key_settings").slideDown(200).delay(200).css("display", "flex");
            $("#key_settings_button").removeClass("btn-success").addClass("btn-danger");
        }
        else
        {
            //$("#key_settings").css("display", "none");
            $("#keyboard_alert_key_settings").slideUp(150);
            $("#key_settings_button").removeClass("btn-danger").addClass("btn-success");
        }
    });
    
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // -             Update Table on Key Input
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    $( "#search_vehicle" ).on( "input", function() {
        updateVehicleTable();
    });
    
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             Key Action
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    
    $(document).on( "keyup", function( event )
    {
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // -
        // -             Key: Submit
        // -
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        if(!set_key_mode)
        {
            var table = $("#vehicle_show_table_body_all").length ? "#vehicle_show_table_body_all tr":"#vehicle_show_table_rett tr";

            // - - - - - Submit  - - - - -
            if(event.which == key_settings.submit.key && ctrl_pressed == key_settings.submit.ctrl && shift_pressed == key_settings.submit.shift && alt_pressed == key_settings.submit.alt)
            {
                $( "#mission-form" ).submit();
            }

            // - - - - - Delete  - - - - -
            if(event.which == key_settings.delete.key && ctrl_pressed == key_settings.delete.ctrl && shift_pressed == key_settings.delete.shift && alt_pressed == key_settings.delete.alt)
            {
                $( "#search_vehicle" ).val(""); updateVehicleTable();
            }
            
            // - - - - - Select more  - - - - -
            if(event.which == key_settings.select_more.key && ctrl_pressed == key_settings.select_more.ctrl && shift_pressed == key_settings.select_more.shift && alt_pressed == key_settings.select_more.alt)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
                updateVehicleTable();
                $( table + ":visible" ).find("input:not(:checked)").eq(0).click();
                
                $( "#search_vehicle" ).val(""); updateVehicleTable();
            }
            
            // - - - - - Select less  - - - - -
            if(event.which == key_settings.select_less.key && ctrl_pressed == key_settings.select_less.ctrl && shift_pressed == key_settings.select_less.shift && alt_pressed == key_settings.select_less.alt)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
                updateVehicleTable();
                $( table + ":visible" ).find("input:checked").last().click();
                
                $( "#search_vehicle" ).val(""); updateVehicleTable();
            }
            
            // - - - - - Select all  - - - - -
            if(event.which == key_settings.select_all.key && ctrl_pressed == key_settings.select_all.ctrl && shift_pressed == key_settings.select_all.shift && alt_pressed == key_settings.select_all.alt)
            {
                $( table + ":visible" ).each(function() {
                    $( this ).find("input").attr('checked', true);
                });
                
                $( "#search_vehicle" ).val(""); updateVehicleTable();
            }

            // - - - - - Ergebnis 1  - - - - -
            if(event.which == key_settings.vehicle_1.key && ctrl_pressed == key_settings.vehicle_1.ctrl && shift_pressed == key_settings.vehicle_1.shift && alt_pressed == key_settings.vehicle_1.alt)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
                updateVehicleTable();
                $( table + ":visible" ).eq(0).find("input").click();

                //$( "#search_vehicle" ).val(""); updateVehicleTable();
            }

            // - - - - - Ergebnis 2  - - - - -
            if(event.which == key_settings.vehicle_2.key && ctrl_pressed == key_settings.vehicle_2.ctrl && shift_pressed == key_settings.vehicle_2.shift && alt_pressed == key_settings.vehicle_2.alt)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
                updateVehicleTable();
                $( table + ":visible" ).eq(1).find("input").click();
            }

            // - - - - - Ergebnis 3  - - - - -
            if(event.which == key_settings.vehicle_3.key && ctrl_pressed == key_settings.vehicle_3.ctrl && shift_pressed == key_settings.vehicle_3.shift && alt_pressed == key_settings.vehicle_3.alt)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
                updateVehicleTable();
                $( table + ":visible" ).eq(2).find("input").click();
            }

            // - - - - - Ergebnis 4  - - - - -
            if(event.which == key_settings.vehicle_4.key && ctrl_pressed == key_settings.vehicle_4.ctrl && shift_pressed == key_settings.vehicle_4.shift && alt_pressed == key_settings.vehicle_4.alt)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
                updateVehicleTable();
                $( table + ":visible" ).eq(3).find("input").click();
            }

            // - - - - - Ergebnis 5  - - - - -
            if(event.which == key_settings.vehicle_5.key && ctrl_pressed == key_settings.vehicle_5.ctrl && shift_pressed == key_settings.vehicle_5.shift && alt_pressed == key_settings.vehicle_5.alt)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
                updateVehicleTable();
                $( table + ":visible" ).eq(4).find("input").click();
            }

            // - - - - - Ergebnis 6  - - - - -
            if(event.which == key_settings.vehicle_6.key && ctrl_pressed == key_settings.vehicle_6.ctrl && shift_pressed == key_settings.vehicle_6.shift && alt_pressed == key_settings.vehicle_6.alt)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
                updateVehicleTable();
                $( table + ":visible" ).eq(5).find("input").click();
            }

            // - - - - - Ergebnis 7  - - - - -
            if(event.which == key_settings.vehicle_7.key && ctrl_pressed == key_settings.vehicle_7.ctrl && shift_pressed == key_settings.vehicle_7.shift && alt_pressed == key_settings.vehicle_7.alt)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
                updateVehicleTable();
                $( table + ":visible" ).eq(6).find("input").click();
            }

            // - - - - - Ergebnis 8  - - - - -
            if(event.which == key_settings.vehicle_8.key && ctrl_pressed == key_settings.vehicle_8.ctrl && shift_pressed == key_settings.vehicle_8.shift && alt_pressed == key_settings.vehicle_8.alt)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
                updateVehicleTable();
                $( table + ":visible" ).eq(7).find("input").click();
            }

            // - - - - - Ergebnis 9  - - - - -
            if(event.which == key_settings.vehicle_9.key && ctrl_pressed == key_settings.vehicle_9.ctrl && shift_pressed == key_settings.vehicle_9.shift && alt_pressed == key_settings.vehicle_9.alt)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );
                updateVehicleTable();
                $( table + ":visible" ).eq(8).find("input").click();
            }
        }

    });
    
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             Save pressed Key
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    $(document).on( "keyup", function( event )
    {
        if(set_key_mode)
        {
            if( event.which == 27 )
            {
                set_key_mode = false;
                reloadKeySettings();
                
                $( "#keyboard_alert_modal" ).find("div").html('<h2>Abbruch</h2>');
                $( "#keyboard_alert_modal" ).delay(500).fadeOut(200);
            }
            else
            {
                key_settings[set_key_name].key = event.which;
                key_settings[set_key_name].ctrl = ctrl_pressed;
                key_settings[set_key_name].shift = shift_pressed;
                key_settings[set_key_name].alt = alt_pressed;
                

                $( "#key_settings_console" ).find("font").text("Die Taste wurde gespeichert!");
                window.setTimeout(function() { $( "#key_settings_console" ).find("font").text(""); }, 1500);

                set_key_mode = false;
                reloadKeySettings();
                
                $( "#keyboard_alert_modal" ).find("div").html('<h2>Gespeichert</h2>');
                $( "#keyboard_alert_modal" ).delay(500).fadeOut(200);
            }
        }
    });
    
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             Detect pressed Ctrl, Alt & Shift
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    
    $(window).keydown( function( event )
    {
        if(ctrl_pressed || alt_pressed)
            event.preventDefault();
        
        if (event.which == 16)
        {
            shift_pressed = true;
        }
        if (event.which == 17)
        {
            ctrl_pressed = true;
        }
        if (event.which == 18)
        {
            alt_pressed = true;
        }
    }).keyup( function( event )
    {
        if (event.which == 16)
        {
            shift_pressed = false;
        }
        if (event.which == 17)
        {
            ctrl_pressed = false;
        }
        if (event.which == 18)
        {
            alt_pressed = false;
        }
    });
    
}());

function updateVehicleTable()
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

        if( $( "#search_vehicle" ).val().length === 0 )
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

   // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   // -             set Key (call from button)
   // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   function setKey(key)
   {
       set_key_mode = true;
       set_key_name = key;
       $( "#key_settings_console" ).find("font").text("Drücke die Taste, die Du für diese Funktion belegen möchtest...");
       
       // open modal
       $( "#keyboard_alert_modal" ).fadeIn(200);
       $( "#keyboard_alert_modal" ).find("div").html('<h2>Drücke die Taste, die du für <b>' + key_settings[key].name + '</b> belegen möchtest.</h2><h4>Drücke ESC zum abbrechen</h4>');
   }

   // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   // -             delete Key (call from button)
   // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function delKey(key)
    {
        set_key_mode = false;
        setKeyStorage("key_" + key, {'altKey':false,'ctrlKey':false,'metaKey':false,'key':false});
        $( "#key_settings_console" ).find("font").text("Die Taste '" + key + "' wurde gelöscht!");
        window.setTimeout(function() { $( "#key_settings_console" ).find("font").text(""); }, 1500);
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // -
    // -             Load Key-Settings
    // -
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function loadKeySettings()
    {
        if (localStorage.getItem("keyboard_alert_keys") === null)
        {
            reloadKeySettings();
        }
        else
        {
            // load from JS localStorage
            key_settings = JSON.parse(localStorage.getItem("keyboard_alert_keys"));
            
            // update key_settings table
            $.each(key_settings, function(key, value)
            {
                var text = "";
                if( value.ctrl )    text = text + "Strg + ";
                if( value.shift )   text = text + "Shift + ";
                if( value.alt )     text = text + "Alt + ";
                text = text + keyCodeToChar[value.key];
                
                $( "#" + key + "_key_code" ).text(text);
            });
        }
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // -
    // -             Reload Key-Settings
    // -
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function reloadKeySettings()
    {
        // save current to JS localStorage
        localStorage.setItem("keyboard_alert_keys", JSON.stringify(key_settings));
        
        // load from JS localStorage
        key_settings = JSON.parse(localStorage.getItem("keyboard_alert_keys"));
        
        // update key_settings table
        $.each(key_settings, function(key, value)
        {
            var text = "";
            if( value.ctrl )    text = text + "Strg + ";
            if( value.shift )   text = text + "Shift + ";
            if( value.alt )     text = text + "Alt + ";
            text = text + keyCodeToChar[value.key];

            $( "#" + key + "_key_code" ).text(text);
        });
    }

    loadKeySettings();

    buildMainContainer();
    buildModal();

    reloadKeySettings();

    $( "#search_vehicle" ).focus();
