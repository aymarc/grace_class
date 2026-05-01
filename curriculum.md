# COMPLETE NODE.JS COURSE CURRICULUM

**Course Title:** Server-Side Development with Node.js  
**Tools Required:** Node.js v18+, VS Code, Postman, Git, MongoDB Compass/pgAdmin

## MODULE 1: JAVASCRIPT FUNDAMENTALS

### 1.1 Core JavaScript Concepts

| Topic | Description |
|-------|-------------|
| Variables & Data Types | let, const, var, primitive types, type coercion |
| Operators & Expressions | Arithmetic, comparison, logical, ternary operators |
| Control Flow | if/else, switch statements, loops (for, while, do-while) |
| Functions | Declarations, expressions, arrow functions, parameters |
| Scope & Hoisting | Global, function, block scope, temporal dead zone |
| Error Handling | try/catch/finally, throwing custom errors |

### 1.2 Advanced JavaScript

- **Objects:** creation, properties, methods, object destructuring
- **Arrays:** iteration methods (map, filter, reduce, forEach)
- **Template Literals:** string interpolation, tagged templates
- **Spread & Rest Operators:** array/object spreading, rest parameters
- **Closures & IIFEs:** lexical scoping, immediately invoked functions
- **The `this` Keyword:** binding rules, call/apply/bind methods

## MODULE 2: NODE.JS INTRODUCTION & SETUP

### 2.1 Getting Started

- What is Node.js? (V8 engine, event-driven architecture)
- Installing Node.js and npm (nvm for version management)
- REPL environment exploration
- Running first Node.js script

### 2.2 Node.js Architecture

```text
┌─────────────────────────────────────────┐
│            Node.js Architecture          │
├─────────────────────────────────────────┤
│  ┌─────────┐    ┌───────────────────┐  │
│  │ V8      │    │   Libuv           │  │
│  │ Engine  │◄──►│  - Event Loop     │  │
│  └─────────┘    │  - Thread Pool    │  │
│                 └───────────────────┘  │
└─────────────────────────────────────────┘
```

- Event-driven programming principles
- Non-blocking I/O explained
- Single-threaded model with worker threads
- Event loop phases: timers → I/O → poll → check → close

> **Practice Exercise:** Create a script demonstrating blocking vs non-blocking code

## MODULE 3: NODE.JS CORE MODULES

### 3.1 File System (fs)

```javascript
// Key Operations
fs.readFile / fs.readFileSync      // Reading files
fs.writeFile / fs.appendFile       // Writing files
fs.createReadStream / createWriteStream  // Streams
fs.watch                            // File watching
fs.mkdir / fs.readdir              // Directory operations
```

### 3.2 Path Module

- `path.join()`, `path.resolve()`, `path.parse()`
- Cross-platform path handling
- Working with `__dirname` and `__filename`

### 3.3 OS Module

- System information (cpus, memory, network)
- Platform detection

### 3.4 HTTP/HTTPS Module

- Creating HTTP server
- Request/response handling
- Making HTTP requests (http.get, https.request)

### 3.5 Additional Core Modules

| Module | Primary Use |
|--------|-------------|
| Events | EventEmitter, custom events |
| Buffer | Binary data handling |
| Streams | Efficient data processing |
| Crypto | Hashing, encryption, random bytes |
| URL | URL parsing and formatting |
| Util | Promisify, types, formatting |

> **Mini-Project:** Build a file manager with CRUD operations

## MODULE 4: NPM & PACKAGE MANAGEMENT

### 4.1 Package.json Management

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": { ... },
  "devDependencies": { ... }
}
```

### 4.2 npm Commands Reference

| Command | Purpose |
|---------|---------|
| `npm init -y` | Initialize project |
| `npm install <package>` | Install dependency |
| `npm install -D <package>` | Install dev dependency |
| `npm install -g <package>` | Global install |
| `npm update` | Update packages |
| `npm audit fix` | Fix vulnerabilities |

## MODULE 5: BUILDING WEB SERVERS

*Estimated Time: 8-10 hours*

### 5.1 HTTP Server Fundamentals

```javascript
// Raw HTTP Server
const server = http.createServer((req, res) => {
  const { method, url, headers } = req;
  // Routing, headers, status codes
});
```

### 5.2 Express.js Framework

**Setup & Basic Routes**

```javascript
const express = require('express');
const app = express();

app.get('/users', (req, res) => { ... });
app.post('/users', (req, res) => { ... });
app.put('/users/:id', (req, res) => { ... });
app.delete('/users/:id', (req, res) => { ... });
```

**Middleware**

- Application-level middleware
- Router-level middleware
- Built-in middleware (express.json, express.static)
- Third-party middleware (morgan, cors, compression)
- Error-handling middleware

### 5.3 Request Handling

- Body parsing (JSON, URL-encoded, raw, text)
- File uploads with multer
- Query parameters and route parameters

> **Mini-Project:** Build a REST API for a task manager

## MODULE 6: DATABASE INTEGRATION

### 6.1 SQL Databases (PostgreSQL/MySQL)

```javascript
// Using pg (PostgreSQL)
const { Pool } = require('pg');
const pool = new Pool({ connectionString });

// Parameterized query (SQL injection safe)
const result = await pool.query(
  'SELECT * FROM users WHERE email = $1',
  [userEmail]
);
```

### 6.2 NoSQL Databases (MongoDB)

```javascript
// Using Mongoose ODM
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true }
});

const User = mongoose.model('User', userSchema);
await User.create({ name: 'John', email: 'john@example.com' });
```

### 6.3 ORM/ODM Comparison

| ORM | Best For | Learning Curve |
|-----|----------|----------------|
| Sequelize | SQL databases | Medium |
| Mongoose | MongoDB | Low |
| Prisma | Modern apps | Medium |
| TypeORM | TypeScript projects | High |

> **Practice:** Design a database schema for an e-commerce platform

## MODULE 7: AUTHENTICATION & AUTHORIZATION

### 7.1 Session-Based Authentication

```javascript
// Express Session Setup
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true, httpOnly: true }
}));

// Password Hashing with bcrypt
const hashed = await bcrypt.hash(password, 10);
const isValid = await bcrypt.compare(password, hashed);
```

### 7.2 JWT (JSON Web Tokens)

```javascript
// Generate Token
const token = jwt.sign(
  { userId: user.id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

// Verify Token
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```

### 7.3 OAuth 2.0

- OAuth flow diagram
- Google/GitHub OAuth integration
- Passport.js strategies

**Security Checklist:**

- [ ] Hash passwords (bcrypt)
- [ ] Implement rate limiting
- [ ] Set secure cookie flags (HttpOnly, Secure, SameSite)
- [ ] Validate input on server side
- [ ] Use environment variables for secrets

