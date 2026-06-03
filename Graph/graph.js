class Graph{
    constructor() {
        this.graph = new Map();
    }
    vertex(vertex) {
        if (!this.graph.has(vertex)) {
            this.graph.set(vertex, []);
        }
    }
    insert(vertex, edge, isBidirectional) {
        this.vertex(vertex)
        this.vertex(edge)
        
        this.graph.get(vertex).push(edge);
        if (isBidirectional) {
            this.graph.get(edge).push(vertex)
        }
    }
    display() {
        for (let [vertex, edges] of this.graph) {
            console.log(`${vertex} : [${edges}]`)
        }

    }
    bfs(start){
        let visited=new Set();
        let visiting=(start)=>{
            let queue=[start];
            visited.add(start);
            while(queue.length){
                let vertex=queue.shift();
                console.log(vertex);
                for(let edge of this.graph.get(vertex)){
                    if(!visited.has(edge)){
                        visited.add(edge);
                        queue.push(edge);
                    }
                }
            }
        }
        visiting(start);
        for(let key of this.graph.keys()){
            // console.log(key)
            if(!visited.has(key)){
                visiting(key)
            }
        } 
    }
    dfs(start){
        let visited=new Set();
        let visiting=(vertex,graph)=>{
            visited.add(vertex);
            console.log(vertex);
            for(let edge of graph.get(vertex)){
                if(!visited.has(edge)){
                    visiting(edge,graph);
                }
            }
        }
        visiting(start,this.graph);
        for(let key of this.graph.keys()){
            if(!visited.has(key))
            visiting(key,this.graph)
        }
    }

    delete(el){
        this.graph.delete(el);
        for(let key of this.graph.keys()){
            let edges=this.graph.get(key);
            this.graph.get(key).length=0
            this.graph.get(key).push(edges.filter(i=>i!=el))
        }
    }
}

const g = new Graph();
g.insert(5, 4, true);
g.insert(5, 8, true);
g.insert(6, 19, true);
g.insert(6, 9, false);
// g.bfs(5)
// g.dfs(5)

g.delete(5)
g.display()
