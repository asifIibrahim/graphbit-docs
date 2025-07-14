---
title: Model Context
description: Learn about model context management in Graphbit
---

# Model Context

Model context management is a crucial aspect of building effective AI agents in Graphbit. This guide covers how to manage and optimize context for your AI models.

## What is Model Context?

Model context refers to the information that is provided to an AI model to help it understand the current situation and generate appropriate responses. This includes:

- **Conversation History**: Previous messages in a conversation
- **System Instructions**: The agent's role and behavior guidelines
- **Relevant Information**: Current data, facts, or context needed for the task
- **Tool Results**: Output from tools that the agent has used

## Basic Context Management

### Simple Context

The most basic form of context is the conversation history:

```typescript
import { Agent } from "graphbit";

const agent = new Agent({
  name: "conversational",
  model: "gpt-4",
  instructions: "You are a helpful assistant.",
  memory: {
    type: "conversation",
    maxMessages: 10,
  },
});
```

### Context with Tools

When agents use tools, the tool results become part of the context:

```typescript
import { WebSearchTool } from "graphbit/tools";

const agent = new Agent({
  name: "researcher",
  model: "gpt-4",
  instructions: "Research topics and provide information.",
  tools: [new WebSearchTool()],
  memory: {
    type: "conversation",
    includeToolResults: true,
  },
});
```

## Advanced Context Features

### Context Window Management

Manage the context window to stay within model limits:

```typescript
const agent = new Agent({
  name: "context-managed",
  model: "gpt-4",
  instructions: "You are a helpful assistant.",
  memory: {
    type: "conversation",
    maxTokens: 8000,
    strategy: "sliding-window", // or 'summarization'
  },
});
```

### Context Summarization

Automatically summarize long conversations:

```typescript
const agent = new Agent({
  name: "summarizing",
  model: "gpt-4",
  instructions: "You are a helpful assistant.",
  memory: {
    type: "conversation",
    maxMessages: 20,
    summarization: {
      enabled: true,
      threshold: 15, // Summarize after 15 messages
      strategy: "key-points",
    },
  },
});
```

## Context Optimization

### Relevant Information Extraction

Extract only relevant information for the current task:

```typescript
const agent = new Agent({
  name: "focused",
  model: "gpt-4",
  instructions: "Focus on the current task.",
  memory: {
    type: "conversation",
    relevanceFilter: true,
    maxRelevantMessages: 5,
  },
});
```

### Context Compression

Compress context to fit within model limits:

```typescript
const agent = new Agent({
  name: "compressed",
  model: "gpt-4",
  instructions: "You are a helpful assistant.",
  memory: {
    type: "conversation",
    compression: {
      enabled: true,
      method: "semantic-compression",
      targetRatio: 0.7,
    },
  },
});
```

## Multi-Agent Context

### Shared Context

Share context between multiple agents:

```typescript
import { Graph } from "graphbit";

const graph = new Graph({
  sharedContext: {
    enabled: true,
    storage: "memory", // or 'database'
    maxSize: 1000,
  },
});

const agent1 = new Agent({
  name: "agent-1",
  model: "gpt-4",
  instructions: "Process information and share context.",
});

const agent2 = new Agent({
  name: "agent-2",
  model: "gpt-4",
  instructions: "Use shared context to continue processing.",
});

graph.addNode(agent1);
graph.addNode(agent2);
graph.addEdge(agent1, agent2);
```

### Context Routing

Route context to appropriate agents:

```typescript
const router = new Agent({
  name: "context-router",
  model: "gpt-4",
  instructions: "Route context to appropriate specialists.",
});

const specialist1 = new Agent({
  name: "specialist-1",
  model: "gpt-4",
  instructions: "Handle technical context.",
});

const specialist2 = new Agent({
  name: "specialist-2",
  model: "gpt-4",
  instructions: "Handle creative context.",
});

// Context is automatically routed based on content
```

## Context Best Practices

### 1. Keep Context Relevant

Only include information that's relevant to the current task:

```typescript
const agent = new Agent({
  name: "relevant",
  model: "gpt-4",
  instructions: "Focus on the current task.",
  memory: {
    type: "conversation",
    relevanceThreshold: 0.7,
  },
});
```

### 2. Manage Context Size

Stay within model context limits:

```typescript
const agent = new Agent({
  name: "sized",
  model: "gpt-4",
  instructions: "You are a helpful assistant.",
  memory: {
    type: "conversation",
    maxTokens: 6000, // Leave room for response
    strategy: "priority-queue",
  },
});
```

### 3. Use Context Hierarchies

Organize context by importance:

```typescript
const agent = new Agent({
  name: "hierarchical",
  model: "gpt-4",
  instructions: "You are a helpful assistant.",
  memory: {
    type: "conversation",
    hierarchy: {
      critical: 3, // Always include last 3 messages
      important: 7, // Include last 7 messages if space
      optional: 10, // Include up to 10 more if available
    },
  },
});
```

## Context Monitoring

### Track Context Usage

Monitor how context is being used:

```typescript
const agent = new Agent({
  name: "monitored",
  model: "gpt-4",
  instructions: "You are a helpful assistant.",
  memory: {
    type: "conversation",
    monitoring: {
      enabled: true,
      trackUsage: true,
      alertThreshold: 0.8, // Alert when 80% of context used
    },
  },
});

// Check context usage
const usage = await agent.getContextUsage();
console.log("Context usage:", usage.percentage);
```

### Context Analytics

Analyze context patterns:

```typescript
const agent = new Agent({
  name: "analytics",
  model: "gpt-4",
  instructions: "You are a helpful assistant.",
  memory: {
    type: "conversation",
    analytics: {
      enabled: true,
      trackPatterns: true,
      generateInsights: true,
    },
  },
});
```

## Next Steps

Now that you understand model context, explore:

- [Agents](/agents) - Building agents with proper context management
- [Multi-Agent Systems](/multi-agent) - Managing context across multiple agents
- [Examples](/examples) - Real-world context management examples
