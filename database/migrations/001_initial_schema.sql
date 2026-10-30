CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE users (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 email VARCHAR(254) NOT NULL UNIQUE,
 password_hash TEXT NOT NULL,
 display_name VARCHAR(120) NOT NULL,
 role VARCHAR(30) NOT NULL DEFAULT 'user' CHECK(role IN ('user','admin')),
 is_active BOOLEAN NOT NULL DEFAULT TRUE,
 created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
 updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE tasks (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 owner_id UUID REFERENCES users(id) ON DELETE CASCADE,
 title VARCHAR(160) NOT NULL,
 description TEXT,
 status VARCHAR(20) NOT NULL DEFAULT 'open' CHECK(status IN ('open','in_progress','done','archived')),
 due_at TIMESTAMPTZ,
 created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
 updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_tasks_owner_created ON tasks(owner_id,created_at DESC);
CREATE INDEX idx_tasks_status ON tasks(status);
