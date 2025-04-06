import "dotenv/config.js";
import http from "http";
import { transporter } from "./transporter.js";

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("hello server is runing");

  } else if (req.method === "POST" && req.url === "/api/email-sender") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", async () => {
      try {
        const { fullName, email, message } = JSON.parse(body);

        if (!fullName || !email || !message) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          return res.end("Details missing");
        }

        const options = {
          from: email,
          to: process.env.FROM_EMAIL,
          subject: "Hello ✔",
          text: message,
        };

        await transporter.sendMail(options);

        res.writeHead(200, { "Content-Type": "text/plain" });
        return res.end("Message sent");

      } catch (error) {
        console.error(error);
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Internal Server Error");
      }
    });

  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(process.env.PORT, process.env.HOST_NAME, () => {
  console.log(`SERVER IS RUNNING at http://${process.env.HOST_NAME}:${process.env.PORT}`);
});
