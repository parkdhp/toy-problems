/*
https://www.ably.io/concepts/websockets

WEBSOCKETS
  - Built on back of HTTP protocol
    - Initial request uses headers{Connection: upgrade, Upgrade: websocket} to initiate websocket handshake
    - server hashes the request sec-websocket-key + value of websocket GUID to confirm a secure connection
    - Client also sends up data protocols available for communication
  
TLS HANDSHAKE (newer version of SSL)
  - The client sends a "Client hello" message to the server, along with the client's random value and supported crytographic algos.
  - The server responds by sending a "Server hello" message to the client, along with the server's random value.
  - The server sends its certificate to the client for authentication and may request a certificate from the client. The server sends the "Server hello done" message.
  - If the server has requested a certificate from the client, the client sends it.
  - The client creates a random Pre-Master Secret and encrypts it with the public key from the server's certificate, sending the encrypted Pre-Master Secret to the server.
  - The server receives the Pre-Master Secret. The server and client each generate the Master Secret and session keys based on the Pre-Master Secret.
  - The client sends "Change cipher spec" notification to server to indicate that the client will start using the new session keys for hashing and encrypting messages. Client also sends "Client finished" message.
  - Server receives "Change cipher spec" and switches its record layer security state to symmetric encryption using the session keys. Server sends "Server finished" message to the client.
  - Client and server can now exchange application data over the secured channel they have established. All messages sent from client to server and from server to client are encrypted using session key.
  
Edge service
L4 load balancers are set up at the edge. Does not terminate TLS, more efficient -- better at handling some DoS attacks
L7 does more work i.e. TLS termination or path based routing
*/