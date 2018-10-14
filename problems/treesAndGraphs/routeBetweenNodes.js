/**Route between nodes
 * Given a directed graph, design an alogrithm to find out whether there is
 * a route between two nodes.
 */
const Graph = require('./graph.js');
const Queue = require('../stacksAndQueues/queue.js');

//concurrent BFS on both sides of the tree
const routeExists = (val1, val2, graph) => {
  let queue1 = new Queue,
    queue2 = new Queue,
    visited1 = {},
    visited2 = {};
  visited1[val1] = true;
  visited2[val2] = true;
  if (graph.hasNode(val1)) {
    for (const edge in graph.findEdges(val1)) {
      queue1.enqueue(edge);
    }
  }
  if (graph.hasNode(val2)) {
    for (const edge in graph.findEdges(val2)) {
      queue2.enqueue(edge);
    }
  }

  let nextEdge1,
    nextEdge2;
  while (!queue1.isEmpty() || !queue2.isEmpty()) {
    if (!queue1.isEmpty()) {
      nextEdge1 = queue1.dequeue();
      if (nextEdge1 === val2) {
        return true;
      }
      if (!visited1[nextEdge1]) {
        visited1[nextEdge1] = true;
        if (graph.hasNode(nextEdge1)) {
          for (const edge in graph.findEdges(nextEdge1)) {
            queue1.enqueue(edge);
          }
        }
      }
    }
    if (!queue2.isEmpty()) {
      nextEdge2 = queue2.dequeue();
      if (nextEdge2 === val1) {
        return true;
      }
      if (!visited2[nextEdge2]) {
        visited2[nextEdge2] = true;
        if (graph.hasNode(nextEdge2)) {
          for (const edge in graph.findEdges(nextEdge2)) {
            queue2.enqueue(edge);
          }
        }
      }
    }
  }
  return false;
}