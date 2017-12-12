// ==UserScript==
// @name        LSS Tastaturalarmierung
// @namespace   Leitstellenspiel
// @include     http*://www.leitstellenspiel.de/*
// @version     dev
// @author      ChaosKai93
// @grant       none
// ==/UserScript==

// # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// #
// #
// #             set variables
// #
// #
// # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##

        var search_query = "";

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
            8:
            {
                name:"Backspace",
                key:""
            },
            9:
            {
                name:"Tab",
                key:" "
            },
            13:
            {
                name:"Enter",
                key:""
            },
            16:
            {
                name:"Shift",
                key:""
            },
            17:
            {
                name:"Strg",
                key:""
            },
            18:
            {
                name:"Alt",
                key:""
            },
            19:
            {
                name:"Pause / Break",
                key:""
            },
            20:
            {
                name:"Caps Lock",
                key:""
            },
            27:
            {
                name:"Esc",
                key:""
            },
            32:
            {
                name:"Leerzeichen",
                key:" "
            },
            33:
            {
                name:"Bild auf",
                key:""
            },
            34:
            {
                name:"Bild ab",
                key:""
            },
            35:
            {
                name:"Ende",
                key:""
            },
            36:
            {
                name:"Home",
                key:""
            },
            37:
            {
                name:"Links",
                key:""
            },
            38:
            {
                name:"Auf",
                key:""
            },
            39:
            {
                name:"Rechts",
                key:""
            },
            40:
            {
                name:"Ab",
                key:""
            },
            45:
            {
                name:"Einfg",
                key:""
            },
            46:
            {
                name:"Entf",
                key:""
            },
            48:
            {
                name:"0",
                key:"0"
            },
            49:
            {
                name:"1",
                key:"1"
            },
            50:
            {
                name:"2",
                key:"2"
            },
            51:
            {
                name:"3",
                key:"3"
            },
            52:
            {
                name:"4",
                key:"4"
            },
            53:
            {
                name:"5",
                key:"5"
            },
            54:
            {
                name:"6",
                key:"6"
            },
            55:
            {
                name:"7",
                key:"7"
            },
            56:
            {
                name:"8",
                key:"8"
            },
            57:
            {
                name:"9",
                key:"9"
            },
            65:
            {
                name:"A",
                key:"A"
            },
            66:
            {
                name:"B",
                key:"B"
            },
            67:
            {
                name:"C",
                key:"C"
            },
            68:
            {
                name:"D",
                key:"D"
            },
            69:
            {
                name:"E",
                key:"E"
            },
            70:
            {
                name:"F",
                key:"F"
            },
            71:
            {
                name:"G",
                key:"G"
            },
            72:
            {
                name:"H",
                key:"H"
            },
            73:
            {
                name:"I",
                key:"I"
            },
            74:
            {
                name:"J",
                key:"J"
            },
            75:
            {
                name:"K",
                key:"K"
            },
            76:
            {
                name:"L",
                key:"L"
            },
            77:
            {
                name:"M",
                key:"M"
            },
            78:
            {
                name: "N",
                key:  "N"
            },
            79:
            {
                name: "O",
                key:  "O"
            },
            80:
            {
                name: "P",
                key:  "P"
            },
            81:
            {
                name: "Q",
                key:  "Q"
            },
            82:
            {
                name: "R",
                key:  "R"
            },
            83:
            {
                name: "S",
                key:  "S"
            },
            84:
            {
                name: "T",
                key:  "T"
            },
            85:
            {
                name: "U",
                key:  "U"
            },
            86:
            {
                name: "V",
                key:  "V"
            },
            87:
            {
                name: "W",
                key:  "W"
            },
            88:
            {
                name: "X",
                key:  "X"
            },
            89:
            {
                name: "Y",
                key:  "Y"
            },
            90:
            {
                name: "Z",
                key:  "Z"
            },
            91:
            {
                name: "Windows",
                key:  ""
            },
            93:
            {
                name: "Rechts Klick",
                key:  ""
            },
            96:
            {
                name: "Numpad 0",
                key:  "0"
            },
            97:
            {
                name: "Numpad 1",
                key:  "1"
            },
            98:
            {
                name: "Numpad 2",
                key:  "2"
            },
            99:
            {
                name: "Numpad 3",
                key:  "3"
            },
            100:
            {
                name: "Numpad 4",
                key:  "4"
            },
            101:
            {
                name: "Numpad 5",
                key:  "5"
            },
            102:
            {
                name: "Numpad 6",
                key:  "6"
            },
            103:
            {
                name: "Numpad 7",
                key:  "7"
            },
            104:
            {
                name: "Numpad 8",
                key:  "8"
            },
            105:
            {
                name: "Numpad 9",
                key:  "9"
            },
            106:
            {
                name: "Numpad *",
                key:  "*"
            },
            107:
            {
                name: "Numpad +",
                key:  "+"
            },
            109:
            {
                name: "Numpad -",
                key:  "-"
            },
            110:
            {
                name: "Numpad .",
                key:  "."
            },
            111:
            {
                name: "Numpad /",
                key:  "/"
            },
            112:
            {
                name: "F1",
                key:  ""
            },
            113:
            {
                name: "F2",
                key:  ""
            },
            114:
            {
                name: "F3",
                key:  ""
            },
            115:
            {
                name: "F4",
                key:  ""
            },
            116:
            {
                name: "F5",
                key:  ""
            },
            117:
            {
                name: "F6",
                key:  ""
            },
            118:
            {
                name: "F7",
                key:  ""
            },
            119:
            {
                name: "F8",
                key:  ""
            },
            120:
            {
                name: "F9",
                key:  ""
            },
            121:
            {
                name: "F10",
                key:  ""
            },
            122:
            {
                name: "F11",
                key:  ""
            },
            123:
            {
                name: "F12",
                key:  ""
            },
            144:
            {
                name: "Num Lock",
                key:  ""
            },
            145:
            {
                name: "Scroll Lock",
                key:  ""
            },
            186:
            {
                name: ";",
                key:  ";"
            },
            187:
            {
                name: "=",
                key:  "="
            },
            188:
            {
                name: ",",
                key:  ","
            },
            189:
            {
                name: "-",
                key:  "-"
            },
            190:
            {
                name: ".",
                key:  "."
            },
            191:
            {
                name: "/",
                key:  "/"
            },
            192:
            {
                name: "`",
                key:  "`"
            },
            219:
            {
                name: "[",
                key:  "["
            },
            220:
            {
                name: "\\",
                key:  "\\"
            },
            221:
            {
                name: "]",
                key:  "]"
            },
            222:
            {
                name: "'",
                key:  "'"
            }
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
                "key":          46,
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
                "key":          false,
                "ctrl":         false,
                "alt":          false,
                "shift":        false
            },
            "vehicle_1":
            {
                "name":         "Fahrzeug 1 markieren",
                "description":  "Das 1. sichtbare Fahrzeug markieren",
                "key":          49,
                "ctrl":         false,
                "alt":          false,
                "shift":        false
            },
            "vehicle_2":
            {
                "name":         "Fahrzeug 2 markieren",
                "description":  "Das 2. sichtbare Fahrzeug markieren",
                "key":          50,
                "ctrl":         false,
                "alt":          false,
                "shift":        false
            },
            "vehicle_3":
            {
                "name":         "Fahrzeug 3 markieren",
                "description":  "Das 3. sichtbare Fahrzeug markieren",
                "key":          51,
                "ctrl":         false,
                "alt":          false,
                "shift":        false
            },
            "vehicle_4":
            {
                "name":         "Fahrzeug 4 markieren",
                "description":  "Das 4. sichtbare Fahrzeug markieren",
                "key":          52,
                "ctrl":         false,
                "alt":          false,
                "shift":        false
            },
            "vehicle_5":
            {
                "name":         "Fahrzeug 5 markieren",
                "description":  "Das 5. sichtbare Fahrzeug markieren",
                "key":          53,
                "ctrl":         false,
                "alt":          false,
                "shift":        false
            },
            "vehicle_6":
            {
                "name":         "Fahrzeug 6 markieren",
                "description":  "Das 6. sichtbare Fahrzeug markieren",
                "key":          54,
                "ctrl":         false,
                "alt":          false,
                "shift":        false
            },
            "vehicle_7":
            {
                "name":         "Fahrzeug 7 markieren",
                "description":  "Das 7. sichtbare Fahrzeug markieren",
                "key":          55,
                "ctrl":         false,
                "alt":          false,
                "shift":        false
            },
            "vehicle_8":
            {
                "name":         "Fahrzeug 8 markieren",
                "description":  "Das 8. sichtbare Fahrzeug markieren",
                "key":          56,
                "ctrl":         false,
                "alt":          false,
                "shift":        false
            },
            "vehicle_9":
            {
                "name":         "Fahrzeug 9 markieren",
                "description":  "Das 9. sichtbare Fahrzeug markieren",
                "key":          57,
                "ctrl":         false,
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

        if(window.location.href.indexOf("missions/") == -1)
        {
           throw new Error("LSS Tastaturalarmierung: wrong page");
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
            main = main + '<div id="keyboard_alert_main" style="width: 100%; padding: 0px; margin-bottom: 16px; border: 1px solid #bdbdbd; border-radius: 4px; overflow: hidden">';
            main = main + '   <div style="width: 100%; display: flex; align-items: center; padding: 16px">';
            main = main + '      <div style="width: calc(100% - 70px); display: flex; flex-direction: row; align-items: center;">';
            main = main + '          <span style="margin-right: 6px; font-size: 24px; color: #757575">Fahrzeugsuche:</span>';
            main = main + '          <span id="lss-keyboard-search-query" style="margin-right: 6px; font-size: 24px">_</span>';
            main = main + '      </div>';
            main = main + '      <a id="key_settings_button" href="#" class="btn btn-success navbar-btn btn-sm" style="width: 64px; margin: 0; margin-left: 6px" title="Einstellungen">';
            main = main + '         <span class="glyphicon glyphicon-cog" style="font-size: 16px; margin-top: 2px"></span>';
            main = main + '      </a>';
            main = main + '   </div>';
            main = main + '   <div id="keyboard_alert_key_settings" style="width: 100%; display: none; flex-direction: column">';
            main = main + '      <table id="key_settings_table" class="table table-striped tablesorter tablesorter-default">';
            main = main + '         <tbody>';

            main = main + '         </tbody>';
            main = main + '      </table>';
            main = main + '   </div>';
            main = main + '   <div style="width: 100%; display: flex; flex-direction: row; align-items: stretch; padding: 6px; font-size: 12px; background: #e0e0e0; border-top: 1px solid #bdbdbd">';
            main = main + '      <div style="width: 30%; padding: 0px 16px; text-align: left">';
            main = main + '         <font style="">Made by ChaosKai93</font>';
            main = main + '      </div>';
            main = main + '      <div style="width: 40%; padding: 0px 16px; text-align: left">';
            main = main + '         <font style="">Version: 2017-02-27-0139</font>';
            main = main + '      </div>';
            main = main + '      <div style="width: 30%; padding: 0px 16px; text-align: right">';
            main = main + '         <a href="https://github.com/ChaosKai/tastaturalarmierung" target="_blank" style="font-size: 12px; margin-left: 24px">GitHub Projekt</a>';
            main = main + '      </div>';
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

                // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                // -             Add Event-Listener to Button
                // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                
                $( '#keyboard_alert_set_key_' + key ).click(function()
                {
                    set_key_mode = true;
                    set_key_name = key;

                    // open modal
                    $( "#keyboard_alert_modal" ).fadeIn(200);
                    $( "#keyboard_alert_modal" ).find("div").html('<h2>Drücke die Taste, die du für <b>' + key_settings[key].name + '</b> belegen möchtest.</h2><h4>Drücke ESC zum abbrechen</h4>');
                });
                
                $( '#keyboard_alert_del_key_' + key ).click(function()
                {
                    key_settings[key].key = false;
                    key_settings[key].ctrl = false;
                    key_settings[key].shift = false;
                    key_settings[key].alt = false;
                    
                    reloadKeySettings();
                    
                    // open modal
                    $( "#keyboard_alert_modal" ).fadeIn(200);
                    $( "#keyboard_alert_modal" ).find("div").html('<h2>Die Taste für <b>' + key_settings[key].name + '</b> wurde entfernt.</h2>');
                    $( "#keyboard_alert_modal" ).delay(1800).fadeOut(200);
                });
            });
        }

// # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// #
// #
// #             Main Function
// #
// #
// # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##

    
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
    
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             Key Action
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
        
    $(document).on( "keydown", function( event )
    {
        event.preventDefault();
        
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // -
        // -             Key: Submit
        // -
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        if(!set_key_mode)
        {
            var table = $("#vehicle_show_table_body_all").length ? "#vehicle_show_table_body_all tr":"#vehicle_show_table_rett tr";
            var addKeyToQuery = true;

            // - - - - - Submit  - - - - -
            if(event.which == key_settings.submit.key && ctrl_pressed == key_settings.submit.ctrl && shift_pressed == key_settings.submit.shift && alt_pressed == key_settings.submit.alt)
            {
                $( "#mission-form" ).submit();
                addKeyToQuery = false;
            }

            // - - - - - Delete  - - - - -
            if(event.which == key_settings.delete.key && ctrl_pressed == key_settings.delete.ctrl && shift_pressed == key_settings.delete.shift && alt_pressed == key_settings.delete.alt)
            {
                search_query = ""; updateVehicleTable();
                addKeyToQuery = false;
            }
            
            // - - - - - Select more  - - - - -
            if(event.which == key_settings.select_more.key && ctrl_pressed == key_settings.select_more.ctrl && shift_pressed == key_settings.select_more.shift && alt_pressed == key_settings.select_more.alt)
            {
                updateVehicleTable();
                $( table + ":visible" ).find("input:not(:checked)").eq(0).click();
                
                updateVehicleTable();
                addKeyToQuery = false;
            }
            
            // - - - - - Select less  - - - - -
            if(event.which == key_settings.select_less.key && ctrl_pressed == key_settings.select_less.ctrl && shift_pressed == key_settings.select_less.shift && alt_pressed == key_settings.select_less.alt)
            {
                updateVehicleTable();
                $( table + ":visible" ).find("input:checked").last().click();
                
                updateVehicleTable();
                addKeyToQuery = false;
            }
            
            // - - - - - Select all  - - - - -
            if(event.which == key_settings.select_all.key && ctrl_pressed == key_settings.select_all.ctrl && shift_pressed == key_settings.select_all.shift && alt_pressed == key_settings.select_all.alt)
            {
                $( table + ":visible" ).each(function() {
                    $( this ).find("input").attr('checked', true);
                });
                
                updateVehicleTable();
                addKeyToQuery = false;
            }

            // - - - - - Ergebnis 1  - - - - -
            if(event.which == key_settings.vehicle_1.key && ctrl_pressed == key_settings.vehicle_1.ctrl && shift_pressed == key_settings.vehicle_1.shift && alt_pressed == key_settings.vehicle_1.alt)
            {
                updateVehicleTable();
                $( table + ":visible" ).eq(0).find("input").click();

                //$( "#search_vehicle" ).val(""); updateVehicleTable();
                addKeyToQuery = false;
            }

            // - - - - - Ergebnis 2  - - - - -
            if(event.which == key_settings.vehicle_2.key && ctrl_pressed == key_settings.vehicle_2.ctrl && shift_pressed == key_settings.vehicle_2.shift && alt_pressed == key_settings.vehicle_2.alt)
            {
                updateVehicleTable();
                $( table + ":visible" ).eq(1).find("input").click();
                addKeyToQuery = false;
            }

            // - - - - - Ergebnis 3  - - - - -
            if(event.which == key_settings.vehicle_3.key && ctrl_pressed == key_settings.vehicle_3.ctrl && shift_pressed == key_settings.vehicle_3.shift && alt_pressed == key_settings.vehicle_3.alt)
            {
                updateVehicleTable();
                $( table + ":visible" ).eq(2).find("input").click();
                addKeyToQuery = false;
            }

            // - - - - - Ergebnis 4  - - - - -
            if(event.which == key_settings.vehicle_4.key && ctrl_pressed == key_settings.vehicle_4.ctrl && shift_pressed == key_settings.vehicle_4.shift && alt_pressed == key_settings.vehicle_4.alt)
            {
                updateVehicleTable();
                $( table + ":visible" ).eq(3).find("input").click();
                addKeyToQuery = false;
            }

            // - - - - - Ergebnis 5  - - - - -
            if(event.which == key_settings.vehicle_5.key && ctrl_pressed == key_settings.vehicle_5.ctrl && shift_pressed == key_settings.vehicle_5.shift && alt_pressed == key_settings.vehicle_5.alt)
            {
                updateVehicleTable();
                $( table + ":visible" ).eq(4).find("input").click();
                addKeyToQuery = false;
            }

            // - - - - - Ergebnis 6  - - - - -
            if(event.which == key_settings.vehicle_6.key && ctrl_pressed == key_settings.vehicle_6.ctrl && shift_pressed == key_settings.vehicle_6.shift && alt_pressed == key_settings.vehicle_6.alt)
            {
                updateVehicleTable();
                $( table + ":visible" ).eq(5).find("input").click();
                addKeyToQuery = false;
            }

            // - - - - - Ergebnis 7  - - - - -
            if(event.which == key_settings.vehicle_7.key && ctrl_pressed == key_settings.vehicle_7.ctrl && shift_pressed == key_settings.vehicle_7.shift && alt_pressed == key_settings.vehicle_7.alt)
            {
                updateVehicleTable();
                $( table + ":visible" ).eq(6).find("input").click();
                addKeyToQuery = false;
            }

            // - - - - - Ergebnis 8  - - - - -
            if(event.which == key_settings.vehicle_8.key && ctrl_pressed == key_settings.vehicle_8.ctrl && shift_pressed == key_settings.vehicle_8.shift && alt_pressed == key_settings.vehicle_8.alt)
            {
                updateVehicleTable();
                $( table + ":visible" ).eq(7).find("input").click();
                addKeyToQuery = false;
            }

            // - - - - - Ergebnis 9  - - - - -
            if(event.which == key_settings.vehicle_9.key && ctrl_pressed == key_settings.vehicle_9.ctrl && shift_pressed == key_settings.vehicle_9.shift && alt_pressed == key_settings.vehicle_9.alt)
            {
                updateVehicleTable();
                $( table + ":visible" ).eq(8).find("input").click();
                addKeyToQuery = false;
            }
            
            
            // - - - - - Add pressed key to search query  - - - - -
            
            if( event.which == 8 )
            {
                search_query = search_query.substring(0, search_query.length-1);
                updateVehicleTable();
            }
            
            if( addKeyToQuery && ( event.which == 32 || (event.which >= 48 && event.which <= 90) || (event.which >= 96 && event.which <= 111) || (event.which >= 186 && event.which <= 221) ) )
            {
                search_query = search_query + keyCodeToChar[event.which].key;
                updateVehicleTable();
            }
            
            if( search_query === "" )
            {
                $( "#lss-keyboard-search-query" ).html("_");
            }
            else
            {
                $( "#lss-keyboard-search-query" ).html(search_query);
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
    

function updateVehicleTable()
{
    var table = $("#vehicle_show_table_body_all").length ? "#vehicle_show_table_body_all tr":"#vehicle_show_table_rett tr";
        
    $( table ).each(function() {

        if( $( this ).find("label").text().toLowerCase().indexOf( search_query.toLowerCase() ) >= 0 )
        {
            // Found vehicle name
            $( this ).css("display", "table-row");
        }
        else if( $( this ).find("a").text().toLowerCase().indexOf( search_query.toLowerCase() ) >= 0 )
        {
            // Found station name
            $( this ).css("display", "table-row");
        }
        else
        {
            // Not Found
            $( this ).css("display", "none");
        }

        if( search_query.length === 0 )
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
                
                if( !value.key )
                {
                    text = "Nicht belegt";
                }
                else
                {
                    text = text + keyCodeToChar[value.key].name;
                }
                
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
            
            if( !value.key )
            {
                text = "Nicht belegt";
            }
            else
            {
                text = text + keyCodeToChar[value.key].name;
            }

            $( "#" + key + "_key_code" ).text(text);
        });
    }

    loadKeySettings();

    buildMainContainer();
    buildModal();

    reloadKeySettings();

    // quick and dirty hotfix 12.12.2017
    var checkCombination = function()
    {
        console.log("Sebastians KeyCodes unterdrückt.");
    }
    
    function checkCombination()
    {
        console.log("Sebastians KeyCodes unterdrückt.");
    }
