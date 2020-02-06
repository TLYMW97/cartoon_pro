const sessionData = {
  user: JSON.parse(sessionStorage.getItem('user')),
  currentManga: JSON.parse(sessionStorage.getItem('curManga')),
  sections: JSON.parse(sessionStorage.getItem('sections')),
  currentSection: sessionStorage.getItem('currentSection'),
  tags: JSON.parse(sessionStorage.getItem('tags'))
};
const state = {
  user: sessionData.user || {},
  currentManga: sessionData.currentManga || {},
  sections: sessionData.sections || {},
  currentSection: sessionData.currentSection || '',
  tags: sessionData.tags || []
};
export default state;
