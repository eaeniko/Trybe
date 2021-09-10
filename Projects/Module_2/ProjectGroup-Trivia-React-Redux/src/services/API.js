export async function fetchTriviaToken() {
  const re = await fetch('https://opentdb.com/api_token.php?command=request');
  const rejson = await re.json();
  if (rejson.response_code === 0) {
    return rejson;
  }
  return 'Erro na requisição de token';
}

export async function fetchTriviaQuestions(token) {
  const re = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const rejson = await re.json();
  if (rejson.response_code === 0) {
    return rejson;
  }
  return 'Erro na requisição de perguntas';
}
