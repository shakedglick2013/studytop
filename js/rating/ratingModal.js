import { openModal } from '../components/modal.js';
import { renderStarRating } from '../components/starRating.js';
import { updateData } from '../data/storage.js';
import { showToast } from '../components/toast.js';

function ratingLabel(value) {
  return value > 0 ? `הדירוג שלך: ${value} מתוך 5` : 'עדיין לא נבחר דירוג';
}

/** מציגה את חלון בקשת הדירוג. סגירה בכל דרך (כפתור/Escape/קליק בחוץ) בלי שליחה מוצלחת = "דחייה" (צינון 24 שעות). */
export function showRatingModal() {
  let selected = 0;
  let submitted = false;

  openModal({
    title: 'איך החוויה שלך ב-StudyTop?',
    bodyHtml: `
      <p class="page-subtitle">נשמח לדעת איך היית מדרג/ת את האפליקציה.</p>
      <div id="rating-stars-container" style="margin:16px 0 8px;"></div>
      <p id="rating-value-label" class="page-subtitle"></p>
    `,
    actions: [
      { label: 'סגירה', className: 'btn-secondary' },
      {
        label: 'שליחת הדירוג',
        className: 'btn-primary',
        onClick: () => {
          if (selected === 0) return false;
          submitted = true;
          updateData((d) => {
            d.ratingState = { ...d.ratingState, ratingPromptShown: true, rating: selected, ratedAt: new Date().toISOString() };
            return d;
          });
          showToast('תודה על הדירוג!', 'success');
        },
      },
    ],
    onClose: () => {
      if (submitted) return;
      updateData((d) => {
        d.ratingState = { ...d.ratingState, ratingPromptShown: true, ratingPromptDismissedAt: new Date().toISOString() };
        return d;
      });
    },
  });

  const submitBtn = document.querySelector('.modal-actions .btn-primary');
  if (submitBtn) submitBtn.disabled = true;

  const valueLabelEl = document.getElementById('rating-value-label');
  valueLabelEl.textContent = ratingLabel(0);

  renderStarRating({
    container: document.getElementById('rating-stars-container'),
    initialRating: 0,
    onChange: (value) => {
      selected = value;
      valueLabelEl.textContent = ratingLabel(value);
      if (submitBtn) submitBtn.disabled = value === 0;
    },
  });
}
