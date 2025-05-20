
function includeHTML() {
  const elements = document.querySelectorAll('[include-html]');
  elements.forEach(el => {
    const file = el.getAttribute('include-html');
    fetch(file)
      .then(res => res.text())
      .then(data => {
        el.innerHTML = data;
        el.removeAttribute('include-html');
        includeHTML(); // 递归加载嵌套组件
      });
  });
}
document.addEventListener("DOMContentLoaded", includeHTML);
