// GET REQUEST
function getTodos() {
  // axios({
  //   method:'get',
  //   url:'https://jsonplaceholder.typicode.com/todos',
  //   params:{
  //     _limit:5
  //   }
  // }).then(res=>showOutput(res))
  // .catch(err=>console.error(err));

  //the above way is a long way, there is a more practical way to do it
  //either you can use axios.get or by default if nothing is specified it is considered a get request

  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then(res=>showOutput(res))
  .catch(err=>console.error(err));
}

// POST REQUEST
function addTodo() {
  axios.post('https://jsonplaceholder.typicode.com/todos',{
    title:'New todo',
    completed:false
  }).then(res=>showOutput(res))
  .catch(err=>console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  //every api works differently here we had to specify in the endpoint which id todo we wanted to put/post
  //in our case we have used 2
  axios.patch('https://jsonplaceholder.typicode.com/todos/2',{
    title:'work todo',
    completed:false
  }).then(res=>showOutput(res))
  .catch(err=>console.error(err));

  // axios.put('https://jsonplaceholder.typicode.com/todos/2',{
  //   title:'work todo',
  //   completed:false
  // }).then(res=>showOutput(res))
  // .catch(err=>console.error(err));
}

// DELETE REQUEST
function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/todos/2')
  .then(res=>showOutput(res))
  .catch(err=>console.log(err));
}

// SIMULTANEOUS DATA
function getData() {
  //simultaneous request means using both get or put request at the same time..you will se

  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
    axios.get('https://jsonplaceholder.typicode.com/comments?_limit=5')
  ]).then(axios.spread((todos,comments)=>{
    console.log(todos);
    console.log(comments);
  }))
  .catch(err=>console.error(err));
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
