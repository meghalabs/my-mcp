import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {z} from "zod";

//create MCP server
const server = new McpServer({
    name: "add-two-numbers",
    version: "0.1.0",
    description: "A simple MCP server that adds two numbers.",
    transport: new StdioServerTransport(),
});

// Add an additional tool 

server.registerTool(
    "add",
    {
    title: "add",
    description: "Add two numbers", 
    inputSchema: {
        a: z.number(),
        b: z.number(),
    }
    },
    async ({a, b}) => {
        return {
            content: [{ type: "text", text: `The sum of ${a} and ${b} is ${a + b}` }],
        }
    },
);

// Start receiving messages on stdin and sending messages on stdout

const transport = new StdioServerTransport();
await server.connect(transport);