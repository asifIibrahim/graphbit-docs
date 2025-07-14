---
title: Agents
description: Learn how to create and configure AI agents in Graphbit
---

# Agents

Agents are the core building blocks of Graphbit. They represent intelligent entities that can reason, plan, and execute tasks using AI models.

## Creating an Agent

The basic way to create an agent is with the `Agent` class:

```typescript
import { Agent } from "graphbit";

const agent = new Agent({
  name: "assistant",
  model: "gpt-4",
  instructions: "You are a helpful AI assistant.",
});
```

## Agent Configuration

### Required Properties

- **name**: Unique identifier for the agent
- **model**: The AI model to use (e.g., 'gpt-4', 'claude-3-sonnet')
- **instructions**: System prompt that defines the agent's behavior

### Optional Properties

- **tools**: Array of tools the agent can use
- **memory**: Memory configuration for conversation history
- **temperature**: Controls randomness (0.0 to 1.0)
- **maxTokens**: Maximum tokens in response
- **provider**: Model provider configuration

## Agent Types

### Basic Agent

A simple agent with just a model and instructions:

```typescript
const basicAgent = new Agent({
  name: "chatbot",
  model: "gpt-3.5-turbo",
  instructions: "You are a friendly chatbot that helps users with questions.",
});
```

### Tool-Enabled Agent

An agent with access to tools:

```typescript
import { WebSearchTool, FileTool } from "graphbit/tools";

const toolAgent = new Agent({
  name: "researcher",
  model: "gpt-4",
  instructions:
    "You are a research assistant. Use available tools to find information.",
  tools: [new WebSearchTool(), new FileTool()],
});
```

### Specialized Agent

An agent designed for specific tasks:

```typescript
const codeAgent = new Agent({
  name: "code-reviewer",
  model: "gpt-4",
  instructions: `You are a senior software engineer who reviews code.
  
  Your responsibilities:
  - Review code for bugs and issues
  - Suggest improvements and optimizations
  - Ensure code follows best practices
  - Provide clear, actionable feedback
  
  Always be constructive and specific in your feedback.`,
  temperature: 0.1, // More deterministic for code review
  maxTokens: 2000,
});
```

## Agent Memory

Agents can maintain conversation history and context:

```typescript
const agentWithMemory = new Agent({
  name: "conversational",
  model: "gpt-4",
  instructions: "You are a helpful assistant.",
  memory: {
    type: "conversation",
    maxMessages: 10,
    includeSystemPrompt: true,
  },
});
```

## Running Agents

### Direct Execution

Run an agent directly:

```typescript
const response = await agent.run("What is the weather like today?");
console.log(response.content);
```

### In a Graph

Connect agents in a workflow:

```typescript
import { Graph } from "graphbit";

const graph = new Graph();

// Add agents to the graph
graph.addNode(agent1);
graph.addNode(agent2);

// Connect them
graph.addEdge(agent1, agent2);

// Run the graph
const result = await graph.run("Process this request");
```

## Agent Tools

Tools extend an agent's capabilities:

### Built-in Tools

```typescript
import {
  WebSearchTool,
  FileTool,
  HttpTool,
  CalculatorTool,
} from "graphbit/tools";

const agent = new Agent({
  name: "assistant",
  model: "gpt-4",
  instructions:
    "You can search the web, read files, make HTTP requests, and perform calculations.",
  tools: [
    new WebSearchTool(),
    new FileTool(),
    new HttpTool(),
    new CalculatorTool(),
  ],
});
```

### Custom Tools

Create your own tools:

```typescript
import { Tool } from "graphbit";

class WeatherTool extends Tool {
  name = "get_weather";
  description = "Get current weather for a location";

  parameters = {
    type: "object",
    properties: {
      location: {
        type: "string",
        description: "City name or coordinates",
      },
    },
    required: ["location"],
  };

  async execute({ location }) {
    // Implement weather API call
    const weather = await fetchWeather(location);
    return `Weather in ${location}: ${weather.description}`;
  }
}

const agent = new Agent({
  name: "weather-assistant",
  model: "gpt-4",
  instructions: "You help users get weather information.",
  tools: [new WeatherTool()],
});
```

## Agent Best Practices

### 1. Clear Instructions

Write specific, actionable instructions:

```typescript
// Good
instructions: `You are a customer service agent. Your role:
- Greet customers warmly
- Listen to their concerns
- Provide helpful solutions
- Escalate complex issues
- Always be polite and professional`;

// Avoid vague instructions
instructions: "Be helpful";
```

### 2. Appropriate Model Selection

Choose models based on your needs:

- **GPT-3.5-turbo**: Good for simple tasks, cost-effective
- **GPT-4**: Better reasoning, more expensive
- **Claude-3**: Strong reasoning, good for analysis
- **Local models**: Privacy, offline capability

### 3. Tool Selection

Only include tools your agent actually needs:

```typescript
// Good - focused toolset
tools: [new WebSearchTool(), new CalculatorTool()];

// Avoid - unnecessary tools
tools: [
  new WebSearchTool(),
  new FileTool(),
  new HttpTool(),
  new CalculatorTool(),
  new DatabaseTool(),
];
```

### 4. Error Handling

Handle potential failures gracefully:

```typescript
const agent = new Agent({
  name: "robust-agent",
  model: "gpt-4",
  instructions: `You are a helpful assistant. If you encounter errors:
  1. Acknowledge the issue
  2. Suggest alternatives
  3. Ask for clarification if needed
  4. Never make up information`,
  maxRetries: 3,
  timeout: 30000,
});
```

## Advanced Agent Features

### Conditional Logic

Agents can make decisions based on input:

```typescript
const routerAgent = new Agent({
  name: "router",
  model: "gpt-4",
  instructions: `Analyze the user's request and determine the best agent to handle it.
  
  Route to:
  - 'technical' for code/technical questions
  - 'creative' for writing/creative tasks
  - 'research' for information gathering
  - 'general' for everything else`,
});
```

### Agent Composition

Combine multiple agents for complex tasks:

```typescript
const planner = new Agent({
  name: "planner",
  model: "gpt-4",
  instructions: "Break down complex tasks into steps",
});

const executor = new Agent({
  name: "executor",
  model: "gpt-4",
  instructions: "Execute specific tasks",
  tools: [new WebSearchTool(), new FileTool()],
});

const reviewer = new Agent({
  name: "reviewer",
  model: "gpt-4",
  instructions: "Review and validate results",
});
```

## Next Steps

Now that you understand agents, learn about:

- [Graphs](/graphs) - Connecting agents together
- [Model Providers](/model-providers) - Configuring AI models
- [Examples](/examples) - Real-world agent implementations
