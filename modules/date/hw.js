'use strict';

function checkAge(dateStr, limit = 14) {
  const now = new Date();
  const birthDate = new Date(dateStr);
  const ageDiff = now.getFullYear() - birthDate.getFullYear();

  if (ageDiff > limit) {
    return true;
  }

  if (ageDiff === limit) {
    const monthDiff = now.getMonth() - birthDate.getMonth();

    if (monthDiff > 0) {
      return true;
    }

    if (monthDiff === 0) {
      const dayDiff = now.getDate() - birthDate.getDate();

      if (dayDiff > 0) {
        return true;
      }
    }
  }

  return false;
}
