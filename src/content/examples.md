---
title: Examples
description: Explore real-world examples and implementations using Graphbit
---

# Examples

This section provides real-world examples of how to use Graphbit to build AI agents and multi-agent systems. Each example includes complete code and explanations.

## Basic Examples

### Simple Chatbot

A basic conversational agent:

```typescript
import { Agent, Graph } from "graphbit";

const chatbot = new Agent({
  name: "chatbot",
  model: "gpt-3.5-turbo",
  instructions: `You are a friendly chatbot. Be helpful, concise, and engaging.
  
  Guidelines:
  - Keep responses under 100 words
  - Ask follow-up questions when appropriate
  - Be positive and encouraging
  - Admit when you don't know something`,
});

const graph = new Graph();
graph.addNode(chatbot);

// Usage
const response = await graph.run("Hello! How are you today?");
console.log(response.content);
```

### Research Assistant

An agent that can search the web and provide information:

```typescript
import { Agent, Graph } from "graphbit";
import { WebSearchTool } from "graphbit/tools";

const researcher = new Agent({
  name: "researcher",
  model: "gpt-4",
  instructions: `You are a research assistant. Your job is to:
  1. Search for current information on topics
  2. Provide accurate, well-sourced answers
  3. Cite your sources clearly
  4. Be thorough but concise`,
  tools: [new WebSearchTool()],
});

const graph = new Graph();
graph.addNode(researcher);

const result = await graph.run(
  "What are the latest developments in quantum computing?"
);
console.log(result.content);
```

## Intermediate Examples

### Content Analysis Pipeline

A multi-stage workflow for analyzing content:

```typescript
import { Agent, Graph } from "graphbit";
import { WebSearchTool, FileTool } from "graphbit/tools";

// Stage 1: Content Validator
const validator = new Agent({
  name: "validator",
  model: "gpt-4",
  instructions: "Validate that the input is appropriate content for analysis.",
});

// Stage 2: Content Analyzer
const analyzer = new Agent({
  name: "analyzer",
  model: "gpt-4",
  instructions: "Analyze the content for key themes, sentiment, and insights.",
  tools: [new WebSearchTool()],
});

// Stage 3: Report Generator
const reporter = new Agent({
  name: "reporter",
  model: "gpt-4",
  instructions: "Generate a comprehensive report based on the analysis.",
  tools: [new FileTool()],
});

// Build the pipeline
const pipeline = new Graph();
pipeline.addNode(validator);
pipeline.addNode(analyzer);
pipeline.addNode(reporter);

pipeline.addEdge(validator, analyzer);
pipeline.addEdge(analyzer, reporter);

// Usage
const result = await pipeline.run(`
  Analyze this article about artificial intelligence:
  
  Artificial intelligence has transformed industries worldwide...
`);
```

### Customer Service System

A multi-agent customer service system:

```typescript
import { Agent, Graph } from "graphbit";
import { WebSearchTool, HttpTool } from "graphbit/tools";

// Router agent
const router = new Agent({
  name: "router",
  model: "gpt-4",
  instructions: `Analyze customer inquiries and route them appropriately:
  - Technical issues → Technical Support
  - Billing questions → Billing Support
  - General questions → General Support
  - Complaints → Escalation Team`,
});

// Specialized agents
const technicalSupport = new Agent({
  name: "technical-support",
  model: "gpt-4",
  instructions: "Provide technical assistance and troubleshooting.",
  tools: [new WebSearchTool()],
});

const billingSupport = new Agent({
  name: "billing-support",
  model: "gpt-4",
  instructions: "Handle billing inquiries and payment issues.",
  tools: [new HttpTool()],
});

const generalSupport = new Agent({
  name: "general-support",
  model: "gpt-3.5-turbo",
  instructions: "Provide general customer service assistance.",
});

const escalation = new Agent({
  name: "escalation",
  model: "gpt-4",
  instructions: "Handle complex complaints and escalate when necessary.",
});

// Build the system
const customerService = new Graph();
customerService.addNode(router);
customerService.addNode(technicalSupport);
customerService.addNode(billingSupport);
customerService.addNode(generalSupport);
customerService.addNode(escalation);

// Conditional routing
customerService.addEdge(router, technicalSupport, {
  condition: (output) => output.includes("technical"),
});

customerService.addEdge(router, billingSupport, {
  condition: (output) => output.includes("billing"),
});

customerService.addEdge(router, generalSupport, {
  condition: (output) => output.includes("general"),
});

