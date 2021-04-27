https://github.com/typeorm/typeorm#quick-start <br>

1. from admin cmd run<br>
npm install typeorm -g 
2. from repository directory run<br>
typeorm init --name MyProject --database mssql
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
      "ts-node": "^9.1.1",
      "typescript": "^4.1.5"
   },
   "dependencies": {
      "dotenv": "^8.2.0",
      "mssql": "^6.3.1",
      "reflect-metadata": "^0.1.13",
      "typeorm": "^0.2.32"
   },
   "scripts": {
      "start": "ts-node src/index.ts"
   }
}
```
5. run<br>
npm i
