// Node 
    // RuntimeEnvio -> can execute JS code without browser
        // ->has its own (Node) environment variables -- *does not have DOM and BOM 

// Single Threaded -> one task at a time
// Async -> can be used asynchronously

// Client-Server Model 
    // 1. Client Triggers Event
    // 2. Event Triggers Func()
    // 3. Func() Triggers a REQUEST/ fetch-axios
    // 4. Request travels to Server
    // 5. Server [GRABS] data and send request back
// ---------------------------------------------
// ---------------------------------------------

// HTTPrequests
    // GET --> app.get()
        // Requests using GET should only retrieve data.

    //  POST---> app.post()
        // The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

    //  PUT --> app.put()
        // The PUT method replaces all current representations of the target resource with the request payload.
    
    //  DELETE --> app.delete()
        // The DELETE method deletes the specified resource.
// ---------------------------------------------
// ---------------------------------------------

// Building API
    // -- Require()Statements are like imports
    // (imports data from npm catalogue)
   
    const http = require('http')

    // .createServer -> Creates Simple server
    http
    .createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write("Hello World");
      res.end();
    }).listen(3000, () => {
      console.log(`Server running.`);
    });
    
// HTTPresponses

// Create Server