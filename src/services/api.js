import axios from 'axios';

export const fetchStudents = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error('Error fetching students:', error);
    return [];
  }
};