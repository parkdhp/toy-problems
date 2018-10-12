//Graph

class Graph {
  constructor() {
    this.nodes = {};
  }
  addEdge(node, edge) {
    if(!this.nodes[node]) {
      throw new Error('Node does not exist');
    }
    if (this.nodes[node][edge]) {
      throw new Error(`Edge ${node}-${edge} already exists`);
    }
    this.nodes[node][edge] = true;
  }
  addNode(val) {
    if(this.nodes[val]) {
      throw new Error(`Node with value ${val} already exists`);
    }
    this.nodes[val] = {};
  }
  findEdges(node) {
    if(!this.nodes[node]) {
      throw new Error('Node does not exist');
    }
    return this.nodes[node];
  }
  hasEdge(node, edge) {
    if(!this.nodes[node]) {
      return false;
    }
    return this.nodes[node][edge] !== undefined;
  }
  hasNode(node) {
    return this.nodes[node] !== undefined;
  }
  removeEdge(node, edge) {
    if(!this.nodes[node]) {
      throw new Error('Node does not exist');
    }
    delete this.nodes[node][edge];
  }
  removeNode(node) {
    if(!this.nodes[node]) {
      throw new Error('Node does not exist');
    }
    delete this.nodes[node];
    for(let currNode in this.nodes) {
      if(this.nodes[currNode][node] !== undefined) {
        delete this.nodes[currNode][node];
      }
    }
  }
}

module.exports = Graph;