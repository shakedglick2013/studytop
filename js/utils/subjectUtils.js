import { escapeHtml } from './htmlUtils.js';

/**
 * @param {import('../models/types.js').Subject[]} subjects
 * @param {string} subjectId
 * @returns {import('../models/types.js').Subject|undefined}
 */
export function getSubjectById(subjects, subjectId) {
  return subjects.find((s) => s.id === subjectId);
}

/** @returns {string} תגית צבע+שם למקצוע, HTML בטוח */
export function subjectBadgeHTML(subjects, subjectId) {
  const subject = getSubjectById(subjects, subjectId);
  if (!subject) return '<span class="badge badge-neutral">מקצוע לא ידוע</span>';
  return `<span class="badge badge-neutral"><span class="subject-dot" style="background:${subject.color}"></span>${escapeHtml(subject.name)}</span>`;
}
