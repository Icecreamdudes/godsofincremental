var layoutInfo = {
    startTab: "none",
    startNavTab: "tree-tab",
	showTree: true,

    treeLayout: ""

    
}


// A "ghost" layer which offsets other layers in the tree
addNode("blank", {
    layerShown: "ghost",
}, 
)


addLayer("tree-tab", {
    tabFormat: 
    [
        ["raw-html", function () { return options.musicToggle && options.forceOneTab ? "<audio controls autoplay loop hidden><source src=music/falsetree.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
        ["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]
    ],
    previousTab: "",
    leftTab: true,
})