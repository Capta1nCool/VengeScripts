document.addEventListener("DOMContentLoaded", () => {
    pc.app.on('Player:Focused', function (state) {
        try {
            if (state) {
                pc.app.scene.layers.getLayerByName('NonFOV').enabled = false;
                let crosshair = pc.app.root.findByName('Crosshair');
                crosshair.enabled = true;
            } else {
                pc.app.scene.layers.getLayerByName('NonFOV').enabled = true;
                pc.app.root.findByName('Player').findByName('ArmLeft').enabled = false;
                pc.app.root.findByName('Player').findByName('ArmRight').enabled = false;
            }
        } catch (error) {
            console.log(error)
        }
    });
})


window._pc = false;
Object.defineProperty(window, "pc", {
    set(value) {
        if (!window.pc) {
            window._pc = value;
        }
    },
    get() {
        return (window._pc);
    }
});
