sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("destinationapp.controller.View1", {
            onInit: function () {

            },
            onPress: function() {
                return new Promise((resolve, reject) => {
                    $.ajax({
                        url: `/public/`,
                        method: "GET",
                        success: (data) => {
                           debugger;
                        },
                        error: (err) => {
                            debugger;
                        }
                    });
                });
    
                }
        });
    });
