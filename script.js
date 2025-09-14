// Toggle filter panel
const filterToggle = document.getElementById('filterToggle');
const filterPanel = document.getElementById('filterPanel');

filterToggle.addEventListener('click', () => {
  filterPanel.classList.toggle('active');
});

// Close filter panel when clicking outside
document.addEventListener('click', (e) => {
  if (!filterToggle.contains(e.target) && !filterPanel.contains(e.target)) {
    filterPanel.classList.remove('active');
  }
});

// Update filter count based on selected checkboxes
function updateFilterCount() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const filterCount = document.querySelector('.filter-count');
  filterCount.textContent = checkboxes.length;
}

// Add event listeners to all checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', updateFilterCount);
});

// Initialize filter count

document.querySelector('.filter-count').textContent = '0';

