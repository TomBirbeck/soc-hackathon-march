import {pool} from "./connect.js";

    await pool.query(
        'Create table if not exists candidates (candidate_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT, skills TEXT); '
      );

    await pool.end()