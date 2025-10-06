# 🧮 Add MCP Server

A simple **Model Context Protocol (MCP)** server that demonstrates how to extend an AI assistant’s capabilities by giving it a new **tool** — in this case, a tool that adds two numbers together.

This project is part of the **Complete Intro to MCP** learning series and serves as your very first working MCP server example.

---

## 🚀 Overview

The **Add MCP Server** is a minimal Node.js-based MCP server that exposes one tool called `add`.  
This tool accepts two numbers (`a` and `b`) and returns their sum.

This is the “Hello World” of MCP servers — showing how to:
- Initialize an MCP server.
- Register tools using the `@modelcontextprotocol/sdk`.
- Communicate via the **stdio transport**.
- Test the server manually or through an MCP client like **Claude Desktop** or **Tome**.

---

## 🧰 Tech Stack

- **Node.js** ≥ 22  
- **@modelcontextprotocol/sdk** – core MCP library  
- **zod** – for input validation  
- **Stdio Transport** – for local communication between client and server  

---

## 📦 Installation

```bash
# Clone this repository
git clone https://github.com/your-username/add-mcp-server.git
cd add-mcp-server

# Initialize dependencies
npm install

# Or if you started from scratch:
npm init -y
npm install @modelcontextprotocol/sdk zod
