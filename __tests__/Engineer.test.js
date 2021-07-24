
const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('Should set GitHUb account using constructor', () => {
        const testGitHub = 'GitHub';
        const engineer = new Engineer('Engineer', 1, 'test@noemail.com', testGitHub);
        expect(engineer.github).toBe(testGitHub);
    });
});

describe('getRole', () => {
    it('Should return \'Engineer\' using getRole()', () => {
        const testRole = 'Engineer';
        const engineer = new Engineer('Role', 1, 'test@noemail.com', 'GitHubUser');
        expect(engineer.getRole()).toBe(testRole);
    });
});


describe('getGithub', () => {
    it('Should get GitHub username using getGithub()', () => {
        const testVal = 'GitHubUser';
        const engineer = new Engineer('GitHub', 1, 'test@noemail.com', testVal);
        expect(engineer.getGithub()).toBe(testVal);
    });
});