const button = document.querySelector('#refresh');
const toast = document.querySelector('#toast');
let timer;
button.addEventListener('click', () => {
  toast.textContent = 'هذه بيانات تجريبية ثابتة؛ لا يوجد خادم Proxmox متصل.';
  toast.classList.add('show');
  clearTimeout(timer);
  timer = setTimeout(() => toast.classList.remove('show'), 3200);
});
