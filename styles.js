export const styles = {
  customFlex: (vertical = 'center', horizontal = 'center') => `
    display: flex;
    align-items: ${vertical};
    justify-content: ${horizontal};
  `
}

export const DefaultComponentStyle = (letter) => {
  let bg = '';
  if (letter == 'r') {
    bg = 'rgba(255,0,0,0.1)';
  } else if (letter == 'g') {
    bg = 'rgba(0,255,0,0.1)';
  } else if (letter == 'b') {
    bg = 'rgba(0,0,255,0.1)';
  }
  return `
    height: 100px;
    padding: 20px;
    background: ${bg};
    ${styles.customFlex('center', 'start')}
  `;
};