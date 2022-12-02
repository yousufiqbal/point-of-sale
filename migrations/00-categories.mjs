/**
 * 
 * @param {import('mysql2').Connection} client 
 */
export async function up(client) {

  await client.query(sql`

    CREATE TABLE IF NOT EXISTS categories (
      categoryId INT(10) NOT NULL AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL,
      urlName VARCHAR(100) NOT NULL,
      position INT(10) NOT NULL,
      created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (categoryId) USING BTREE
    )

  `)

}

export async function down(client) {

  await client.query(sql`DROP TABLE IF EXISTS categories`)

}
