import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("characters.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS characters (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL);",
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const insertCharacter = (title, description, image, address, coords) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO characters (title, description, image, address, coords) VALUES (?, ?, ?, ?, ?);",
        [title, description, image, address, JSON.stringify(coords)],
        (_, result) => {
          resolve(result);
        },
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const getCharacters = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM characters",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const eraseCharacters = (id) => {
    const promise = new Promise((resolve, reject) => {
      const query =  "DELETE FROM characters WHERE id = ?";
        db.transaction((tx) => {
            tx.executeSql( query, [id],
                (_, result) => {
                    resolve(result);
                  },
                  (_, err) => {
                    reject(err);
                }
            );
        });
    });    
    return promise;
};