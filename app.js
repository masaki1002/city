/// <reference path="js/babylon.2.5.d.ts" />

var BjsApp = BjsApp || {};

BjsApp.init = function() {

    //get the canvas
    var canvas = document.getElementById('renderCanvas');

    //create a Babylon engine object
    var engine = new BABYLON.Engine(canvas, true);

    BABYLON.SceneLoader.Load('', 'asset/testExport_20200527.glb', engine, function(scene){
        scene.executeWhenReady(function() {
            var camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 2.5, 80, new BABYLON.Vector3(25, 150, 50), scene);
            // #### VR Camera setup ###
            // var camera = new BABYLON.VRDeviceOrientationFreeCamera(
            //     "vrcamera",
            //     new BABYLON.Vector3(25, 120, -300),
            //     scene
            // );
            camera.attachControl(canvas, true);




            var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData(
                "asset/environment.dds",
                scene
              );

            hdrTexture.gammaSpace = false;
            scene.createDefaultSkybox(hdrTexture, true, 2000);


            // var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 30, 0), scene);
            // light.intensity = 2.5;



            engine.runRenderLoop(function() {
                scene.render();
            });
        });
    });


};
