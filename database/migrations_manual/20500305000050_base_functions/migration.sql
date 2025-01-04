DROP FUNCTION IF EXISTS get_duration;
CREATE FUNCTION get_duration(end_date date, start_date date) RETURNS TEXT AS $$
BEGIN
    return(select age(end_date, start_date));
END
$$ LANGUAGE plpgsql IMMUTABLE;