customerService.addEdge(router, escalation, {
  condition: (output) => output.includes("complaint"),
});

// Usage
const response = await customerService.run(`
  I'm having trouble logging into my account. 
  I keep getting an error message.
`);
```

## Advanced Examples

### Code Review System

A sophisticated system for reviewing code:

```typescript
import { Agent, Graph } from "graphbit";
import { FileTool, HttpTool } from "graphbit/tools";

// Code Analyzer
const codeAnalyzer = new Agent({
  name: "code-analyzer",
  model: "gpt-4",
  instructions: `Analyze code for:
  - Syntax errors
  - Logic issues
  - Performance problems
  - Security vulnerabilities
  - Best practice violations`,
  tools: [new FileTool()],
});

// Security Specialist
const securityExpert = new Agent({
  name: "security-expert",
  model: "gpt-4",
  instructions:
    "Focus specifically on security vulnerabilities and best practices.",
  tools: [new HttpTool()],
});

// Performance Optimizer
const performanceExpert = new Agent({
  name: "performance-expert",
  model: "gpt-4",
  instructions:
    "Analyze code for performance issues and suggest optimizations.",
});

// Report Aggregator
const reportAggregator = new Agent({
  name: "report-aggregator",
  model: "gpt-4",
  instructions:
    "Combine all analysis results into a comprehensive review report.",
  tools: [new FileTool()],
});

// Build the review system
const codeReview = new Graph();
codeReview.addNode(codeAnalyzer);
codeReview.addNode(securityExpert);
codeReview.addNode(performanceExpert);
codeReview.addNode(reportAggregator);

// Parallel analysis
codeReview.addEdge(codeAnalyzer, reportAggregator);
codeReview.addEdge(securityExpert, reportAggregator);
codeReview.addEdge(performanceExpert, reportAggregator);

// Usage
const review = await codeReview.run(`
  Please review this JavaScript code:
  
  function processData(data) {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  }
`);
```

### Data Analysis Workflow

A comprehensive data analysis system:

```typescript
import { Agent, Graph } from "graphbit";
import { WebSearchTool, FileTool, HttpTool } from "graphbit/tools";

// Data Collector
const dataCollector = new Agent({
  name: "data-collector",
  model: "gpt-4",
  instructions: "Collect and validate data from various sources.",
  tools: [new WebSearchTool(), new HttpTool()],
});

// Data Cleaner
const dataCleaner = new Agent({
  name: "data-cleaner",
  model: "gpt-4",
  instructions: "Clean and preprocess the collected data.",
});

// Statistical Analyzer
const statAnalyzer = new Agent({
  name: "statistical-analyzer",
  model: "gpt-4",
  instructions: "Perform statistical analysis on the cleaned data.",
});

// Pattern Recognizer
const patternRecognizer = new Agent({
  name: "pattern-recognizer",
  model: "gpt-4",
  instructions: "Identify patterns and trends in the data.",
});

// Insight Generator
const insightGenerator = new Agent({
  name: "insight-generator",
  model: "gpt-4",
  instructions: "Generate actionable insights from the analysis.",
  tools: [new FileTool()],
});

// Build the analysis workflow
const dataAnalysis = new Graph();
dataAnalysis.addNode(dataCollector);
dataAnalysis.addNode(dataCleaner);
dataAnalysis.addNode(statAnalyzer);
dataAnalysis.addNode(patternRecognizer);
dataAnalysis.addNode(insightGenerator);

// Sequential processing
dataAnalysis.addEdge(dataCollector, dataCleaner);
dataAnalysis.addEdge(dataCleaner, statAnalyzer);
dataAnalysis.addEdge(dataCleaner, patternRecognizer);
dataAnalysis.addEdge(statAnalyzer, insightGenerator);
dataAnalysis.addEdge(patternRecognizer, insightGenerator);

// Usage
const analysis = await dataAnalysis.run(`
  Analyze market trends for electric vehicles in 2024.
  Focus on sales data, consumer preferences, and technological advances.
`);
```

## Enterprise Examples

### Document Processing System

A system for processing and analyzing documents:

```typescript
import { Agent, Graph } from "graphbit";
import { FileTool, WebSearchTool } from "graphbit/tools";

// Document Processor
const docProcessor = new Agent({
  name: "document-processor",
  model: "gpt-4",
  instructions: "Extract and structure information from documents.",
  tools: [new FileTool()],
});

