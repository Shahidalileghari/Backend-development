# Security checklist
- Hash passwords with Argon2id; never store plaintext or reversibly encrypted passwords.
- Validate body, params, query and headers at trust boundaries.
- Parameterize SQL; enforce constraints and least-privilege DB roles.
- Authenticate identity separately from authorization; enforce object-level access on every resource.
- For JWT, validate signature, issuer, audience, expiry and allowed algorithm; plan rotation/revocation.
- For cookie sessions, use HttpOnly, Secure under HTTPS, SameSite and CSRF protection.
- Configure explicit CORS origins; CORS is not authentication.
- Rate-limit login, recovery and expensive operations; cap body size and pagination.
- Prevent SSRF with destination allowlists and egress controls.
- Never log tokens/passwords; keep secrets out of Git; patch dependencies.
Use OWASP API Security Top 10 for threat modelling. This educational starter is not production-certified.
