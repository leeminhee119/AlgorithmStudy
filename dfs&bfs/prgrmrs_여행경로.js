function solution(tickets) {
  const visited = [];
  const ticketGraph = {};
  for (ticket of tickets) {
    if (!Object.keys(ticketGraph).includes(ticket[0])) {
      ticketGraph[ticket[0]] = [];
    }
    ticketGraph[ticket[0]].push(ticket[1]);
    ticketGraph[ticket[0]].sort().reverse();
  }

  const stack = ["ICN"];

  while (stack.length > 0) {
    const current = stack.pop();
    visited.push(current);
    const destinations = ticketGraph[current];
    if (destinations) {
      destinations.forEach((dest) => {
        if (Object.keys(ticketGraph).includes(current)) {
          stack.push(dest);
        }
      });
    }
    delete ticketGraph[current];
  }
  return visited;
}
