---
title: Model Providers
description: Learn how to configure and use different AI model providers in Graphbit
---

# Model Providers

Graphbit supports multiple AI model providers, allowing you to choose the best model for your specific use case. This guide covers how to configure and use different providers.

## Supported Providers

### OpenAI

The most popular provider with models like GPT-4 and GPT-3.5-turbo:

```typescript
import { Agent } from "graphbit";

const agent = new Agent({
  name: "openai-agent",
  model: "gpt-4",
  provider: {
    type: "openai",
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://api.openai.com/v1", // Optional
  },
});
```

**Available Models:**

- `gpt-4` - Most capable, best for complex reasoning
- `gpt-4-turbo` - Faster, more cost-effective
- `gpt-3.5-turbo` - Good balance of capability and cost
- `gpt-3.5-turbo-16k` - Longer context window

### Anthropic

Claude models with strong reasoning capabilities:

```typescript
const agent = new Agent({
  name: "claude-agent",
  model: "claude-3-sonnet-20240229",
  provider: {
    type: "anthropic",
    apiKey: process.env.ANTHROPIC_API_KEY,
  },
});
```

**Available Models:**

- `claude-3-opus-20240229` - Most capable
- `claude-3-sonnet-20240229` - Balanced performance
- `claude-3-haiku-20240307` - Fast and cost-effective

### Local Models

Run models locally for privacy and offline capability:

```typescript
const agent = new Agent({
  name: "local-agent",
  model: "llama2:7b",
  provider: {
    type: "ollama",
    baseURL: "http://localhost:11434",
  },
});
```

**Supported Local Providers:**

- **Ollama**: Easy local model deployment
- **LM Studio**: GUI-based local model management
- **Custom**: Bring your own model server

## Provider Configuration

### Environment Variables

Set up your API keys securely:

```bash
# .env file
OPENAI_API_KEY=sk-your-openai-key
ANTHROPIC_API_KEY=sk-ant-your-anthropic-key
```

### Provider Options

Each provider supports different configuration options:

```typescript
// OpenAI with custom configuration
const openaiAgent = new Agent({
  name: "custom-openai",
  model: "gpt-4",
  provider: {
    type: "openai",
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://api.openai.com/v1",
    timeout: 30000,
    maxRetries: 3,
  },
});

// Anthropic with custom settings
const claudeAgent = new Agent({
  name: "custom-claude",
  model: "claude-3-sonnet-20240229",
  provider: {
    type: "anthropic",
    apiKey: process.env.ANTHROPIC_API_KEY,
    timeout: 60000,
    maxRetries: 2,
  },
});

// Local Ollama with specific model
const localAgent = new Agent({
  name: "local-llama",
  model: "llama2:13b",
  provider: {
    type: "ollama",
    baseURL: "http://localhost:11434",
    timeout: 120000, // Longer timeout for local models
  },
});
```

## Model Selection Guide

### For Simple Tasks

Use faster, more cost-effective models:

```typescript
const simpleAgent = new Agent({
  name: "simple",
  model: "gpt-3.5-turbo", // Fast and cheap
  instructions: "Answer simple questions concisely.",
});
```

### For Complex Reasoning

Use more capable models:

```typescript
const reasoningAgent = new Agent({
  name: "reasoning",
  model: "gpt-4", // Better reasoning
  instructions: "Solve complex problems step by step.",
});
```

### For Creative Tasks

Use models with strong creative capabilities:

```typescript
const creativeAgent = new Agent({
  name: "creative",
  model: "claude-3-sonnet-20240229", // Strong creative abilities
  instructions: "Generate creative content and ideas.",
});
```

### For Privacy-Sensitive Tasks

Use local models:

```typescript
const privateAgent = new Agent({
  name: "private",
  model: "llama2:7b",
  provider: {
    type: "ollama",
    baseURL: "http://localhost:11434",
  },
  instructions: "Process sensitive data locally.",
});
```

## Advanced Configuration

### Custom Model Providers

Create your own model provider:

```typescript
import { ModelProvider } from "graphbit";

class CustomProvider extends ModelProvider {
  async generate(prompt: string, options: any) {
    // Implement your custom model logic
    const response = await fetch("your-model-endpoint", {
      method: "POST",
      headers: { Authorization: `Bearer ${this.apiKey}` },
      body: JSON.stringify({ prompt, ...options }),
    });

    return response.json();
  }
}

const customAgent = new Agent({
  name: "custom",
  model: "custom-model",
  provider: new CustomProvider({
    apiKey: process.env.CUSTOM_API_KEY,
  }),
});
```

### Model Switching

Switch models based on task requirements:

```typescript
const adaptiveAgent = new Agent({
  name: "adaptive",
  model: "gpt-4", // Default model
  provider: {
    type: "openai",
    apiKey: process.env.OPENAI_API_KEY,
    modelSelector: (task) => {
      if (task.includes("creative")) return "gpt-4";
      if (task.includes("simple")) return "gpt-3.5-turbo";
      return "gpt-4"; // Default
    },
  },
});
```

