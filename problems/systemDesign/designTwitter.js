// Design a system architecture for a Twitter-like service
/*

Features:
  - Tweet
    - Tweet @
    - Replies to tweets
    - Metadata (liking, retweeting, etc...)
  - Feed
    - Following - in constructing news feed
    - Followers - in broadcasting users tweets

    




150M users

Tweets Per Day 500M
86400 seconds per day
6000 writes per second (tweets)
3000 comments per second

twice as many reads as writes
12000 reads per second

Space
150 char - 75 Gigs per day
2TB/mo
25TB/yr

Features
Feed (my feed)
  -following
Tweet
  -retweet
  -like
  -comment
  -tweet @
Notifications

                                  Internet                    
                                     ||      \                 
                                     ||       \                
                                     ||        \               
                                     ||         \              
                                Load Balancer    CDN
                                     ||
                                     ||
                                     ||
                                     ||
                                  Server (API Gateway to handle requests)
                                   /      \
                                  /        \    
                                 /          \             
                                /            \           
                               /              \         
                            Read ------------ write

                            Internet                    
                                     ||      \                 
                                     ||       \                
                                     ||        \               
                                     ||         \              
                                Load Balancer    CDN
                                     ||
                                     ||
                                     ||
                                     ||
                     [Tweet Server   ,    Feed Server]
                             /                   \
                            /                     \    
                           /              [memcache (generic), memcache(tweets)]             
                          /                         \           
                         /                           \         
                      [write <--------------------->  read] -- replicate on separate CDN
*/
