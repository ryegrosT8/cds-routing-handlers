# CDS Routing-Handlers

[![npm version](https://badge.fury.io/js/cds-routing-handlers.svg)](https://badge.fury.io/js/cds-routing-handlers) [![pipeline status](https://gitlab.com/mrbandler/cds-routing-handlers/badges/master/pipeline.svg)](https://gitlab.com/mrbandler/cds-routing-handlers/commits/master) [![GitHub License](https://img.shields.io/github/license/mrbandler/cds-routing-handlers)](https://github.com/mrbandler/cds-routing-handlers/blob/master/LICENSE)

**Package to route and implement CDS handlers via a class based system in Typescript.**

## Table of Content

1. [Installation](#1-installation) 💻
2. [Usage](#2-usage) ⌨️
3. [Example](#3-example)
4. [Bugs and Features](#4-bugs-and-features) 🐞💡
5. [License](#5-license) 📃

## 1. Installation

```bash
$ npm install cds-routing-handlers
```

OR

```bash
$ yarn add cds-routing-handlers
```

## 2. Usage

**Before:**

```javascript
const express = require("express");

function registerHandlers(srv) {
    srv.on("READ", "Entity", async () => {
        // Handle the read here...
    });
}

const server = express();
cds.serve("./gen/")
    .at("odata")
    .in(server)
    .with(registerHandlers);
```

**With CDS Routing-Handlers:**

```typescript
// ./handlers/entity.handler.ts

import { Handler, OnRead } from "cds-routing-handlers";

@Handler("Entity")
export class EntityHandler {
    @OnRead()
    public async read(@Srv() srv: any, @Req() req: any): Promise<void> {
        // Handle the read here...
    }
}
```

```typescript
// ./server.ts

import express from "express";
import { createCombinedHandler } from "cds-routing-handlers";

const server = express();

// Either:
cds.serve("./gen/")
    .at("odata")
    .in(server)
    .with(createCombinedHandler([__dirname + "/handlers/**/*.js"]));

// OR
import { EntityHandler } from "./handlers/entity.handler.ts";

cds.serve("./gen/")
    .at("odata")
    .in(server)
    .with(createCombinedHandler([EntityHandler]));
```

### Depencency Injection Support

cds-routing-handlers can be used in conjunction with [typedi](https://github.com/typestack/typedi).

```typescript
import { useContainer } from "cds-routing-handlers";
import { Container } from "typedi";

useContainer(Container);
```

That's it now you can inject service into your handler classes.

```typescript
import { Handler, Func, Param } from "cds-routing-handlers";
import { Service, Inject } from "typedi";

@Service()
export class GreeterService {
    public greet(name: string): string {
        return "Hello, " + name;
    }
}

@Handler()
export class GreeterHandler {
    @Inject()
    private greeterService: GreeterService;

    @Func("hello")
    public async hello(@Param("name") name: string): Promise<string> {
        return this.greeterService.greet(name);
    }
}
```

### Complete API

```typescript
import { Handler } from "cds-routing-handlers";
import { BeforeCreate, OnCreate, AfterCreate } from "cds-routing-handlers";
import { BeforeRead, OnRead, AfterRead } from "cds-routing-handlers";
import { BeforeUpdate, OnUpdate, AfterUpdate } from "cds-routing-handlers";
import { BeforeDelete, OnDelete, AfterDelete } from "cds-routing-handlers";
import { Func, Action } from "cds-routing-handlers";
import { Req, Srv, Param, ParamObj, Jwt } from "cds-routing-handlers";

interface IFoobar {
    Id: string;
    Foo: string;
    Bar: number;
}

/**
 *  Basic OData operations.
 */
@Handler("Foobar")
export class FooBarHandler {
    /**
     *  CREATE handlers.
     */
    @BeforeCreate()
    public async beforeCreate(): Promise<IFoobar> {
        // Handle the before create here...
    }

    @OnCreate()
    public async onCreate(): Promise<IFoobar> {
        // Handle the create here...
    }

    @AfterCreate()
    public async afterCreate(): Promise<IFoobar> {
        // Handle the after create here...
    }

    /**
     *  READ handlers.
     */
    @BeforeRead()
    public async beforeRead(): Promise<IFoobar> {
        // Handle the before read here...
    }

    @OnRead()
    public async onRead(): Promise<IFoobar> {
        // Handle the read here...
    }

    @AfterRead()
    public async afterRead(): Promise<IFoobar> {
        // Handle the after read here...
    }

    /**
     *  UPDATE handlers.
     */
    @BeforeUpdate()
    public async beforeUpdate(): Promise<IFoobar> {
        // Handle the before update here...
    }

    @OnUpdate()
    public async onUpdate(): Promise<IFoobar> {
        // Handle the update here...
    }

    @AfterUpdate()
    public async afterUpdate(): Promise<IFoobar> {
        // Handle the after update here...
    }

    /**
     *  DELETE handlers.
     */
    @BeforeDelete()
    public async beforeDelete(): Promise<void> {
        // Handle the before delete here...
    }

    @OnDelete()
    public async onDelete(): Promise<void> {
        // Handle the delete here...
    }

    @AfterDelete()
    public async afterDelete(): Promise<void> {
        // Handle the after delete here...
    }
}

/**
 *  Root service handler.
 */
@Handler("Foobar")
export class FooBarRejectHandler {
    @OnRead()
    @OnReject(500, "Foobar not found")
    public async onRead(): Promise<IFoobar> {
        // When something fails in here, a error object like defined above will be returned.
        /**
         * {
         *    "error": {
         *      "code": 500,
         *      "message": "Foobar not found"
         *    }
         * }
         *
         */
    }

    @OnRead()
    @OnReject(500, "Foobar not found", true)
    public async onRead(): Promise<IFoobar> {
        // When something fails in here, a error object like defined above will be returned.
        // This time the JS error message is appended to the message.
        /**
         * {
         *    "error": {
         *      "code": 500,
         *      "message": "Foobar not found: JS Error Message"
         *    }
         * }
         *
         */
    }
}

/**
 *  Error handling and rejection operations.
 */
@Handler()
export class FooBarRejectHandler {
    /**
     *  Function Import.
     *
     *  CDS:
     *      function foo(bar: String) returns String;
     *
     */
    @Func("foo")
    public async foo(@Param("bar") bar: string): Promise<string> {
        return "Foo, " + bar;
    }

    /**
     *  Action Import.
     *
     *  CDS:
     *      action bar(foo: String, noop: String);
     *
     */
    @Action("bar")
    public async bar(@Param("foo") foo: string, @Param("noop") noop: string): Promise<void> {
        console.log("Foo Param", foo);
        console.log("Noop Param", noop);
    }
}

interface IDoItParams {
    id: string;
    do: string;
    times: number;
}

/**
 *  Error handling and rejection operations.
 */
@Handler()
export class ParamExampleHandler {
    /**
     *  Function Import.
     *
     *  CDS:
     *      function hello(title: String, name: String) returns String;
     *
     */
    @Func("hello")
    public async foo(@Param("title") title: string, @Param("name") name: string): Promise<string> {
        return `Hello, ${title} ${name}`;
    }

    /**
     *  Function Import.
     *
     *  CDS:
     *      action doIt(id: String, do: String, tunes: number);
     *
     */
    @Action("doIt")
    public async doIt(@ParamObj() params: IDoItParams): Promise<string> {
        console.log(params); // => { id: "12345", do: "over", "times": 9000 }
    }

    /**
     * Additionaly you can inject the service aswell as the request object.
     */
    @OnRead()
    public async read(@Srv() srv: any, @Req() req: any): Promise<string> {
        // Do something with srv and req.
    }

    /**
     * Finally if the incoming request contains a JWT token you can inject that aswell.
     */
    @OnRead()
    public async read(@Jwt() jwt: string): Promise<string> {
        // Do something with srv and req.
    }
}
```

## 5. Example

For a complete example checkout the `./test` directory which contains the project I am testing with.

Additionally you can use my cds-routing-handler [Postman](https://www.getpostman.com/) collection which contains definitions for every endpoint from the project.

## 4. Bugs and Features

Please open a issue when you encounter any bugs 🐞 or if you have an idea for a additional feature 💡.

---

## 5. License

MIT License

Copyright (c) 2019 mrbandler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
