var gl = null;
var cone = null;

function init() {
    var canvas = document.getElementById( "webgl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );

    cone = new Cone(gl, 9);

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    //gl.clearColor( 1, 0.5, 0.5, 3);

    render();
}

function render() {
    //gl.clear( gl.COLOR_BUFFER_BIT );
    cone.render();
}

window.onload = init;
