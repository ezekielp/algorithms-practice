edges = [
    [0, 1],
    [0, 3],
    [1, 2],
    [3, 4],
    [3 ,7],
    [4, 5],
    [4, 6],
    [4, 7],
    [5, 6],
    [6, 7],
]

def build_adjacency_list(edges)
    graph = Hash.new { |h, k| h[k] = [] }
    edges.each do |e|
        graph[e[0]] << e[1]
        graph[e[1]] << e[0]
    end
    graph
end

def shortest_path(graph, source, dest, num_vertices)
    @predecessors = Array.new(num_vertices)
    @distances = Array.new(num_vertices)

    if BFS(graph, source, dest, num_vertices) == false
      return nil
    end

    path = [] # [7, 3, 0]
    crawl = dest # 3
    path << crawl 
    until @predecessors[crawl] == -1
        path << @predecessors[crawl]
        crawl = @predecessors[crawl]
    end

    path
end

def BFS(graph, source, dest, num_vertices) # 0, 7, 8
    queue = []
    visited = Array.new(num_vertices, false)
    # [true, true, true, true, true, false, false, true]
    @distances.fill(Float::INFINITY)
    # [0, 1, 2, 1, 2, inf, inf, 2]
    @predecessors.fill(-1)
    # [-1, 0, 1, 0, 3, -1, -1, 3]

    visited[source] = true
    @distances[source] = 0
    queue << source # [2, 4, 7]

    until queue.empty?
        current = queue.shift # 3
        graph[current].each do |e| # [7]
            unless visited[e]
                visited[e] = true
                @distances[e] = @distances[current] + 1
                @predecessors[e] = current
                queue << e

                return true if e == dest
            end
        end
    end

    false
end

graph = {
    0: [1, 3],
    1: [0, 2],
    2: [1],
    3: [0, 4, 7],
    4: [3, 5, 6, 7],
    5: [4, 6],
    6: [4, 5, 7],
    7: [3, 4, 6],
}

edges = [
    [0, 1],
    [0, 3],
    [1, 2],
    [3, 4],
    [3 ,7],
    [4, 5],
    [4, 6],
    [4, 7],
    [5, 6],
    [6, 7],
]

# 			for (int i = 0; i < adj.get(u).size(); i++) { 
# 				if (visited[adj.get(u).get(i)] == false) { 
# 					visited[adj.get(u).get(i)] = true; 
# 					dist[adj.get(u).get(i)] = dist[u] + 1; 
# 					pred[adj.get(u).get(i)] = u; 
# 					queue.add(adj.get(u).get(i)); 

# 					// stopping condition (when we find 
# 					// our destination) 
# 					if (adj.get(u).get(i) == dest) 
# 						return true; 
# 				} 
# 			} 
# 		} 
# 		return false; 
# 	} 
# } 
# // This code is contributed by Sahil Vaid 



# // Java program to find shortest path in an undirected 
# // graph 
# import java.util.ArrayList; 
# import java.util.Iterator; 
# import java.util.LinkedList; 

# public class pathUnweighted { 

# 	// Driver Program 
# 	public static void main(String args[]) 
# 	{ 
# 		// No of vertices 
# 		int v = 8; 

# 		// Adjacency list for storing which vertices are connected 
# 		ArrayList<ArrayList<Integer>> adj = 
# 							new ArrayList<ArrayList<Integer>>(v); 
# 		for (int i = 0; i < v; i++) { 
# 			adj.add(new ArrayList<Integer>()); 
# 		} 

# 		// Creating graph given in the above diagram. 
# 		// add_edge function takes adjacency list, source 
# 		// and destination vertex as argument and forms 
# 		// an edge between them. 
# 		addEdge(adj, 0, 1); 
# 		addEdge(adj, 0, 3); 
# 		addEdge(adj, 1, 2); 
# 		addEdge(adj, 3, 4); 
# 		addEdge(adj, 3, 7); 
# 		addEdge(adj, 4, 5); 
# 		addEdge(adj, 4, 6); 
# 		addEdge(adj, 4, 7); 
# 		addEdge(adj, 5, 6); 
# 		addEdge(adj, 6, 7); 
# 		int source = 0, dest = 7; 
# 		printShortestDistance(adj, source, dest, v); 
# 	} 

