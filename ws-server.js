const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });
const openAiDelay = 10000;

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
    console.log("sending data to openai...");
    setTimeout(() => {
      console.log("sending response to client...");
      ws.send(
        JSON.stringify({
          event: "content_generator:created",
          data: {
            postDescription: "Be ready for new stuff!",
            pictures: [
              {
                url: "https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "cebra",
              },
            ],
          },
        })
      );
    }, openAiDelay);
  });
});
