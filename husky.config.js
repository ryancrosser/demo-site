module.exports = {
  hooks: {
    'commit-msg': 'validate-commit-msg',
    'pre-commit': 'npm run lint && git add .'
  }
};
