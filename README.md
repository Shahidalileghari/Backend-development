# Backend Development Mastery
**JavaScript + Node.js + Express + PostgreSQL**

A fundamentals-to-advanced, industry-oriented backend engineering course. Express is the primary framework; the curriculum also compares Fastify and NestJS and introduces TypeScript, Redis, Docker, CI/CD, observability, and system design.

## GitHub details
- Repository: `backend-development-mastery`
- Description: Comprehensive JavaScript backend engineering course using Node.js and Express, with REST APIs, PostgreSQL, authentication, security, testing, Docker, caching, system design, and production-oriented projects.
- Runtime: Node.js 22+
- Database: PostgreSQL 15+
- Framework: Express 5

## Quick start
```bash
cp .env.example .env
npm install
docker compose up -d db
# Set DATABASE_URL in .env to match docker-compose.yml
npm run db:migrate
npm run db:seed
npm run dev
```
API: `http://localhost:3000`; health: `/health`; API root: `/api/v1`.

## Curriculum
1. HTTP, DNS, TCP/TLS, REST, JSON, cookies and request lifecycle.
2. Modern JavaScript: scope, closures, prototypes, modules, promises, async/await and error handling.
3. Node.js: event loop, libuv, streams, buffers, worker threads, processes and performance.
4. Express: routers, middleware, controllers, services, repositories, validation and centralized errors.
5. PostgreSQL: relational modelling, normalization, constraints, joins, indexes, transactions, isolation and migrations.
6. Identity: Argon2id password hashing, sessions, JWT trade-offs, refresh rotation, RBAC and object-level authorization.
7. API engineering: pagination, filtering, versioning, OpenAPI, idempotency and webhooks.
8. Security: OWASP API risks, injection, CORS, CSRF, SSRF, rate limiting, secrets and least privilege.
9. Quality: unit, integration, API, contract and end-to-end testing.
10. Production: Docker, CI, logs, metrics, traces, health checks, graceful shutdown and deployment.
11. Advanced: Redis, queues, background jobs, outbox, uploads, SSE/WebSockets, resilience and multi-tenancy.
12. Architecture: modular monoliths, clean boundaries, scaling and system design.

## Structure
```text
src/                 Express application and task vertical slice
database/            PostgreSQL migration and seed
tests/               Node test-runner API tests
lessons/             10 progressive modules
exercises/            Beginner/intermediate/advanced assignments
projects/             Portfolio-grade project briefs
docs/                 Roadmap, architecture, security, operations
.github/workflows/    CI pipeline
```

## Scripts
`npm run dev`, `npm start`, `npm test`, `npm run test:coverage`, `npm run lint`, `npm run db:migrate`, `npm run db:seed`.

## Engineering standards
Environment-based configuration; validation at trust boundaries; parameterized SQL; database constraints; authentication separated from authorization; bounded pagination and request sizes; secure headers and rate limiting; request IDs; consistent errors; least privilege; tests and CI; graceful shutdown; documented migrations and operational recovery.

## Framework selection
Express is used to make HTTP and middleware concepts explicit. See `docs/FRAMEWORK_COMPARISON.md` for Express vs Fastify vs NestJS. No framework is universally best.

## Verification
The ZIP archive is CRC-checked. Runtime tests, dependency installation, and PostgreSQL integration were **not executed during packaging**. After setup, run `npm install`, `npm test`, and `npm run lint`; apply migrations against a local PostgreSQL instance. A valid ZIP does not prove application runtime correctness.

See `docs/LEARNING_ROADMAP.md` and complete projects in sequence. MIT License.
