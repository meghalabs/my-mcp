# 🧮🌦️ MCP Servers — Add & Weather

This repository contains two beginner-friendly **Model Context Protocol (MCP)** servers —  
one that **adds two numbers** and another that **fetches live weather data** using the [Open-Meteo API](https://open-meteo.com/).

These are the first two projects in the **Complete Intro to MCP** learning series, designed to help you understand how to build and connect local MCP servers to AI clients such as **Claude Desktop**, **Tome**, or **Cursor**.

---

## 🚀 Overview

| Server | Description |
|---------|--------------|
| **Add MCP Server** | A minimal MCP server that provides a single tool called `add`, which sums two numbers. |
| **Weather MCP Server** | A practical MCP server that fetches real-time weather data (temperature, humidity, wind, etc.) for any given coordinates. |

Both servers demonstrate the same fundamental MCP concepts:
- Initializing an MCP server
- Registering **tools** using the `@modelcontextprotocol/sdk`
- Validating input schemas with **Zod**
- Communicating through the **stdio transport**
- Integrating MCP servers with **Claude Desktop**

---

## 🧰 Tech Stack

- **Node.js** ≥ 22  
- **@modelcontextprotocol/sdk** – Core SDK for building MCP servers  
- **zod** – Input schema validation  
- **openmeteo** – Weather API client (used in the weather server)  
- **Stdio Transport** – Standard I/O communication between MCP client and server  

---

## 📦 Installation

```bash
# Clone this repository
git clone https://github.com/your-username/mcp-servers.git
cd mcp-servers

# Initialize dependencies
npm install @modelcontextprotocol/sdk zod openmeteo
