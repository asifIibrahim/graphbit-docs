---
title: Common Tools
description: Explore the tools and utilities available in Graphbit for building AI agents
---

# Common Tools

Graphbit provides a rich set of tools that agents can use to interact with the world. These tools extend an agent's capabilities beyond just text generation.

## Built-in Tools

### Web Search Tool

Search the web for current information:

```typescript
import { WebSearchTool } from "graphbit/tools";

const agent = new Agent({
  name: "researcher",
  model: "gpt-4",
  instructions: "Research topics using web search.",
  tools: [new WebSearchTool()],
});

// The agent can now search the web
const result = await agent.run("What are the latest developments in AI?");
```

**Configuration Options:**

```typescript
const webSearchTool = new WebSearchTool({
  apiKey: process.env.SEARCH_API_KEY,
  engine: "google", // or 'bing', 'duckduckgo'
  maxResults: 5,
  includeImages: false,
});
```

### File Tool

Read and write files:

```typescript
import { FileTool } from "graphbit/tools";

const agent = new Agent({
  name: "file-manager",
  model: "gpt-4",
  instructions: "Manage files and documents.",
  tools: [new FileTool()],
});

// Agent can read and write files
const result = await agent.run(
  "Read the file data.txt and summarize its contents"
);
```

**Supported Operations:**

- Read files
- Write files
- List directories
- Create directories
- Delete files

### HTTP Tool

Make HTTP requests to APIs:

```typescript
import { HttpTool } from "graphbit/tools";

const agent = new Agent({
  name: "api-client",
  model: "gpt-4",
  instructions: "Interact with web APIs.",
  tools: [new HttpTool()],
});

// Agent can make API calls
const result = await agent.run("Get the current weather for New York");
```

**Configuration:**

```typescript
const httpTool = new HttpTool({
  baseURL: "https://api.example.com",
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
    "Content-Type": "application/json",
  },
  timeout: 30000,
});
```

### Calculator Tool

Perform mathematical calculations:

```typescript
import { CalculatorTool } from "graphbit/tools";

const agent = new Agent({
  name: "calculator",
  model: "gpt-4",
  instructions: "Perform mathematical calculations.",
  tools: [new CalculatorTool()],
});

// Agent can do math
const result = await agent.run(
  "Calculate the compound interest on $1000 at 5% for 10 years"
);
```

### Database Tool

Interact with databases:

```typescript
import { DatabaseTool } from "graphbit/tools";

const agent = new Agent({
  name: "data-analyst",
  model: "gpt-4",
  instructions: "Analyze database data.",
  tools: [
    new DatabaseTool({
      connectionString: process.env.DATABASE_URL,
      type: "postgres", // or 'mysql', 'sqlite'
    }),
  ],
});

// Agent can query databases
const result = await agent.run("Show me the top 10 customers by revenue");
```

## Custom Tools

### Creating Custom Tools

Build your own tools by extending the Tool class:

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
      units: {
        type: "string",
        enum: ["celsius", "fahrenheit"],
        description: "Temperature units",
      },
    },
    required: ["location"],
  };

  async execute({ location, units = "celsius" }) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}&aqi=no`
    );

    const data = await response.json();
    const temp =
      units === "celsius" ? data.current.temp_c : data.current.temp_f;

    return {
      location: data.location.name,
      temperature: `${temp}°${units === "celsius" ? "C" : "F"}`,
      condition: data.current.condition.text,
      humidity: `${data.current.humidity}%`,
    };
  }
}

const weatherAgent = new Agent({
  name: "weather-assistant",
  model: "gpt-4",
  instructions: "Provide weather information.",
  tools: [new WeatherTool()],
});
```

### Advanced Custom Tool

A more sophisticated tool with error handling:

```typescript
class EmailTool extends Tool {
  name = "send_email";
  description = "Send emails to recipients";

  parameters = {
    type: "object",
    properties: {
      to: {
        type: "string",
        description: "Recipient email address",
      },
      subject: {
        type: "string",
        description: "Email subject",
      },
      body: {
        type: "string",
        description: "Email body content",
      },
    },
    required: ["to", "subject", "body"],
  };

  async execute({ to, subject, body }) {
    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(to)) {
        throw new Error("Invalid email address");
      }

      // Send email using your preferred service
      const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: to }] }],
          from: { email: "noreply@yourdomain.com" },
          subject: subject,
          content: [{ type: "text/plain", value: body }],
        }),
      });

      if (!response.ok) {
        throw new Error(`Email sending failed: ${response.statusText}`);
      }

      return {
        success: true,
        message: `Email sent successfully to ${to}`,
        messageId: response.headers.get("x-message-id"),
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
}
```

## Tool Categories

### Data Tools

Tools for working with data:

```typescript
import { CsvTool, JsonTool, XmlTool, ExcelTool } from "graphbit/tools";

const dataAgent = new Agent({
  name: "data-processor",
  model: "gpt-4",
  instructions: "Process and analyze data files.",
  tools: [new CsvTool(), new JsonTool(), new XmlTool(), new ExcelTool()],
});
```

### Communication Tools

Tools for communication:

