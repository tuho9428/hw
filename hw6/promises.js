export const fetchPosts = async () => {
    //fetch posts from "https://jsonplaceholder.typicode.com/posts"
    //return the posts
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const posts = await response.json();
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw new Error("Failed to fetch posts");
    }
  };
  
  export const fetchPostById = async (id) => {
    //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
    //return the post
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const post = await response.json();
      return post;
    } catch (error) {
      console.error("Error fetching post:", error);
      throw new Error("Failed to fetch post");
    }
  };
  
  export const sequentialPromise = async (promises, order) => {
    //execute promises sequentially
    //return the results in the order specified
    //if there is a rejected promise, throw an error, and stop executing the rest of the promises
    let results = [];
    for (let i = 0; i < order.length; i++) {
      const index = order[i] - 1;
      try {
        const result = await promises[index];
        results.push(result);
      } catch (error) {
        console.error("Error executing promise:", error);
        throw new Error("Promise rejected");
      }
    }
    return results;
  };
  
  //Example:
  const order = [2, 1, 3];
  const promises = [
    Promise.resolve("data1"),
    Promise.resolve("data2"),
    Promise.resolve("data3"),
  ];
  //expected results = ["data2", "data1", "data3"]
  
  sequentialPromise(promises, order)
    .then((results) => {
      console.log(results); //expected results = ["data2", "data1", "data3"]
    })
    .catch((error) => {
      console.error("Error in executing promiese:", error);
    });
  
  //test the sequentialPromise function using async/await
  const testSequentialPromise = async () => {
    try {
      const results = await sequentialPromise(promises, order);
      console.log(`sequentialPromise function using async/await`);
      console.log(results);
    } catch (error) {
      console.error("Error in executing promiese:", error);
    }
  };
  
  testSequentialPromise();
  
  // ### use Promise.all, Promise.race, Promise.allSettled to write an example.
  const promises1 = [
    Promise.resolve("data1").then((value) => {
      return value;
    }),
    Promise.reject("Error in data2").catch((error) => {
      return error;
    }),
    new Promise((resolve) => {
      return setTimeout(() => {
        resolve("data3"), 1000;
      });
    }),
  ];
  
  // Promise.all
  // waits for all promises to be resolved or any one to be rejected
  Promise.all(promises1)
  .then((results) => {
      console.log("Promise.all results:", results);
  })
  .catch((error) => {
      console.error("Promise.all error:", error);
  })