module.exports = {
    ci: {
      collect: {
        url: process.env.LHCI_URL??'http://localhost:5173/',
        startServerCommand: process.env.URL??undefined,
      },
      assert: {
       
        assertions: {
          "categories:performance": ["warn", {"minScore": 0.9}],
          "categories:accessibility": ["error", {"minScore": 1}]
        }
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };