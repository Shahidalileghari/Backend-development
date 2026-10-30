-- Development-only placeholders. Replace with real Argon2id hashes before use.
INSERT INTO users(email,password_hash,display_name,role) VALUES
('admin@example.test','REPLACE_WITH_ARGON2ID_HASH','Demo Admin','admin'),
('user@example.test','REPLACE_WITH_ARGON2ID_HASH','Demo User','user')
ON CONFLICT(email) DO NOTHING;
