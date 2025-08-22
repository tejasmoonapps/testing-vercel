export default function handler(request, response) {
  // Set the specific origin that is allowed to make requests
  response.setHeader('Access-Control-Allow-Origin', '*');
  
  // You can also add other headers for more complex requests (e.g., with different methods or custom headers)
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests (the browser sends an OPTIONS request first for some types of requests)
  if (request.method === 'OPTIONS') {
    response.status(204).end();
    return;
  }
  
  // Your actual API logic
  response.status(200).json({ 
    message: 'Hello from the Vercel Function!' 
  });
}
