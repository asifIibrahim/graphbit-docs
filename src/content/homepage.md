---
title: Getting Started with Graphbit
description: Build powerful AI agents and multi-agent systems with Graphbit
---

# Welcome to Graphbit

Graphbit is a modern, powerful framework for building AI agents and multi-agent systems. Whether you're creating simple chatbots or complex autonomous systems, Graphbit provides the tools and abstractions you need to succeed.

## What is Graphbit?

Graphbit is an agentic AI framework that makes it easy to:

- **Build AI Agents**: Create intelligent agents that can reason, plan, and execute tasks
- **Connect Agents**: Build complex workflows by connecting multiple agents together
- **Integrate Models**: Use any AI model provider (OpenAI, Anthropic, local models, etc.)
- **Scale Systems**: From simple scripts to enterprise-grade multi-agent systems

## Quick Start

Install Graphbit with npm:

```bash
npm install graphbit
```

Create your first agent:

```typescript
import { Agent, Graph } from "graphbit";

// Create a simple agent
const agent = new Agent({
  name: "assistant",
  model: "gpt-4",
  instructions: "You are a helpful assistant.",
});

// Create a graph to run the agent
const graph = new Graph();
graph.addNode(agent);

// Run the agent
const result = await graph.run("Hello, how can you help me?");
console.log(result);
```

## Core Concepts

### Agents

Agents are the building blocks of Graphbit. Each agent has:

- **Model**: The AI model to use (GPT-4, Claude, etc.)
- **Instructions**: System prompt that defines the agent's behavior
- **Tools**: Functions the agent can call to interact with the world
- **Memory**: Context and conversation history

### Graphs

Graphs connect agents together to create complex workflows:

- **Nodes**: Individual agents or tools
- **Edges**: Connections between nodes
- **Flow Control**: Conditional logic and loops
- **State Management**: Shared data between agents

### Model Providers

Graphbit supports multiple AI model providers:

- **OpenAI**: GPT-4, GPT-3.5-turbo
- **Anthropic**: Claude-3, Claude-2
- **Local Models**: Ollama, LM Studio
- **Custom Providers**: Bring your own models

## Key Features

### 🤖 Intelligent Agents

Create agents that can reason, plan, and execute complex tasks with natural language instructions.

### 🔗 Multi-Agent Systems

Connect multiple agents together to build sophisticated AI systems that can handle complex workflows.

### 🛠️ Rich Tool Integration

Give your agents access to tools like web search, file operations, API calls, and custom functions.

### 📊 Built-in Monitoring

Track agent performance, token usage, and system health with comprehensive logging and metrics.

### 🔒 Enterprise Ready

Security features, rate limiting, and deployment tools for production environments.

## Getting Help

- **Documentation**: Explore the guides in the sidebar
- **Examples**: Check out real-world implementations
- **Community**: Join our Discord for support and discussions
- **GitHub**: Report issues and contribute to the project

Ready to build your first AI agent? Start with the [Agents guide](/agents) to learn the fundamentals.
