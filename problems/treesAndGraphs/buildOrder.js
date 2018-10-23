/**Build Order
 * You are given a list of projects and a list of dependencies (which) is a list of pairs of
 * projects, where the second project is dependent on the first project). All of a project's
 * dependencies must be built before the project is. Find a build order that will allow the
 * projects to be built. If there is no valid build order, return an error.
 * 
 * EXAMPLE
 * Input:
 *  projects: a, b, c, d, e, f
 *  dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
 * Output: f, e, a, b, d, c
 */

const Graph = require('./graph');

Graph.prototype.findNodeWithNoChildren = function() {
  for(let node in this.nodes) {
    if(Object.keys(this.nodes[node]).length === 0) {
      return node;
    }
  }
  return undefined;
}

const buildOrder = function(projects, dependencies) {
  let graph = new Graph;
  projects.forEach(project => {
    graph.addNode(project);
  });
  dependencies.forEach(dependency => {
    graph.addEdge(dependency[1], dependency[0]);
  });
  let output = [],
    currNode = graph.findNodeWithNoChildren();
  while (currNode) {
    output.push(currNode);
    graph.removeNode(currNode);
    currNode = graph.findNodeWithNoChildren();
  }
  if(output.length === projects.length) {
    return output;
  }
  throw new Error('No valid build order');
}