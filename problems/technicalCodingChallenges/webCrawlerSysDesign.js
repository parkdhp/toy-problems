/*
https://www.terraform.io/docs/providers/aws/r/lb.html

We want to make a wikipedia crawler
- Dont worry about getting ALL articles
- Begin design with one node performing the crawl
  - after, lets scale this out horizontally

Requirements -
Get the HTML for each articles page

Phase 1:
  - One node
    - think about unoptimized solution first

Phase 2:
  - n nodes

Low level operation - crawler:
  - How does this work?

Scale considerations:
  - How many reads/writes?
  - How much space is needed?
  - Do back of the envelope calculations to determine the requirements of your system.

Pick a provider:
  - Picking AWS gives a certain set of resources for you to use in solving the problem.
*/

/**
 * node performing the crawl
 *
 * - Save header, footer, sidebar, + any other component of the html that is repeated
 * - Get random article using phantom
 * - Save the html link as a unique id, save contents of the body, save the title of the article,
 *  any other identifiable information, categories
 * - Use vertical scaling and concurrency to speed up the machine
 * - Create separate consumers and getters
 *  - Getters actively obtain html from the web and add them to an sqs queue, consumers will
 *    pop off data from the queue and add it to redis and the s3 bucket using a serverless lambda fx.
 * - Master sql db will store unique link, filepath of html content (from s3), and also a master-slave
 *   database for redundancy. (NoSQL might have faster reads, but will use SQL for future use cases)
 * - Load balance from web to server and server to redis to prevent duplicate data.
 * - Can use data federation (a form of data virtualization) to store aggregate data differntiated by category.
 * - Important to correctly set up load balancing if future use cases will require users to be sent to
 *   specific data stores
 *    - Round robin (DNS) load balancing will randomly send user to a data store but it has the potential
 *      of crowding one store with power users.
 *    - Hardware load balancing will health check on reachability and responsiveness of the server via methods
 *      like pinging, but this will be more expensive due to traffic management
 *
 * Big O vs Scale Cosiderations --eg reads vs writes
 * How much space is needed?
 *  - Assuming each article is around 2 MB storing 1 milliion articles will require around 2~3 TBs
 */

/**
 * concurency
 * federation
 * sharding
 * multi tenancy (data separation between clients) -- e.g. distinct groups--security/enterprise/staff
 *   nbc/cbs/cnn -- different clients -- enterprise architecture
 * data sharding
 * redis/elasticache (memcache)
 * https://aws.amazon.com/sqs/
 * setup consumers and getters
 * sdk -- pull off the queue delete off the queue, high throughput/resiliency
 */
