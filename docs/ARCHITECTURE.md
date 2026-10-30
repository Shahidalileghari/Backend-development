# Reference architecture
`HTTP → middleware → router → controller → service → repository → PostgreSQL`.
Routes map HTTP paths; middleware handles cross-cutting concerns; controllers translate HTTP; services enforce use cases; repositories own persistence. Keep `app.js` importable without opening a port; `server.js` owns process startup. Begin with a modular monolith and split services only when independent scaling, deployment, isolation, or team ownership justifies the operational cost.
