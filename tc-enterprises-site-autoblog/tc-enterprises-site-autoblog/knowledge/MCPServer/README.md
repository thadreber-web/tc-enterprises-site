# All-Assistants Orchestration Hub

A comprehensive system for coordinating AI assistants with file locking, diff computation, and model suggestions.

## Architecture

The system consists of two main components:

1. **MCP Server** (`orchestration-server/`): Provides orchestration tools via Model Context Protocol
2. **VS Code Extension** (`orchestration-extension/`): Integrates the orchestration capabilities into VS Code

## Features

### MCP Server Tools
- **File Locking**: Lock/unlock files to prevent concurrent modifications
- **Diff Computation**: Compute differences between file versions
- **Model Suggestions**: Recommend appropriate AI models based on task types

### VS Code Extension
- **Suggest Tool Command**: Interactive workflow for AI-assisted development
- **Risk Assessment**: Evaluate risks before applying changes
- **Diff Preview**: Preview changes before applying them

## Setup

### Prerequisites
- Node.js 18+
- VS Code

### Installation

1. **Build the MCP Server:**
   ```bash
   cd orchestration-server
   npm install
   npm run build
   ```

2. **Build the VS Code Extension:**
   ```bash
   cd orchestration-extension
   npm install
   npm run compile
   ```

3. **Install the Extension:**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Click the "..." menu and select "Install from VSIX"
   - Select the generated .vsix file from orchestration-extension/

## Usage

### Testing the Workflow

1. **Open a test file** (e.g., `test-file.ts`)

2. **Run the Suggest Tool command:**
   - Press `Ctrl+Shift+P` to open command palette
   - Type "Suggest Tool" and select it

3. **Follow the interactive workflow:**
   - Select task type (Architecture, Backend Logic, etc.)
   - Enter task description
   - Review model suggestion and risk assessment
   - Preview diff changes
   - Apply or revert changes

### Development

#### Running Tests
```bash
# MCP Server tests
cd orchestration-server
npm test

# Extension tests
cd orchestration-extension
npm run test
```

#### Debugging the Extension
1. Open the project in VS Code
2. Press `F5` to start debugging
3. Select "Run Extension" from the debug configurations
4. A new VS Code window will open with the extension loaded

## Task Types

The system supports the following task types:

- **Architecture**: System design and planning
- **Backend Logic**: Server-side development
- **Frontend Components**: UI/UX development
- **Refactor**: Code restructuring
- **Tests**: Testing and quality assurance
- **Docs**: Documentation
- **Infra**: Infrastructure and deployment

## Model Recommendations

Based on task type:

- Architecture → ChatGPT-5 (Copilot)
- Backend Logic → GPT-4.1
- Frontend Components → GPT-4o
- Refactor → Windsurf SWE
- Tests → Qwen
- Docs → GPT-5-mini
- Infra → GPT-4.1

## Risk Assessment

The system evaluates risk based on:

- File path (higher risk for auth/security files)
- Task type (refactoring has medium risk)
- Default risk level is Low

## Next Steps

The orchestration hub is now ready for:

1. **Advanced Features**: Add more sophisticated AI model selection
2. **Multi-user Support**: Enable collaborative workflows
3. **Integration**: Connect with external AI services
4. **Monitoring**: Add logging and analytics
5. **Security**: Enhance file protection mechanisms

## Troubleshooting

### Common Issues

1. **MCP Server not starting**: Ensure Node.js modules are properly installed
2. **Extension not loading**: Check VS Code extension host logs
3. **Import errors**: Verify MCP SDK version compatibility

### Logs

- MCP Server logs: Check console output when running the server
- Extension logs: View in VS Code's Output panel (Extension Host)