function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar-menu');
  var contentWrapper = document.getElementById('contentWrapper');
  sidebar.classList.toggle('active');
  contentWrapper.classList.toggle('active');
}