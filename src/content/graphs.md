---
title: Graphs
description: Learn how to connect agents and build complex workflows with Graphbit graphs
---

# Graphs

Graphs are the foundation for building complex AI workflows in Graphbit. They allow you to connect multiple agents and tools together to create sophisticated systems that can handle complex tasks.

## What are Graphs?

A graph is a collection of nodes (agents and tools) connected by edges that define the flow of data and control. Think of it as a visual representation of your AI workflow.

## Creating a Graph

Start with a simple graph:

```typescript
import { Graph, Agent } from "graphbit";

const graph = new Graph({
  name: "my-workflow",
});
```

## Adding Nodes

Nodes can be agents, tools, or custom functions:

```typescript
// Add agents
const agent1 = new Agent({
  name: "analyzer",
  model: "gpt-4",
  instructions: "Analyze the input and extract key information.",
});

const agent2 = new Agent({
  name: "summarizer",
  model: "gpt-4",
  instructions: "Create a concise summary of the analysis.",
});

// Add them to the graph
graph.addNode(agent1);
graph.addNode(agent2);
```

## Connecting Nodes

Create edges to define the flow:

```typescript
// Connect agent1 to agent2
graph.addEdge(agent1, agent2);

// Or connect with a condition
graph.addEdge(agent1, agent2, {
  condition: (output) => output.length > 100,
});
```

## Running a Graph

Execute the entire workflow:

```typescript
const result = await graph.run("Analyze this document and provide a summary");
console.log(result);
```

## Graph Types

### Linear Graph

The simplest type - nodes in sequence:

```typescript
const linearGraph = new Graph();

const inputProcessor = new Agent({
  name: "input-processor",
  model: "gpt-4",
  instructions: "Process and validate the input.",
});

const analyzer = new Agent({
  name: "analyzer",
  model: "gpt-4",
  instructions: "Analyze the processed input.",
});

const outputGenerator = new Agent({
  name: "output-generator",
  model: "gpt-4",
  instructions: "Generate the final output.",
});

// Linear flow
linearGraph.addNode(inputProcessor);
linearGraph.addNode(analyzer);
linearGraph.addNode(outputGenerator);

linearGraph.addEdge(inputProcessor, analyzer);
linearGraph.addEdge(analyzer, outputGenerator);
```

### Parallel Graph

Run multiple nodes simultaneously:

```typescript
const parallelGraph = new Graph();

const researchAgent = new Agent({
  name: "researcher",
  model: "gpt-4",
  instructions: "Research the topic.",
  tools: [new WebSearchTool()],
});

const factChecker = new Agent({
  name: "fact-checker",
  model: "gpt-4",
  instructions: "Verify facts and claims.",
});

const summarizer = new Agent({
  name: "summarizer",
  model: "gpt-4",
  instructions: "Combine and summarize all findings.",
});

parallelGraph.addNode(researchAgent);
parallelGraph.addNode(factChecker);
parallelGraph.addNode(summarizer);

// Both research and fact-checking happen in parallel
parallelGraph.addEdge(researchAgent, summarizer);
parallelGraph.addEdge(factChecker, summarizer);
```

### Conditional Graph

Make decisions based on output:

```typescript
const conditionalGraph = new Graph();

const router = new Agent({
  name: "router",
  model: "gpt-4",
  instructions: "Determine the type of request and route accordingly.",
});

const technicalAgent = new Agent({
  name: "technical",
  model: "gpt-4",
  instructions: "Handle technical questions.",
});

const creativeAgent = new Agent({
  name: "creative",
  model: "gpt-4",
  instructions: "Handle creative requests.",
});

const generalAgent = new Agent({
  name: "general",
  model: "gpt-4",
  instructions: "Handle general questions.",
});

conditionalGraph.addNode(router);
conditionalGraph.addNode(technicalAgent);
conditionalGraph.addNode(creativeAgent);
conditionalGraph.addNode(generalAgent);

// Conditional routing
conditionalGraph.addEdge(router, technicalAgent, {
  condition: (output) => output.includes("technical"),
});

conditionalGraph.addEdge(router, creativeAgent, {
  condition: (output) => output.includes("creative"),
});

conditionalGraph.addEdge(router, generalAgent, {
  condition: (output) =>
    !output.includes("technical") && !output.includes("creative"),
});
```

## Advanced Graph Features

### State Management

Share data between nodes:

```typescript
const graph = new Graph({
  initialState: {
    userPreferences: {},
    sessionData: {},
  },
});

const preferenceAgent = new Agent({
  name: "preference-collector",
  model: "gpt-4",
  instructions: "Extract user preferences from the conversation.",
});

const personalizedAgent = new Agent({
  name: "personalized-assistant",
  model: "gpt-4",
  instructions: "Provide personalized responses based on user preferences.",
});

graph.addNode(preferenceAgent);
graph.addNode(personalizedAgent);
graph.addEdge(preferenceAgent, personalizedAgent);

// State is automatically passed between nodes
const result = await graph.run("I prefer concise explanations");
```

### Error Handling

Handle failures gracefully:

