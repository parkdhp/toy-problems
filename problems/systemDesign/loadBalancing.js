/*
https://instagram-engineering.com/what-powers-instagram-hundreds-of-instances-dozens-of-technologies-adf2e22da2ad

types of load balancing
https://kemptechnologies.com/load-balancer/load-balancing-algorithms-techniques/
https://blog.envoyproxy.io/introduction-to-modern-network-load-balancing-and-proxying-a57f6ff80236


DNS Round Robin
Multiple identical servers are configured to provide exactly the same services. 
All are configured to use the same Internet domain name, but each has a unique IP address. 
A DNS server has a list of all the unique IP addresses that are associated with the Internet domain name. 
When requests for the IP Address associated with the Internet domain name are received, the addresses are returned in a rotating sequential manner.


set up a healtcheck endpoint to remove from target load balancer

Software Defined Networking (SDN) Adaptive
SDN Adaptive combines knowledge of upper networking layers, with information about the state of the network at lower layers. Information about data from Layers 4 & 7 of the network, and information about the network from layers 2 & 3 is combined when deciding how to allocate requests. This allows information about the status of the servers, the status of the applications running on them, the health of the network infrastructure, and the level of congestion on the network to all play a part in the load balancing decision making.

Agent-Based Adaptive Load Balancing
Each server in the pool has an agent that reports on its current load to the load balancer. This real-time information is used when deciding which server is best placed to handle a request. This is used in conjunction with other techniques such as Weighted Round Robin and Weighted Least Connection.

Source IP Hash
Source IP Hash load balancing uses an algorithm that takes the source and destination IP address of the client and server and combines them to generate a unique hash key. This key is used to allocate the client to a particular server. As the key can be regenerated if the session is broken this method of load balancing can ensure that the client request is directed to the same server that it was using previously. This is useful if it’s important that a client should connect to a session that is still active after a disconnection. For example, to retain items in a shopping cart between sessions.
- if storing state in server
- load balancer -> DNS resolution (IP address)
- inital req is simple req, server responds with a hash to store in user session
- sockets - bidirecitonal communication - web socket connection forms stable channel for communication upon initial request built on http protocol.
          - binds to a specific port on the server machine.
*/