# 	// function to form edge between two vertices 
# 	// source and dest 
# 	private static void addEdge(ArrayList<ArrayList<Integer>> adj, int i, int j) 
# 	{ 
# 		adj.get(i).add(j); 
# 		adj.get(j).add(i); 
# 	} 

# 	// function to print the shortest distance and path 
# 	// between source vertex and destination vertex 
# 	private static void printShortestDistance( 
# 					ArrayList<ArrayList<Integer>> adj, 
# 							int s, int dest, int v) 
# 	{ 
# 		// predecessor[i] array stores predecessor of 
# 		// i and distance array stores distance of i 
# 		// from s 
# 		int pred[] = new int[v]; 
# 		int dist[] = new int[v]; 

# 		if (BFS(adj, s, dest, v, pred, dist) == false) { 
# 			System.out.println("Given source and destination" + 
# 										"are not connected"); 
# 			return; 
# 		} 

# 		// LinkedList to store path 
# 		LinkedList<Integer> path = new LinkedList<Integer>(); 
# 		int crawl = dest; 
# 		path.add(crawl); 
# 		while (pred[crawl] != -1) { 
# 			path.add(pred[crawl]); 
# 			crawl = pred[crawl]; 
# 		} 

# 		// Print distance 
# 		System.out.println("Shortest path length is: " + dist[dest]); 

# 		// Print path 
# 		System.out.println("Path is ::"); 
# 		for (int i = path.size() - 1; i >= 0; i--) { 
# 			System.out.print(path.get(i) + " "); 
# 		} 
# 	} 

# 	// a modified version of BFS that stores predecessor 
# 	// of each vertex in array pred 
# 	// and its distance from source in array dist 
# 	private static boolean BFS(ArrayList<ArrayList<Integer>> adj, int src, 
# 								int dest, int v, int pred[], int dist[]) 
# 	{ 
# 		// a queue to maintain queue of vertices whose 
# 		// adjacency list is to be scanned as per normal 
# 		// BFS algorithm using LinkedList of Integer type 
# 		LinkedList<Integer> queue = new LinkedList<Integer>(); 

# 		// boolean array visited[] which stores the 
# 		// information whether ith vertex is reached 
# 		// at least once in the Breadth first search 
# 		boolean visited[] = new boolean[v]; 

# 		// initially all vertices are unvisited 
# 		// so v[i] for all i is false 
# 		// and as no path is yet constructed 
# 		// dist[i] for all i set to infinity 
# 		for (int i = 0; i < v; i++) { 
# 			visited[i] = false; 
# 			dist[i] = Integer.MAX_VALUE; 
# 			pred[i] = -1; 
# 		} 

# 		// now source is first to be visited and 
# 		// distance from source to itself should be 0 
# 		visited[src] = true; 
# 		dist[src] = 0; 
# 		queue.add(src); 

# 		// bfs Algorithm 
# 		while (!queue.isEmpty()) { 
# 			int u = queue.remove(); 
# 			for (int i = 0; i < adj.get(u).size(); i++) { 
# 				if (visited[adj.get(u).get(i)] == false) { 
# 					visited[adj.get(u).get(i)] = true; 
# 					dist[adj.get(u).get(i)] = dist[u] + 1; 
# 					pred[adj.get(u).get(i)] = u; 
# 					queue.add(adj.get(u).get(i)); 

# 					// stopping condition (when we find 
# 					// our destination) 
# 					if (adj.get(u).get(i) == dest) 
# 						return true; 
# 				} 
# 			} 
# 		} 
# 		return false; 
# 	} 
# } 
# // This code is contributed by Sahil Vaid 
