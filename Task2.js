/**
 * Function to check if there is a path for the rat to reach the destination.
 * @param {number[][]} maze - The maze represented as an NxN grid.
 * @param {number} N - The size of the maze (N x N).
 * @returns {boolean} - True if there is a path, otherwise false.
 */
function isPathInMaze(maze, N) {
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    return solveMaze(maze, 0, 0, visited, N);
}

/**
 * Helper function to perform backtracking.
 * @param {number[][]} maze - The maze grid.
 * @param {number} x - Current x position.
 * @param {number} y - Current y position.
 * @param {boolean[][]} visited - Visited cells matrix.
 * @param {number} N - Size of the maze.
 * @returns {boolean} - True if a path to destination is found.
 */
function solveMaze(maze, x, y, visited, N) {
    if (x === N - 1 && y === N - 1 && maze[x][y] === 1) {
        return true;
    }

    if (isSafe(maze, x, y, visited, N)) {
        visited[x][y] = true;

        // Move down (D)
        if (solveMaze(maze, x + 1, y, visited, N)) return true;

        // Move right (R)
        if (solveMaze(maze, x, y + 1, visited, N)) return true;

        // Move up (U)
        if (solveMaze(maze, x - 1, y, visited, N)) return true;

        // Move left (L)
        if (solveMaze(maze, x, y - 1, visited, N)) return true;

        visited[x][y] = false; // Backtrack
    }
    return false;
}

/**
 * Check if the current cell is safe to visit.
 * @param {number[][]} maze - The maze grid.
 * @param {number} x - Current x position.
 * @param {number} y - Current y position.
 * @param {boolean[][]} visited - Visited cells matrix.
 * @param {number} N - Size of the maze.
 * @returns {boolean} - True if the cell is safe to visit.
 */
function isSafe(maze, x, y, visited, N) {
    return (x >= 0 && x < N && y >= 0 && y < N && maze[x][y] === 1 && !visited[x][y]);
}

// Example usage
const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1]
];
console.log(isPathInMaze(maze, 4)); // Output: true


/**
 * 
 * Approach
 * We will use backtracking to explore all possible paths from (0, 0) to (N-1, N-1):

 * If the current cell is blocked or out of bounds, return false.
 * Otherwise, recursively try all four possible directions (U, D, L, R).
 * Use a visited matrix to ensure that no cell is visited more than once.
 * If we reach the destination (N-1, N-1), return true.
 * 
 * 
 * Time complexity: O(4^(N^2)), as there are 4 possible moves (U, D, L, R) from each cell and we explore each possibility.
 * Space complexity: O(N^2), due to the recursion stack and visited matrix.
 * 
 */