### Fallback Models

Configure fallback models for reliability:

```typescript
const robustAgent = new Agent({
  name: "robust",
  model: "gpt-4",
  provider: {
    type: "openai",
    apiKey: process.env.OPENAI_API_KEY,
    fallbacks: ["gpt-3.5-turbo", "gpt-3.5-turbo-16k"],
  },
});
```

## Performance Optimization

### Model Caching

Cache model responses for better performance:

```typescript
const cachedAgent = new Agent({
  name: "cached",
  model: "gpt-4",
  provider: {
    type: "openai",
    apiKey: process.env.OPENAI_API_KEY,
    cache: {
      enabled: true,
      ttl: 3600, // Cache for 1 hour
      maxSize: 1000, // Max cached responses
    },
  },
});
```

### Batch Processing

Process multiple requests efficiently:

```typescript
const batchAgent = new Agent({
  name: "batch",
  model: "gpt-4",
  provider: {
    type: "openai",
    apiKey: process.env.OPENAI_API_KEY,
    batchSize: 10, // Process 10 requests at once
    batchDelay: 1000, // 1 second between batches
  },
});
```

## Cost Management

### Token Usage Tracking

Monitor your API usage:

```typescript
const trackedAgent = new Agent({
  name: "tracked",
  model: "gpt-4",
  provider: {
    type: "openai",
    apiKey: process.env.OPENAI_API_KEY,
    tracking: {
      enabled: true,
      logUsage: true,
      alertThreshold: 1000, // Alert when usage exceeds 1000 tokens
    },
  },
});

// Check usage
const usage = await trackedAgent.getUsage();
console.log("Total tokens used:", usage.totalTokens);
console.log("Cost:", usage.cost);
```

### Rate Limiting

Prevent excessive API calls:

```typescript
const limitedAgent = new Agent({
  name: "limited",
  model: "gpt-4",
  provider: {
    type: "openai",
    apiKey: process.env.OPENAI_API_KEY,
    rateLimit: {
      requestsPerMinute: 60,
      requestsPerHour: 1000,
    },
  },
});
```

## Security Best Practices

### API Key Management

Secure your API keys:

```typescript
// Use environment variables
const secureAgent = new Agent({
  name: "secure",
  model: "gpt-4",
  provider: {
    type: "openai",
    apiKey: process.env.OPENAI_API_KEY, // Never hardcode
  },
});

// Rotate keys regularly
const rotatingAgent = new Agent({
  name: "rotating",
  model: "gpt-4",
  provider: {
    type: "openai",
    apiKey: process.env.OPENAI_API_KEY,
    keyRotation: {
      enabled: true,
      interval: 24 * 60 * 60 * 1000, // 24 hours
    },
  },
});
```

### Data Privacy

Protect sensitive data:

```typescript
// For sensitive data, use local models
const privateAgent = new Agent({
  name: "private",
  model: "llama2:7b",
  provider: {
    type: "ollama",
    baseURL: "http://localhost:11434",
  },
  instructions: "Process data locally without external API calls.",
});

// Or use data masking
const maskedAgent = new Agent({
  name: "masked",
  model: "gpt-4",
  provider: {
    type: "openai",
    apiKey: process.env.OPENAI_API_KEY,
    dataMasking: {
      enabled: true,
      patterns: [/credit-card-number/g, /ssn/g, /email/g],
    },
  },
});
```

## Troubleshooting

### Common Issues

**Rate Limiting:**

```typescript
// Add retry logic
const retryAgent = new Agent({
  name: "retry",
  model: "gpt-4",
  provider: {
    type: "openai",
    apiKey: process.env.OPENAI_API_KEY,
    retry: {
      attempts: 3,
      backoff: "exponential",
      maxDelay: 60000,
    },
  },
});
```

**Timeout Issues:**

```typescript
// Increase timeout for complex tasks
const timeoutAgent = new Agent({
  name: "timeout",
  model: "gpt-4",
  provider: {
    type: "openai",
    apiKey: process.env.OPENAI_API_KEY,
    timeout: 120000, // 2 minutes
  },
});
```

**Model Availability:**

```typescript
// Use fallback models
const fallbackAgent = new Agent({
  name: "fallback",
  model: "gpt-4",
  provider: {
    type: "openai",
    apiKey: process.env.OPENAI_API_KEY,
    fallbacks: ["gpt-3.5-turbo", "gpt-3.5-turbo-16k"],
  },
});
```

## Next Steps

Now that you understand model providers, explore:

- [Agents](/agents) - Building AI agents with different models
- [Multi-Agent Systems](/multi-agent) - Using multiple models together
- [Examples](/examples) - Real-world model usage examples
