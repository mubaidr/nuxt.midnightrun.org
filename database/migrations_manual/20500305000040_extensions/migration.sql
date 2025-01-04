-- drop default/ unused extensions
DROP EXTENSION IF EXISTS "http";

DROP EXTENSION IF EXISTS "pg_graphql";

DROP EXTENSION IF EXISTS "pg_net";

DROP EXTENSION IF EXISTS "pgjwt";

-- create extensions
create extension if not exists "citext";

create extension if not exists "fuzzystrmatch";

create extension if not exists "hypopg";

create extension if not exists "moddatetime";

create extension if not exists "plpgsql_check";

create extension if not exists "pg_hashids";

create extension if not exists "pg_jsonschema";

create extension if not exists "pg_repack";

create extension if not exists "pg_stat_monitor";

create extension if not exists "pg_trgm";

create extension if not exists "pgaudit";
