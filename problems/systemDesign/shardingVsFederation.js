/*
sharding vs federation vs partitioning
http://highscalability.com/there-difference-between-partitioning-and-federation-and-sharding
https://lethargy.org/~jesus/writes/partitioning-vs-federation-vs-sharding/
https://www.quora.com/In-laymans-terms-what-is-the-difference-between-sharding-and-partitioning-in-a-database

difference between virtualization vs federation
https://www.youtube.com/watch?v=eEsdOmHX3Xc

      Federated Shards:
      
      S - pushes shard management off application logic
      |
      F - manage shard keys and database routing in federated service
     / \
    S   S
      
      Unfederated shards:
      
      N - manage shard keys and database routing in application logic
     / \
    S   S
    
        ^ or maybe sharding is actually a federated model
*/