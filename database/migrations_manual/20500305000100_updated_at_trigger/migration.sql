-- trigger function for insert column
CREATE
OR REPLACE FUNCTION TRIGGER_INSERT_RECORD_TIMESTAMP() RETURNS TRIGGER AS $$
begin
  new.created_at = now();
  new.updated_at = now();
  return new;
end;
$$ LANGUAGE PLPGSQL;

-- trigger function for update column

CREATE
OR REPLACE FUNCTION TRIGGER_UPDATE_RECORD_TIMESTAMP() RETURNS TRIGGER AS $$
begin
  new.created_at = old.created_at;
  new.updated_at = now();
  return new;
end;
$$ LANGUAGE PLPGSQL;

-- add timestamps to all tables

DO $$
declare row_data record;
begin for row_data in
  select
    *
  from
    information_schema.tables
  where
    lower(table_type) = 'base table'
    and table_schema = 'public'
    and table_name not like 'pg\_%'
    and table_name not like '%migrations%' loop
      -- ensure created_at, updated_at columns exists
      execute ' alter table "' || row_data.table_name || '" add column if not exists created_at timestamp default now();';
	    execute ' alter table "' || row_data.table_name || '" add column if not exists updated_at timestamp default now();';
      -- trigger for insert
      execute ' drop trigger if exists TRIGGER_INSERT_RECORD_TIMESTAMP' || row_data.table_name || ' on "' || row_data.table_name || '";';
      execute ' create trigger TRIGGER_INSERT_RECORD_TIMESTAMP' || row_data.table_name || ' before insert on "' || row_data.table_name || '" for each row execute function TRIGGER_INSERT_RECORD_TIMESTAMP();';
      -- trigger for update
      execute ' drop trigger if exists TRIGGER_UPDATE_RECORD_TIMESTAMP' || row_data.table_name || ' on "' || row_data.table_name || '";';
      execute ' create trigger TRIGGER_UPDATE_RECORD_TIMESTAMP' || row_data.table_name || ' before update on "' || row_data.table_name || '" for each row execute function TRIGGER_UPDATE_RECORD_TIMESTAMP();';
    end loop;
end;
$$ LANGUAGE PLPGSQL;