```typescript
import { EmailTool, SlackTool, DiscordTool, SmsTool } from "graphbit/tools";

const communicationAgent = new Agent({
  name: "communicator",
  model: "gpt-4",
  instructions: "Send messages through various channels.",
  tools: [new EmailTool(), new SlackTool(), new DiscordTool(), new SmsTool()],
});
```

### Development Tools

Tools for software development:

```typescript
import { GitTool, DockerTool, DeployTool, TestTool } from "graphbit/tools";

const devAgent = new Agent({
  name: "developer",
  model: "gpt-4",
  instructions: "Assist with software development tasks.",
  tools: [new GitTool(), new DockerTool(), new DeployTool(), new TestTool()],
});
```

## Tool Configuration

### Environment Variables

Configure tools with environment variables:

```bash
# .env file
SEARCH_API_KEY=your-search-api-key
DATABASE_URL=postgresql://user:pass@localhost/db
SENDGRID_API_KEY=your-sendgrid-key
WEATHER_API_KEY=your-weather-api-key
```

### Tool Options

Configure tool behavior:

```typescript
const configuredTools = [
  new WebSearchTool({
    apiKey: process.env.SEARCH_API_KEY,
    maxResults: 10,
    includeImages: true,
  }),

  new FileTool({
    allowedPaths: ["/data", "/reports"],
    maxFileSize: 10 * 1024 * 1024, // 10MB
    allowedExtensions: [".txt", ".md", ".json", ".csv"],
  }),

  new HttpTool({
    timeout: 30000,
    retryAttempts: 3,
    allowedDomains: ["api.example.com", "api.trusted.com"],
  }),
];
```

## Tool Security

### Access Control

Control which tools agents can use:

```typescript
const restrictedAgent = new Agent({
  name: "restricted",
  model: "gpt-4",
  instructions: "Limited access agent.",
  tools: [
    new CalculatorTool(), // Safe
    new WebSearchTool(), // Safe
    // No file or HTTP tools for security
  ],
});
```

### Input Validation

Validate tool inputs:

```typescript
class SafeFileTool extends Tool {
  name = "safe_file_operation";
  description = "Safely read files with validation";

  parameters = {
    type: "object",
    properties: {
      path: {
        type: "string",
        description: "File path to read",
      },
    },
    required: ["path"],
  };

  async execute({ path }) {
    // Validate path to prevent directory traversal
    const normalizedPath = path.replace(/\.\./g, "");
    const allowedPaths = ["/data", "/reports"];

    if (!allowedPaths.some((allowed) => normalizedPath.startsWith(allowed))) {
      throw new Error("Access denied: Path not allowed");
    }

    // Read file safely
    const content = await fs.readFile(normalizedPath, "utf8");
    return { content, path: normalizedPath };
  }
}
```

## Tool Best Practices

### 1. Error Handling

Always handle errors gracefully:

```typescript
class RobustTool extends Tool {
  async execute(params) {
    try {
      // Tool logic here
      return { success: true, data: result };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        fallback: "Using fallback data",
      };
    }
  }
}
```

### 2. Rate Limiting

Prevent abuse of external APIs:

```typescript
class RateLimitedTool extends Tool {
  constructor(options) {
    super();
    this.rateLimiter = new RateLimiter({
      maxRequests: 100,
      windowMs: 60000, // 1 minute
    });
  }

  async execute(params) {
    await this.rateLimiter.checkLimit();
    // Tool logic here
  }
}
```

### 3. Caching

Cache expensive operations:

```typescript
class CachedTool extends Tool {
  constructor() {
    super();
    this.cache = new Map();
  }

  async execute(params) {
    const cacheKey = JSON.stringify(params);

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    const result = await this.performOperation(params);
    this.cache.set(cacheKey, result);

    return result;
  }
}
```

## Tool Testing

### Unit Testing Tools

Test your custom tools:

```typescript
import { describe, it, expect } from "jest";

describe("WeatherTool", () => {
  it("should return weather data for valid location", async () => {
    const tool = new WeatherTool();
    const result = await tool.execute({ location: "London" });

    expect(result).toHaveProperty("temperature");
    expect(result).toHaveProperty("condition");
    expect(result.location).toBe("London");
  });

  it("should handle invalid locations gracefully", async () => {
    const tool = new WeatherTool();
    const result = await tool.execute({ location: "InvalidCity123" });

    expect(result).toHaveProperty("error");
  });
});
```

### Integration Testing

Test tools with agents:

```typescript
describe("Agent with Tools", () => {
  it("should use tools correctly", async () => {
    const agent = new Agent({
      name: "test-agent",
      model: "gpt-4",
      instructions: "Use the weather tool to get information.",
      tools: [new WeatherTool()],
    });

    const result = await agent.run("What is the weather in Tokyo?");

    expect(result.content).toContain("Tokyo");
    expect(result.toolCalls).toHaveLength(1);
  });
});
```

## Next Steps

Now that you understand tools, explore:

- [Agents](/agents) - Using tools with agents
- [Multi-Agent Systems](/multi-agent) - Coordinating tools across agents
- [Examples](/examples) - Real-world tool usage examples
