;
$(function(){
    var testData = [
        {id: 1, name: 'Prime', parent: 0},
        {id: 2, name: 'Office', parent: 1},
        {id: 3, name: 'Division 1', parent: 1},
        {id: 4, name: 'Division 2', parent: 1},
        {id: 6, name: 'Division 3', parent: 1},
        {id: 7, name: 'Division 4', parent: 1},
        {id: 8, name: 'Division 5', parent: 1},
        {id: 5, name: 'Sub Division', parent: 3},
    ];
    // var style = 
    // {
    //     fill:'#387',
    //     stroke: '#222',
    //     strokeWidth: 3
    // }

    // var paper = Snap('#graph');
    
    // var circle = paper.circle(50,50,30);
    // circle
    // .attr(style)
    // .drag();
    
    // var path = paper
    //             .path("")
    //             .attr({
    //                 stroke: "#222",
    //                 fill: "transparent",
    //                 strokeWidth: 3
    //             })

    // paper.click(function(e){
    //     if(e.target.tagName == 'svg') {
    //         paper.circle(e.offsetX,e.offsetY,30)
    //             .attr(style)
    //             .drag()
    //         var pathString = path.attr('d');
    //         var coords = e.offsetX + "," + e.offsetY;
            
    //         if(pathString)
    //             pathString += "L "+coords;
    //         else 
    //             pathString += "M "+coords;

    //         path.attr({
    //             d : pathString
    //         });
    //     }
    // });
});


function BinaryTree() {
    var self = this;
    var root;
    
    function traverse(value, fn) {
        var found = root,
            side, parent;
        while(found && found.value !== value) {
            parent = found;
            if(value > found.value) {
                side = 'right';
                found = found.right;    
            } else {
                side = 'left';
                found = found.left;
            }
        }
        return { found: found, parent: parent, side: side };
    }
    
    self.add = function (value, item) {
        if(typeof value === 'undefined') {
            throw new Error('value cannot be undefined');
        }
        
        var node = new BinaryTreeNode(value, item);
        if(!root) {
            root = node;
            return;
        }
        
        var result = traverse(value);
        if(!result.found) {
            result.parent[result.side] = node;
        } else {
            throw new Error('two items of the same value added');
        }
    };

    self.search = function(value) {
        var result = traverse(value);
        return result.found ? result.found.item : null;
    };
    
    self.contains = function(value) {
        return !!self.find(value)
    };
    
    self.root = function (){
        return root;
    };
    
    function BinaryTreeNode(value, item) {
        this.value = value;
        this.item = item;
        this.left = null;
        this.right = null;
    }
};
