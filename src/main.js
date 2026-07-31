import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // --- COUNTDOWN TIMER ---
  // A dynamic countdown timer starting at 14 minutes and 52 seconds, resetting or counting down to simulate live urgency.
  const timerElement = document.getElementById('countdown-timer');
  if (timerElement) {
    let timeLeft = 14 * 60 + 52; // 14 minutes 52 seconds in seconds
    
    const updateTimer = () => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      
      timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      
      if (timeLeft > 0) {
        timeLeft--;
      } else {
        timeLeft = 14 * 60 + 52; // reset to keep the landing page active for future visits
      }
    };
    
    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // --- FAQ ACCORDION ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    
    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        
        // Close other open FAQ items to keep the UI clean
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            const otherTrigger = otherItem.querySelector('.faq-trigger');
            const otherContent = otherItem.querySelector('.faq-content');
            if (otherTrigger && otherContent) {
              otherTrigger.setAttribute('aria-expanded', 'false');
              otherContent.classList.remove('active');
              otherItem.querySelector('.faq-icon')?.classList.remove('rotate-180');
            }
          }
        });
        
        // Toggle current item
        trigger.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
        content.classList.toggle('active');
        item.querySelector('.faq-icon')?.classList.toggle('rotate-180');
      });
    }
  });

  // --- DEPOIMENTOS FILTER / SHOW MORE ---
  const testimonialGrid = document.getElementById('testimonial-grid');
  const showMoreBtn = document.getElementById('btn-show-more-testimonials');
  
  if (testimonialGrid && showMoreBtn) {
    const hiddenTestimonials = testimonialGrid.querySelectorAll('.testimonial-hidden');
    
    showMoreBtn.addEventListener('click', () => {
      hiddenTestimonials.forEach(card => {
        card.classList.remove('hidden', 'testimonial-hidden');
        card.classList.add('animate-fade-in');
      });
      showMoreBtn.classList.add('hidden');
    });
  }

  // --- KEYBOARD ACCESSIBILITY FOR ACCORDIONS ---
  // Allow expanding/collapsing FAQ items using Space/Enter
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          trigger.click();
        }
      });
    }
  });
});
