just before step-by-step-guide: <br>
https://github.com/typeorm/typeorm#step-by-step-guide <br>
or <br>
https://typeorm.io/#/example-with-express <br>

1*. from admin cmd run if not run before<br>
npm install typeorm -g<br>
2. from repository directory run<br>
typeorm init --express --name MyProject --database mssql<br>
3. tsconfig.json can be set to:<br>
```
{
   "compilerOptions": {
      "lib": [
         "es5",
         "es6"
      ],
      "target": "es2020",
      "module": "commonjs",
      "moduleResolution": "node",
      "outDir": "./build",
      "rootDir": "./src",
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "sourceMap": true
   },
   "exclude": [
      "node_modules"
   ]
}
```
4. package.json can be set to:<br>
```
{
   "name": {{MyProject}},
   "version": "0.0.1",
   "description": "Awesome project developed with TypeORM.",
   "devDependencies": {
      "@types/dotenv": "^8.2.0",
      "@types/node": "^14.14.25",
      "@types/express": "^4.17.11",
      "@types/body-parser": "^1.19.0",
      "@types/morgan": "^1.9.2",
      "ts-node": "^9.1.1",
      "typescript": "^4.1.5"

      // "@types/bcrypt": "^3.0.0",
      // "@types/cors": "^2.8.9",
      // "@types/helmet": "^4.0.0",
      // "@types/jsonwebtoken": "^8.5.0",
      // "bcrypt": "^5.0.0", https://github.com/kelektiv/node.bcrypt.js#readme
      // "cors": "^2.8.5", https://github.com/expressjs/cors
      // "helmet": "^4.4.1", https://helmetjs.github.io/
      // "jsonwebtoken": "^8.5.1", https://github.com/auth0/node-jsonwebtoken#readme

   },
   "dependencies": {
      "class-validator": "^0.13.1",
      "dotenv": "^8.2.0",
      "guid-typescript": "^1.0.9",
      "mssql": "^6.3.1",
      "reflect-metadata": "^0.1.13",
      "morgan": "^1.10.0",
      "express": "^4.17.1",
      "body-parser": "^1.18.3",
      "typeorm": "^0.2.32"
   },
   "scripts": {
      "start": "ts-node src/index.ts"
   }
}
```
5. run<br>
npm i
