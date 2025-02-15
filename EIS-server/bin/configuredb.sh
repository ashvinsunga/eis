#!/bin/bash

database="eisdb"

echo "Configuring database: $database"

dropdb -U node_user eisdb
createdb -U node_user eisdb

psql -U node_user eisdb < ./bin/sql/eisdb.sql

echo "$database configured"