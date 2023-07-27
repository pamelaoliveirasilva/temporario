import axios from 'axios';

// Função para realizar o logout
export const logoutUser = async (token) => {
  try {
    const response = await axios.post('/api/logout', null, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    });

    return response.data; // Retorne a resposta da API (opcional, dependendo da necessidade)
  } catch (error) {
    throw error; // Lança o erro para que possa ser tratado no componente que chama a função
  }
};