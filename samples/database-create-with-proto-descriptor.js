/**
 * Copyright 2024 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// sample-metadata:
//  title: Creates a new database with a proto column and enum
//  usage: node database-create-with-proto-descriptor.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

const fs = require('fs');

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id'
) {
  // [START spanner_create_database_with_proto_descriptors]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance-id';
  // const databaseId = 'my-database-id';

  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });
  // Gets a reference to a Cloud Spanner instance and a database. The database
  // will be created and should not exist.
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  async function createDatabaseWithProtoDescriptor() {
    // Read a proto descriptor file and convert it to a base64 string
    const protoDescriptor = fs
      .readFileSync('./resource/descriptors.pb')
      .toString('base64');

    // Create a new database with a proto bundle and a table with proto columns
    console.log(`Creating database ${database.formattedName_}.`);
    const createProtoBundleStatement = `CREATE PROTO BUNDLE (
            spanner.examples.music.SingerInfo,
            spanner.examples.music.Genre,
            )`;
    const createSingersTableStatementStatement = `CREATE TABLE Singers (
            SingerId   INT64 NOT NULL,
            FirstName  STRING(1024),
            LastName   STRING(1024),
            SingerInfo spanner.examples.music.SingerInfo,
            SingerGenre spanner.examples.music.Genre,
            SingerInfoArray ARRAY<spanner.examples.music.SingerInfo>,
            SingerGenreArray ARRAY<spanner.examples.music.Genre>,
            ) PRIMARY KEY (SingerId)`;

    const [, operation] = await database.create({
      protoDescriptors: protoDescriptor,
      extraStatements: [
        createProtoBundleStatement,
        createSingersTableStatementStatement,
      ],
    });

    console.log(`Waiting for creation of ${database.id} to complete...`);
    await operation.promise();
    console.log(`Created database ${databaseId} with proto column.`);
  }
  createDatabaseWithProtoDescriptor();
  // [END spanner_create_database_with_proto_descriptors]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
