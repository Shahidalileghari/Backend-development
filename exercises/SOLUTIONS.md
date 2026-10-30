# Solution guidance
1. Abstract persistence behind a repository.
2. Generate or validate request IDs; do not trust arbitrary IDs for security.
3. Validate server-side and reject unexpected fields where appropriate.
4. Clamp page size and use deterministic sorting; consider keyset pagination.
5. Add foreign keys and unique membership constraints.
6. Hash with Argon2id, rate-limit login, rotate sessions after privilege changes.
7. Scope queries by authenticated owner or enforce an explicit policy.
8. Isolate test databases and fixtures.
9. Wrap related writes in one transaction.
10. Stop accepting requests before closing dependencies.
11. Store account + idempotency key under a unique constraint and persist result.
12. Write outbox event in the same transaction as domain state; consumers must be idempotent.
13. Use TTL jitter, request coalescing and stale-while-revalidate where suitable.
14. Derive tenant identity from authenticated context, not an untrusted body field.
15. Version contracts deliberately and test backward compatibility.
