const self = typeof window !== 'undefined' ? window : global;

self.addEventListener('message', async function(event) {
  if (event.data === 'fetchFeedbacks') {
    try {
      const response = await fetch('http://localhost:8000/feedback');
      const data = await response.json();
      self.postMessage(data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  }
});