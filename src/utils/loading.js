export function setupLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        window.addEventListener('load', () => {
            loading.classList.add('fadeOut');
            // Optional: Remove from DOM after animation to prevent interaction issues
            setTimeout(() => {
                loading.style.display = 'none';
            }, 1000); // Match animation duration
        });
    }
}

export const LoadingHTML = `
  <div id="loading">
    <span class="loader"></span>
  </div>
`;
