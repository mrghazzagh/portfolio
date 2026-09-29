(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  const filters = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('[data-tags]')];
  filters.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
    cards.forEach(card => { card.hidden = filter !== 'all' && !card.dataset.tags.split(' ').includes(filter); });
  }));
  const challenge = document.querySelector('[data-challenge]');
  if (!challenge) return;
  const responses = {
    a: { title: 'Reminders can help, but first check the path.', detail: 'An announcement may reach students once. If the weekly layout keeps hiding the work, they will need the same reminder next week.' },
    b: { title: 'Walk the student path.', detail: 'See what learners actually encounter: where the week begins, how tasks are named, and whether the next action is visible. That gives the redesign a real starting point.' },
    c: { title: 'The syllabus is useful, but timing matters.', detail: 'A detailed syllabus can document expectations. Students also need those expectations beside the activities at the moment they are doing the work.' }
  };
  const choices = [...challenge.querySelectorAll('[data-choice]')];
  const response = challenge.querySelector('.challenge-response');
  const label = challenge.querySelector('.challenge-step');
  choices.forEach(button => button.addEventListener('click', () => {
    const selected = responses[button.dataset.choice];
    choices.forEach(item => { item.classList.toggle('selected', item === button); item.setAttribute('aria-pressed', String(item === button)); });
    response.querySelector('h4').textContent = selected.title;
    response.querySelector('h4 + p').textContent = selected.detail;
    response.hidden = false;
    label.textContent = 'Your design lens';
    response.focus({ preventScroll: false });
  }));
  challenge.querySelector('[data-reset]').addEventListener('click', () => {
    response.hidden = true;
    label.textContent = 'The situation';
    choices.forEach(item => { item.classList.remove('selected'); item.setAttribute('aria-pressed', 'false'); });
    choices[0].focus();
  });
})();