```typescript
const robustGraph = new Graph({
  errorHandling: {
    retryAttempts: 3,
    fallbackNode: "fallback-agent",
    logErrors: true,
  },
});

const fallbackAgent = new Agent({
  name: "fallback-agent",
  model: "gpt-3.5-turbo",
  instructions: "Provide a basic response when other agents fail.",
});

robustGraph.addNode(fallbackAgent);
```

### Monitoring and Logging

Track graph execution:

```typescript
const monitoredGraph = new Graph({
  monitoring: {
    enableMetrics: true,
    logLevel: "info",
    trackPerformance: true,
  },
});

// Access execution data
const result = await monitoredGraph.run("Process this request");
console.log("Execution time:", result.metrics.executionTime);
console.log("Token usage:", result.metrics.tokenUsage);
```

## Graph Patterns

### Pipeline Pattern

Process data through multiple stages:

```typescript
const pipeline = new Graph();

const stages = [
  new Agent({
    name: "input-validation",
    model: "gpt-4",
    instructions: "Validate input format.",
  }),
  new Agent({
    name: "data-enrichment",
    model: "gpt-4",
    instructions: "Enrich data with additional context.",
  }),
  new Agent({
    name: "analysis",
    model: "gpt-4",
    instructions: "Perform detailed analysis.",
  }),
  new Agent({
    name: "output-formatting",
    model: "gpt-4",
    instructions: "Format the final output.",
  }),
];

stages.forEach((stage) => pipeline.addNode(stage));

// Connect in sequence
for (let i = 0; i < stages.length - 1; i++) {
  pipeline.addEdge(stages[i], stages[i + 1]);
}
```

### Fan-out/Fan-in Pattern

Split work across multiple agents, then combine results:

```typescript
const fanGraph = new Graph();

const coordinator = new Agent({
  name: "coordinator",
  model: "gpt-4",
  instructions: "Break down the task into subtasks.",
});

const workers = [
  new Agent({
    name: "worker-1",
    model: "gpt-4",
    instructions: "Process subtask 1.",
  }),
  new Agent({
    name: "worker-2",
    model: "gpt-4",
    instructions: "Process subtask 2.",
  }),
  new Agent({
    name: "worker-3",
    model: "gpt-4",
    instructions: "Process subtask 3.",
  }),
];

const aggregator = new Agent({
  name: "aggregator",
  model: "gpt-4",
  instructions: "Combine results from all workers.",
});

// Fan out
fanGraph.addNode(coordinator);
workers.forEach((worker) => {
  fanGraph.addNode(worker);
  fanGraph.addEdge(coordinator, worker);
});

// Fan in
workers.forEach((worker) => {
  fanGraph.addEdge(worker, aggregator);
});
```

### Decision Tree Pattern

Make complex decisions with multiple paths:

```typescript
const decisionGraph = new Graph();

const decisionNode = new Agent({
  name: "decision-maker",
  model: "gpt-4",
  instructions: "Analyze the request and determine the appropriate action.",
});

const actionA = new Agent({
  name: "action-a",
  model: "gpt-4",
  instructions: "Execute action A.",
});

const actionB = new Agent({
  name: "action-b",
  model: "gpt-4",
  instructions: "Execute action B.",
});

const actionC = new Agent({
  name: "action-c",
  model: "gpt-4",
  instructions: "Execute action C.",
});

decisionGraph.addNode(decisionNode);
decisionGraph.addNode(actionA);
decisionGraph.addNode(actionB);
decisionGraph.addNode(actionC);

// Conditional edges
decisionGraph.addEdge(decisionNode, actionA, {
  condition: (output) => output.includes("action-a"),
});

decisionGraph.addEdge(decisionNode, actionB, {
  condition: (output) => output.includes("action-b"),
});

decisionGraph.addEdge(decisionNode, actionC, {
  condition: (output) => output.includes("action-c"),
});
```

## Best Practices

### 1. Keep Graphs Focused

Each graph should have a single, clear purpose:

```typescript
// Good - focused graph
const customerServiceGraph = new Graph({
  name: "customer-service-workflow",
});

// Avoid - trying to do everything
const everythingGraph = new Graph({
  name: "do-everything",
});
```

### 2. Use Meaningful Node Names

Make your graphs self-documenting:

```typescript
// Good
const inputValidator = new Agent({
  name: "input-validator",
  // ...
});

// Avoid
const agent1 = new Agent({
  name: "agent1",
  // ...
});
```

### 3. Handle Edge Cases

Consider what happens when things go wrong:

```typescript
const graph = new Graph({
  errorHandling: {
    retryAttempts: 2,
    fallbackNode: "error-handler",
    timeout: 30000,
  },
});
```

### 4. Monitor Performance

Track execution metrics:

```typescript
const result = await graph.run(input);

// Monitor key metrics
console.log("Execution time:", result.metrics.executionTime);
console.log("Token usage:", result.metrics.tokenUsage);
console.log("Success rate:", result.metrics.successRate);
```

## Next Steps

Now that you understand graphs, explore:

- [Multi-Agent Systems](/multi-agent) - Building complex agent networks
- [Examples](/examples) - Real-world graph implementations
- [Model Providers](/model-providers) - Configuring your AI models