// Content Analyzer
const contentAnalyzer = new Agent({
  name: "content-analyzer",
  model: "gpt-4",
  instructions: "Analyze document content for key themes and insights.",
});

// Fact Checker
const factChecker = new Agent({
  name: "fact-checker",
  model: "gpt-4",
  instructions: "Verify facts and claims in the document.",
  tools: [new WebSearchTool()],
});

// Summary Generator
const summaryGenerator = new Agent({
  name: "summary-generator",
  model: "gpt-4",
  instructions: "Generate executive summaries and key takeaways.",
});

// Build the document processing system
const docSystem = new Graph();
docSystem.addNode(docProcessor);
docSystem.addNode(contentAnalyzer);
docSystem.addNode(factChecker);
docSystem.addNode(summaryGenerator);

// Parallel analysis
docSystem.addEdge(docProcessor, contentAnalyzer);
docSystem.addEdge(docProcessor, factChecker);
docSystem.addEdge(contentAnalyzer, summaryGenerator);
docSystem.addEdge(factChecker, summaryGenerator);

// Usage
const processed = await docSystem.run(`
  Process and analyze this research paper on climate change.
  Provide a summary with verified facts and key insights.
`);
```

### AI-Powered Chatbot with Memory

A sophisticated chatbot that remembers conversations:

```typescript
import { Agent, Graph } from "graphbit";
import { WebSearchTool, HttpTool } from "graphbit/tools";

// Conversation Manager
const conversationManager = new Agent({
  name: "conversation-manager",
  model: "gpt-4",
  instructions: "Manage conversation flow and context.",
  memory: {
    type: "conversation",
    maxMessages: 20,
    includeSystemPrompt: true,
  },
});

// Knowledge Base Agent
const knowledgeAgent = new Agent({
  name: "knowledge-agent",
  model: "gpt-4",
  instructions: "Provide accurate information from knowledge base.",
  tools: [new WebSearchTool()],
});

// Personalization Agent
const personalizationAgent = new Agent({
  name: "personalization-agent",
  model: "gpt-4",
  instructions: "Personalize responses based on user preferences and history.",
});

// Response Generator
const responseGenerator = new Agent({
  name: "response-generator",
  model: "gpt-4",
  instructions: "Generate final, personalized responses.",
  tools: [new HttpTool()],
});

// Build the chatbot system
const chatbot = new Graph();
chatbot.addNode(conversationManager);
chatbot.addNode(knowledgeAgent);
chatbot.addNode(personalizationAgent);
chatbot.addNode(responseGenerator);

// Complex flow
chatbot.addEdge(conversationManager, knowledgeAgent);
chatbot.addEdge(conversationManager, personalizationAgent);
chatbot.addEdge(knowledgeAgent, responseGenerator);
chatbot.addEdge(personalizationAgent, responseGenerator);

// Usage
const response = await chatbot.run(`
  User: Hi! I'm interested in learning about machine learning.
  Can you help me get started?
`);
```

## Best Practices from Examples

### 1. Modular Design

Break complex systems into focused, reusable components:

```typescript
// Good - modular agents
const validator = new Agent({ name: 'validator', ... });
const analyzer = new Agent({ name: 'analyzer', ... });
const reporter = new Agent({ name: 'reporter', ... });

// Avoid - monolithic agents
const doEverything = new Agent({
  name: 'do-everything',
  instructions: 'Validate, analyze, and report everything...'
});
```

### 2. Error Handling

Always include fallback mechanisms:

```typescript
const robustGraph = new Graph({
  errorHandling: {
    retryAttempts: 3,
    fallbackNode: "fallback-agent",
    timeout: 30000,
  },
});
```

### 3. Monitoring and Logging

Track system performance:

```typescript
const result = await graph.run(input);
console.log("Execution metrics:", result.metrics);
console.log("Token usage:", result.tokenUsage);
console.log("Success rate:", result.successRate);
```

### 4. Testing

Test your agents and graphs:

```typescript
// Test individual agents
const testResult = await agent.run("Test input");
assert(testResult.content.includes("expected output"));

// Test complete graphs
const graphResult = await graph.run("Test workflow");
assert(graphResult.success);
```

## Next Steps

Explore these examples to learn more:

- [Multi-Agent Systems](/multi-agent) - Building complex agent networks
- [Common Tools](/common-tools) - Available tools and utilities
- [Model Providers](/model-providers) - Configuring AI models
