document.addEventListener('DOMContentLoaded', () => {
  const load = (id, path) => {
    fetch(path)
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.text();
      })
      .then(html => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
      })
      .catch(err => {
        console.error(`Failed to load ${path}`, err);
      });
  };

load('footer', './footer.html');
});