const sessionData = {
  user: JSON.parse(sessionStorage.getItem('user')),
  currentManga: JSON.parse(sessionStorage.getItem('curManga')),
  sections: JSON.parse(sessionStorage.getItem('sections')),
  currentSection: JSON.parse(sessionStorage.getItem('currentSection')),
  tags: JSON.parse(sessionStorage.getItem('tags')),
  historyRead: JSON.parse(localStorage.getItem('historyRead')),
  searchResult: JSON.parse(sessionStorage.getItem('searchResult')),
  authorManga: JSON.parse(sessionStorage.getItem('authorManga')),
  mangaData: JSON.parse(sessionStorage.getItem('mangaData')),
  mangaForm: JSON.parse(sessionStorage.getItem('mangaForm')),
  mangaTitlePage: JSON.parse(sessionStorage.getItem('mangaTitlePage')),
  chapterData: JSON.parse(sessionStorage.getItem('chapterData')),
};
const state = {
  user: sessionData.user || {},
  currentManga: sessionData.currentManga || {},
  sections: sessionData.sections || {},
  currentSection: sessionData.currentSection || '',
  tags: sessionData.tags || [],
  historyRead: sessionData.historyRead || [],
  searchResult: sessionData.searchResult || [],
  authorManga: sessionData.authorManga || [],
  mangaData: sessionData.mangaData || [],
  mangaForm: sessionData.mangaForm || [],
  mangaTitlePage: sessionData.mangaTitlePage || [],
  chapterData: sessionData.chapterData || [],
};
export default state;
